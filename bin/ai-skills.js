#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";
import { checkbox, confirm } from "@inquirer/prompts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRoot = path.resolve(__dirname, "..");
const skillsRoot = path.join(packageRoot, "skills");

const args = process.argv.slice(2);

const TARGETS = [
  {
    name: "Claude Code",
    value: "claude-code",
    description: "Install to .claude/skills/<skill-name>/SKILL.md"
  },
  {
    name: "Codex",
    value: "codex",
    description: "Install to .codex/skills/<skill-name>/SKILL.md"
  },
  {
    name: "OpenCode",
    value: "opencode",
    description: "Install as .opencode/commands/<skill-name>.md"
  },
  {
    name: "Cursor",
    value: "cursor",
    description: "Install as .cursor/rules/<skill-name>.mdc"
  },
  {
    name: "Windsurf",
    value: "windsurf",
    description: "Install as .windsurf/rules/<skill-name>.md"
  }
];

function printHelp() {
  console.log(`
AI Skills CLI

Usage:
  ai-skills list
  ai-skills install <skill-name>
  ai-skills install <skill-name> --target <target>
  ai-skills install <skill-name> --target <target1,target2>
  ai-skills install <skill-name> --all
  ai-skills install <skill-name> --global

Targets:
  claude-code
  codex
  opencode
  cursor
  windsurf

Examples:
  ai-skills list

  ai-skills install learn-fast-technology

  ai-skills install learn-fast-technology --target claude-code

  ai-skills install learn-fast-technology --target claude-code,cursor,windsurf

  ai-skills install learn-fast-technology --all

  ai-skills install learn-fast-technology --target claude-code --global
`);
}

function getArgValue(name) {
  const index = args.indexOf(name);
  if (index === -1) return null;
  return args[index + 1] ?? null;
}

function hasFlag(name) {
  return args.includes(name);
}

function copyDirSync(source, target) {
  if (!fs.existsSync(source)) {
    throw new Error(`Source folder does not exist: ${source}`);
  }

  fs.mkdirSync(target, { recursive: true });

  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const sourcePath = path.join(source, entry.name);
    const targetPath = path.join(target, entry.name);

    if (entry.isDirectory()) {
      copyDirSync(sourcePath, targetPath);
    } else {
      fs.copyFileSync(sourcePath, targetPath);
    }
  }
}

function readSkillMd(skillName) {
  const skillPath = path.join(skillsRoot, skillName, "SKILL.md");

  if (!fs.existsSync(skillPath)) {
    throw new Error(`Missing SKILL.md for skill: ${skillName}`);
  }

  return fs.readFileSync(skillPath, "utf8");
}

function assertSkillExists(skillName) {
  const source = path.join(skillsRoot, skillName);

  if (!fs.existsSync(source)) {
    throw new Error(`Skill not found: ${skillName}`);
  }

  const skillMd = path.join(source, "SKILL.md");

  if (!fs.existsSync(skillMd)) {
    throw new Error(`Skill exists but missing SKILL.md: ${skillName}`);
  }
}

