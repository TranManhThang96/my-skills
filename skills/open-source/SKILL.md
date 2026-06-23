---
name: open-source
description: Analyze a public open-source project from a Git URL and create a five-file Vietnamese learning package. Use when the user provides or asks about a public GitHub, GitLab, Bitbucket, or other public Git repository and wants to quickly understand, run, practice with, clone for learning, extend, review, or improve the project, including architecture, tech stack, modules, code flows, commit-history signals for human vs AI-assisted authorship, security, clean code, performance, testing, and roadmap opportunities.
---

# Open Source

Analyze a public Git repository as evidence-based learning material for software engineers. Produce exactly five Markdown files in an output directory: `intro.md`, `practice.md`, `tech.md`, `improve.md`, and `step-by-step.md`.

The skill instructions are English, but every generated report file must be written in natural Vietnamese with full diacritics.

## Inputs

Identify these inputs from the request:

- `repo_url`: Required public Git URL. Ask for it if missing.
- `branch_or_tag`: Optional branch, tag, or commit.
- `depth`: Optional. Use `standard` by default.
  - `quick`: prioritize README, registry metadata, repository structure, and main modules.
  - `standard`: create the complete five-file analysis with enough depth for learning and practice.
  - `deep`: inspect more representative modules and important code paths, while still avoiding line-by-line whole-repo analysis.
- `focus`: Optional. Examples: backend, frontend, DevOps, security, architecture, performance, testing.

Depth changes analysis breadth and detail, not the required output files. Always create exactly the five Markdown files unless the user explicitly changes the output contract.

## Safety Rules

- Do not fabricate metadata, dependencies, architecture, vulnerabilities, features, or project behavior.
- Base important claims on repository evidence, configuration files, source code, official project docs, registry metadata, or clearly identified API/page data.
- If evidence is unavailable or weak, say so in the relevant report instead of guessing.
- Do not run repository code, install dependencies, execute scripts, start services, or make networked package-manager calls unless the user explicitly asks and the environment grants required permissions.
- Do not print or process secret values if the repository contains accidental secrets. Mention the risk only at a high level and recommend remediation.
- Avoid absolute language for unverified findings. Use confidence labels where required.
- For large repositories, do not claim complete line-by-line analysis. Inventory broadly, then deep-dive into selected high-value modules and flows.
- Do not claim with certainty that a project was written by humans, AI, or a specific tool based only on commit history. Treat this as an AI-assistance likelihood assessment with evidence, counter-evidence, confidence, and limitations.
- Do not infer private facts, intent, or identity traits about maintainers from commit history. Discuss only repository-level engineering signals.
- In `step-by-step.md`, teach a clean-room educational clone: reproduce architecture, ideas, and learning milestones in original code, but do not instruct the reader to copy source files verbatim, bypass licenses, or misuse project names, trademarks, or assets.

## Workflow

1. Normalize the request.
   - Identify the registry, owner or organization, repository name, and optional branch, tag, or commit.
   - Derive the output directory as `<project-name>-analysis`, using lowercase ASCII kebab-case. If the project name cannot be determined, use `open-source-analysis`.
   - Create or use a temporary working directory for cloning or downloading repository contents.

2. Collect metadata.
   - Support GitHub first. Treat GitLab, Bitbucket, and other public Git registries as best-effort.
   - Collect stars, forks, license, author or owning organization, description, homepage, default branch, and latest release when available.
   - Record metadata sources and collection time.
   - If metadata cannot be retrieved through an API, registry page, or repository file, explicitly mark it unavailable.

3. Inspect commit history for authorship signals.
   - Use local Git history when available after cloning. Prefer commands such as `git log --date=iso --shortstat`, `git log --format`, `git shortlog`, and representative diffs.
   - Collect first commit date, latest commit date, approximate commit count, active development window, author/bot indicators, commit message patterns, commit size distribution, large initial imports, burst patterns, co-author trailers, generated-code markers, and release/tag cadence when available.
   - Use commit history as the primary evidence for the AI-assistance assessment. Treat code style or generated comments as secondary evidence only when tied to repository evidence.
   - Mark the assessment `Inconclusive` when the history is shallow, squashed, imported, mostly vendored/generated, or lacks enough signal.