function parseTargets(rawTarget) {
  if (!rawTarget) return [];

  return rawTarget
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function validateTargets(targets) {
  const validTargets = TARGETS.map((target) => target.value);

  for (const target of targets) {
    if (!validTargets.includes(target)) {
      throw new Error(
        `Unsupported target: ${target}. Valid targets: ${validTargets.join(", ")}`
      );
    }
  }
}

async function promptTargets() {
  const selectedTargets = await checkbox({
    message: "Chọn target muốn cài skill:",
    choices: TARGETS.map((target) => ({
      name: `${target.name} - ${target.description}`,
      value: target.value
    })),
    required: true,
    instructions: "Space để chọn/bỏ chọn, Enter để xác nhận"
  });

  return selectedTargets;
}

async function promptGlobalInstall() {
  const useGlobal = await confirm({
    message: "Bạn muốn cài global không?",
    default: false
  });

  return useGlobal;
}

function getInstallPath({ target, skillName, isGlobal }) {
  const cwd = process.cwd();
  const home = os.homedir();

  switch (target) {
    case "claude-code":
      return isGlobal
        ? path.join(home, ".claude", "skills", skillName)
        : path.join(cwd, ".claude", "skills", skillName);

    case "codex":
      return isGlobal
        ? path.join(home, ".codex", "skills", skillName)
        : path.join(cwd, ".codex", "skills", skillName);

    case "opencode":
      return isGlobal
        ? path.join(home, ".opencode", "commands")
        : path.join(cwd, ".opencode", "commands");

    case "cursor":
      return path.join(cwd, ".cursor", "rules");

    case "windsurf":
      return path.join(cwd, ".windsurf", "rules");

    default:
      throw new Error(`Unsupported target: ${target}`);
  }
}

function installSkillToTarget(skillName, target, isGlobal) {
  const source = path.join(skillsRoot, skillName);
  const installPath = getInstallPath({ target, skillName, isGlobal });

  if (target === "opencode") {
    const content = readSkillMd(skillName);

    fs.mkdirSync(installPath, { recursive: true });

    const targetFile = path.join(installPath, `${skillName}.md`);
    fs.writeFileSync(targetFile, content, "utf8");

    return {
      target,
      path: targetFile
    };
  }

  if (target === "cursor") {
    const content = readSkillMd(skillName);

    fs.mkdirSync(installPath, { recursive: true });

    const targetFile = path.join(installPath, `${skillName}.mdc`);
    fs.writeFileSync(targetFile, content, "utf8");

    return {
      target,
      path: targetFile
    };
  }

  if (target === "windsurf") {
    const content = readSkillMd(skillName);

    fs.mkdirSync(installPath, { recursive: true });

    const targetFile = path.join(installPath, `${skillName}.md`);
    fs.writeFileSync(targetFile, content, "utf8");

    return {
      target,
      path: targetFile
    };
  }

  copyDirSync(source, installPath);

  return {
    target,
    path: installPath
  };
}

async function installSkill(skillName) {
  assertSkillExists(skillName);

  const rawTarget = getArgValue("--target");
  const isAll = hasFlag("--all");
  let isGlobal = hasFlag("--global");

  let targets = [];

  if (isAll) {
    targets = TARGETS.map((target) => target.value);
  } else {
    targets = parseTargets(rawTarget);
  }

  if (targets.length === 0) {
    targets = await promptTargets();
  }

  validateTargets(targets);

  if (!hasFlag("--global") && !hasFlag("--local")) {
    const canUseGlobal = targets.some((target) =>
      ["claude-code", "codex", "opencode"].includes(target)
    );

    if (canUseGlobal) {
      isGlobal = await promptGlobalInstall();
    }
  }

  console.log("");
  console.log(`Installing skill: ${skillName}`);
  console.log(`Mode: ${isGlobal ? "global" : "project/local"}`);
  console.log("");

  const results = [];

  for (const target of targets) {
    const result = installSkillToTarget(skillName, target, isGlobal);
    results.push(result);
  }

  console.log("Installed successfully:");
  for (const result of results) {
    console.log(`- ${result.target}: ${result.path}`);
  }
}

function listSkills() {
  if (!fs.existsSync(skillsRoot)) {
    console.log("No skills folder found.");
    return;
  }

  const skills = fs
    .readdirSync(skillsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  if (skills.length === 0) {
    console.log("No skills available.");
    return;
  }

  console.log("Available skills:");
  for (const skill of skills) {
    console.log(`- ${skill}`);
  }
}

try {
  const command = args[0];

  if (!command || command === "help" || command === "--help") {
    printHelp();
    process.exit(0);
  }

  if (command === "list") {
    listSkills();
    process.exit(0);
  }

  if (command === "install") {
    const skillName = args[1];

    if (!skillName) {
      throw new Error("Missing skill name.");
    }

    await installSkill(skillName);
    process.exit(0);
  }

  throw new Error(`Unknown command: ${command}`);
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}