4. Review documentation.
   - Inspect README, docs, CONTRIBUTING, SECURITY, CHANGELOG, examples, tutorials, issue templates, release notes, and project website links when available.
   - Summarize what the project does, who it serves, what problem it solves, and how maintainers expect users or contributors to work with it.

5. Inspect source structure.
   - Inventory languages, package managers, frameworks, runtime, build tools, test tools, CI/CD, entry points, examples, and important modules or packages.
   - Prefer structured signals from manifests and config files before inferring from filenames.
   - Use repository search and file sampling instead of reading every file.

6. Select deep-dive flows.
   - Choose flows with the highest learning value for the requested `focus` and `depth`.
   - Prefer startup, request handling, state or data flow, plugin or extension flow, build/test/deploy flow, authentication/authorization, persistence, CLI command flow, or rendering flow when relevant.
   - Analyze by business or technical flow, not by wandering file by file.

7. Draft the five reports in Vietnamese.
   - Make each file understandable on its own.
   - Include an analysis limitations section in every file.
   - Keep professional English terms when translating would reduce clarity, but explain unfamiliar terms on first use.

8. Self-check.
   - Confirm the output directory contains exactly `intro.md`, `practice.md`, `tech.md`, `improve.md`, and `step-by-step.md`.
   - Confirm all generated report content is Vietnamese with full diacritics.
   - Confirm unverified areas and missing data are clearly labeled.
   - Confirm the analysis is evidence-based, specific, and not padded with generic lists.

## Optional Subagents

Use subagents only when the environment supports them and the task is large enough to benefit. Use at most five subagents:

- `metadata-researcher`: collect metadata, README/docs signals, ecosystem context, and similar projects.
- `practice-designer`: design the practice roadmap and exercises.
- `tech-analyst`: inspect tech stack, architecture, modules, and selected code paths.
- `improvement-reviewer`: identify improvement opportunities for security, clean code, performance, testing, and roadmap.
- `clone-roadmap-designer`: design the clean-room step-by-step clone project that follows the original maintainer's architecture and learning path without copying source verbatim.

If subagents are unavailable, complete the same workflow directly.

## Output Directory

Create one directory:

```text
<project-name>-analysis/
├── intro.md
├── practice.md
├── tech.md
├── improve.md
└── step-by-step.md
```

Do not create extra reports, notes, source dumps, logs, or scratch files in the output directory unless the user explicitly asks for them.

## Report Requirements

### intro.md

Help readers understand what the project is and why it is worth learning. Include:

- Project name and repo URL.
- Author or owning organization.
- Stars, forks, and license when available.
- Short project description.
- Problem the project solves.
- Primary users.
- Role in the ecosystem.
- When to use the project.
- When not to use the project.
- Similar projects or technologies.
- Comparison table with similar projects using: goal, strengths, weaknesses, complexity, and suitable use case.
- Commit-history based assessment of whether the project appears mostly human-authored, likely human-authored with AI assistance, likely AI-assisted/generated, or inconclusive.
  - Include repository-level evidence: commit count or sampled count, time span, commit cadence, message style, author/bot signals, co-author trailers, large import patterns, generated-code markers, and release/tag rhythm when available.
  - Include a table with: signal, observed evidence, interpretation, confidence, and counter-evidence.
  - Use confidence labels `Low`, `Medium`, or `High`; most cases should be `Low` or `Medium` unless the repository contains explicit AI/tool metadata.
  - Explain that commit history cannot prove actual authorship or whether the maintainer used AI privately.
- Why the project is worth learning.
- Analysis limitations.

### practice.md

Create a practical roadmap from basic to advanced. Include:

- Prerequisites: required knowledge and tools.
- How to clone the repository.
- How to select a branch or tag when applicable.
- How to install dependencies, with clear notes when commands require network access or user confirmation.
- How to run the project or examples when repository instructions exist.
- How to run tests when tests exist.
- Three-level practice roadmap:
  - Basic: run the project, read README, run examples, adjust a small config.
  - Intermediate: read main modules, change small behavior, add tests, debug a flow.
  - Advanced: add a feature, refactor a module, optimize performance, integrate with another system.
- Concrete practice exercises.
- Self-assessment checklist.
- Common mistakes while practicing with the project.
- Analysis limitations.

### tech.md

Explain how the project is built. Include:

- Tech stack overview.
- Languages, frameworks, runtime, package manager, build tool, and test framework.
- Text-based folder structure diagram.
- Roles of important folders and files.
- Main entry points.
- Important dependencies and why they are used.
- Overall architecture.
- Notable abstractions or design patterns.
- Main project flows.
- Deep analysis of selected important code paths.
- For each analyzed code path:
  - Related files.
  - File responsibilities.
  - Important functions, classes, or modules.
  - Input data, processing, and output data.
  - What is valuable to learn.
  - What to be careful about when modifying it.
- A clear statement that representative files were analyzed when the full repository was not exhaustively reviewed.
- Analysis limitations.

### improve.md

Identify evidence-based improvement opportunities. Include:

- Overall project quality.
- Security:
  - Risky dependencies when detectable.
  - Notable patterns for input handling, authentication, secrets, network access, and filesystem access.
  - Confidence level for each finding.
- Clean code:
  - Module structure.
  - Naming.
  - Coupling and cohesion.
  - Duplication.
  - Error handling.
  - Testability.
- Performance:
  - Potential hot paths.
  - I/O, network, database, rendering, build time, or memory concerns when relevant.
  - Suggested measurement methods.
- Testing:
  - Existing test coverage signals.
  - Important test gaps.
  - Tests to add before refactoring.
- Feature roadmap:
  - Small features to add.
  - Medium features to add.
  - Advanced features to add.
  - Learning value of each feature.
- Improvement priority table using: impact, effort, risk, confidence.
- Classification for every finding:
  - `Confirmed`: directly supported by repository evidence.
  - `Likely`: strong signals exist but more verification is needed.
  - `Idea`: development suggestion, not a bug.
- Analysis limitations.

### step-by-step.md

Guide the reader to build an educational clone project from scratch by shadowing the original project's architecture and maintainer decisions. Include:

- Clean-room scope:
  - What the clone will reproduce conceptually.
  - What it will intentionally exclude.
  - License, attribution, naming, trademark, and source-copying boundaries.
- Target clone MVP and final learning outcome.
- Prerequisites and tools.
- Suggested tech stack for the clone, either matching the original stack or intentionally simplifying it with a clear reason.
- Ordered milestones from empty repository to usable clone.
- Step-by-step implementation plan. For every step include:
  - Objective.
  - Original repository evidence to read first, such as files, modules, docs, tests, or commits.
  - Implementation task in the clone, written in the reader's own code.
  - Test or verification command.
  - Expected result.
  - Suggested commit message.
  - What to learn from the original maintainer's choice.
- Keep the clone runnable early. Prefer small vertical slices that produce working behavior every 1-3 steps.
- Include checkpoints that compare clone behavior with the original project without copying code verbatim.
- Include debugging drills, refactor drills, and optional advanced extensions.
- Include a final self-review checklist covering functionality, architecture similarity, tests, documentation, and ethical reuse.
- Analysis limitations.

## Acceptance Checklist

Before finishing, verify:

- [ ] Exactly five Markdown files were created.
- [ ] The only files in the output directory are `intro.md`, `practice.md`, `tech.md`, `improve.md`, and `step-by-step.md`.
- [ ] All generated report content is Vietnamese with full diacritics.
- [ ] Project metadata is included when retrievable.
- [ ] Missing data and unverified areas are clearly documented.
- [ ] `intro.md` compares the project with similar projects.
- [ ] `intro.md` includes a commit-history based AI-assistance likelihood assessment with evidence, counter-evidence, confidence, and limitations.
- [ ] `practice.md` contains a concrete practice roadmap.
- [ ] `tech.md` analyzes tech stack, architecture, and important code paths.
- [ ] `improve.md` contains confidence-classified findings or improvement opportunities.
- [ ] `step-by-step.md` guides a clean-room educational clone with ordered steps, original evidence to read, implementation tasks, verification, and learning notes.
- [ ] The reports do not claim line-by-line analysis of a large repository.
- [ ] No information is invented without evidence.
