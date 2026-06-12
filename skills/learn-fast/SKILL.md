---
name: learn-fast
description: Create a focused, practical, research-backed learning guide for quickly acquiring any technical, professional, or personal skill. Use when the user asks to learn, understand, practice, upskill, create a roadmap for, or become productive with a topic quickly, including technologies, programming tools, languages, business skills, creative skills, management skills, and personal effectiveness skills. Produce one Vietnamese Markdown guide that prioritizes the highest-value knowledge, practical application, sequencing, trade-offs, common mistakes, exercises, and trustworthy current references.
---

# Learn Fast

Act as an expert teacher, senior mentor, practical learning coach, and domain specialist. Help the user become useful with the target skill quickly without implying that they must master everything before starting.

## Required Input

Identify the following from the request and conversation:

- **Target skill**: Required. Examples: Kubernetes, SEO, English speaking, video editing, or systems thinking.
- **Desired outcome**: Optional. What the user wants to do with the skill.
- **Current level and transferable experience**: Optional.
- **Time available or deadline**: Optional.
- **Work context**: Optional. Examples: production project, job interview, freelance work, or personal development.
- **Constraints**: Optional. Examples: budget, tools, language, platform, or access limitations.

Do not block on missing optional information. Infer reasonable defaults from the conversation and state important assumptions briefly in the guide. Default to a learner who wants practical working ability before deep expertise. Use the user's existing experience to explain unfamiliar ideas through useful comparisons, but do not force software analogies onto unrelated subjects.

Process one target skill per invocation. If the request names multiple unrelated skills without a clear primary goal, ask the user to select one before creating files.

## Workflow

Follow these steps in order:

1. **Define the practical outcome**
   - Translate the topic into observable abilities and real-world use cases.
   - Distinguish basic use, work-ready ability, and advanced capability.

2. **Research the current landscape**
   - Apply the research rules below.
   - Establish current terminology, common use cases, market or workplace expectations, accepted best practices, and meaningful alternatives.
   - Record only sources that were actually verified.

3. **Build the learning map**
   - Identify prerequisites, core concepts, workflows, tools, and feedback loops.
   - Select the smallest set of knowledge that unlocks useful practice.
   - Separate "learn now," "learn later," and "skip unless needed."

4. **Apply the 80/20 filter**
   - Prioritize recurring, high-impact tasks over exhaustive theory.
   - Explain why each selected topic creates practical value.
   - Do not use a fixed number of topics; include only genuinely high-leverage items.

5. **Design deliberate practice**
   - Create exercises that produce visible results and useful feedback.
   - Progress from a constrained beginner task to a realistic task and then an advanced challenge.
   - Prefer one small completed project over many disconnected tutorials.

6. **Explain decisions and failure modes**
   - Include best practices, trade-offs, when not to use an approach, and common beginner mistakes.
   - Avoid presenting preferences as universal rules.

7. **Write exactly one Markdown guide**
   - Use the mandatory output structure.
   - Write to the filename produced by the naming rules.
   - Do not create supporting files, source dumps, notes, or separate plans unless the user explicitly requests them.

8. **Run the quality checklist**
   - Revise the guide until every applicable item passes.

## Research Rules

Use the strongest research capability available in the current environment.

1. Search the internet when browsing is available.
2. For a library, framework, SDK, API, CLI, database, cloud service, or fast-changing technology, use Context7 or an equivalent documentation MCP when available. Resolve the exact product and version before querying documentation.
3. Prefer sources in this order:
   1. Official documentation, specifications, standards, or maintainers.
   2. Reputable technical or professional organizations.
   3. High-quality guides from recognized practitioners or vendors.
   4. Well-maintained repositories and communities.
   5. Courses or videos only when they add clear learning value.
4. Verify that every included URL exists and supports the claim or learning recommendation. Never invent, autocomplete, or guess a URL.
5. Check publication dates, update dates, product versions, and deprecation notices when freshness matters.
6. Prefer primary sources for technical facts. Use secondary sources for comparison, teaching approaches, market context, or practitioner experience.
7. Separate verified facts from reasoned recommendations. Avoid unsupported claims about popularity, salaries, hiring demand, or market share.
8. Do not paste large passages from sources. Synthesize them for the learner.
9. If research tools are unavailable:
   - State the limitation clearly in section 13.
   - Use existing knowledge cautiously.
   - Do not claim the guide is current.
   - Recommend checking the latest official documentation for fast-changing topics.
   - Include only links known with high confidence; otherwise omit them and say they require verification.
10. If reliable sources disagree, describe the disagreement and explain how the learner should choose.

## Output File Rules

- Create exactly one `.md` file for the requested skill.
- Derive the filename from the target skill, not from the phrase "learn fast."
- Use lowercase ASCII kebab-case.
- Remove accents and punctuation, normalize whitespace to hyphens, and collapse repeated hyphens.
- Preserve widely recognized abbreviations in lowercase.
- Prefer a specific skill phrase over a broad category.

Examples:

| Target skill | Filename |
| --- | --- |
| Kubernetes | `kubernetes.md` |
| SEO | `seo.md` |
| English speaking | `english-speaking.md` |
| Content creation | `content-creation.md` |
| Quản lý thời gian | `quan-ly-thoi-gian.md` |

Write the file in the user-specified directory. If no directory is specified, write it in the current working directory. If the exact file already exists, update that file in place instead of creating a numbered duplicate.

If the environment cannot write files, return one complete Markdown document in the response and identify the intended filename. Do not split it across messages or create multiple artifacts.

## Language and Presentation Rules

- Write the complete learning guide in natural Vietnamese with full diacritics.
- Keep established professional terms in English when translating them would reduce clarity, for example `container`, `pod`, `broker`, `offset`, `keyword research`, or `conversion rate`.
- Define unfamiliar English terms on first use.
- Use clear, practical, direct language. Prefer short paragraphs, bullets, tables, examples, and checklists.
- Explain what to learn, why it matters, when it is used, and how deeply to learn it.
- Mark priority consistently as **Cao**, **Trung bình**, or **Thấp**.
- Distinguish foundational facts from optional advanced detail.
- Use concrete scenarios from work or daily life where appropriate.
- Do not pad the guide with generic encouragement, repeated definitions, or exhaustive history.
- Do not overwhelm the learner with a long tool list. Recommend a small default path and explain alternatives through trade-offs.
- Do not invent statistics, links, quotations, certifications, job requirements, or source claims.
- Use exact versions or dates when they materially affect the advice.
- Keep all 15 mandatory sections even when a section is brief. If a section is not strongly applicable, explain that concisely and provide the closest useful decision guidance.

## Mandatory Output Structure

Use the target skill's natural Vietnamese name in the H1 heading. Preserve a recognized product or technology name when appropriate.

```markdown
# <Tên kỹ năng cần học>

## 1. Tổng quan nhanh
```

Explain:

- What the skill is and which problem it solves.
- Who needs it.
- What the learner can do after learning it.
- Whether and why it remains relevant in the current context.
- What real work commonly requires from practitioners.

```markdown
## 2. Bức tranh thực tế hiện nay
```

Cover:

- Where and how the skill is currently used.
- What employers, clients, users, or the market realistically expect.
- Common misconceptions.
- Topics beginners often overthink or study too deeply too early.

```markdown
## 3. Mục tiêu học nhanh

### Cấp độ 1: Biết dùng cơ bản
### Cấp độ 2: Làm được việc thực tế
### Cấp độ 3: Đi sâu / chuyên nghiệp hơn
```

Define observable outcomes for each level. Avoid vague goals such as "understand well."

```markdown
## 4. Nguyên tắc 80/20

| Ưu tiên | Kiến thức cốt lõi | Vì sao quan trọng | Ứng dụng thực tế |
| --- | --- | --- | --- |
```

Include only high-leverage knowledge that enables immediate or recurring work.

```markdown
## 5. Những phần cần học trước
```

For each topic, include:

- An easy explanation.
- Why it is needed.
- When it is used.
- A realistic example.
- Priority: **Cao**, **Trung bình**, or **Thấp**.

Order topics by prerequisite and practical value, not by textbook convention.

```markdown
## 6. Những phần có thể học sau
```

Classify each item as one of:

- Learn after basic working ability.
- Learn only when a real problem requires it.
- Learn for senior, expert, or leadership growth.
- Skip unless specializing.

```markdown
## 7. Lộ trình học nhanh

### Giai đoạn 1: Hiểu bản chất
### Giai đoạn 2: Thực hành tối thiểu
### Giai đoạn 3: Áp dụng vào thực tế
### Giai đoạn 4: Đi sâu có chọn lọc
```

For every stage, specify:

- What to learn or do.
- The objective.
- A concrete completion result.
- What to avoid studying prematurely.

Include a work-readiness checklist in stage 3.

```markdown
## 8. Bài tập thực hành

### Beginner
### Practical
### Advanced
```

For each exercise or mini project, state:

- Objective.
- Requirements.
- Expected result.
- Knowledge practiced.

Make the Practical exercise resemble real work. Make Advanced optional rather than a prerequisite for starting.

```markdown
## 9. Best practices
```

For each best practice, explain:

- What to do.
- Why to do it.
- The common mistake.
- A realistic example when useful.

```markdown
## 10. Trade-offs và lựa chọn giải pháp

| Giải pháp | Ưu điểm | Nhược điểm | Khi nào nên dùng |
| --- | --- | --- | --- |
```

Compare meaningful approaches, tools, learning paths, or decision strategies. Include when not to choose an option. Do not force false alternatives.

```markdown
## 11. Lỗi phổ biến của người mới
```

For each mistake, include:

- The mistake.
- Why it happens.
- Its consequence.
- How to avoid or correct it.

```markdown
## 12. Checklist áp dụng thực tế
```

Provide testable Markdown checkboxes such as:

```markdown
- [ ] Tôi giải thích được các khái niệm cốt lõi bằng lời của mình.
- [ ] Tôi đã hoàn thành ít nhất một bài tập thực tế.
- [ ] Tôi biết khi nào nên dùng và khi nào không nên dùng kỹ năng này.
```

Adapt the checklist to the target skill. Do not use only generic items.

```markdown
## 13. Tài liệu tham khảo
```

For every verified resource, provide:

- Resource name.
- Direct link.
- What to read or watch first.
- What it is useful for.

List resources in research priority order. State research limitations here when applicable.

```markdown
## 14. Kế hoạch học siêu ngắn

### Học trong 1 ngày
### Học trong 3 ngày
### Học trong 7 ngày
```

Create cumulative plans:

- **1 day**: Understand the landscape and highest-value concepts.
- **3 days**: Perform a basic practical task.
- **7 days**: Complete and review a small realistic application.

Assign concrete activities and deliverables, not only reading time.

```markdown
## 15. Tóm tắt cuối cùng
```

End with:

- The five most important lessons.
- The first action to take now.
- What not to study too early.
- How to continue without becoming overwhelmed.

## Quality Checklist

Before returning the result, verify:

- [ ] Exactly one Markdown learning guide was created.
- [ ] The filename is a specific lowercase ASCII kebab-case skill name.
- [ ] The guide is written in Vietnamese with full diacritics.
- [ ] All 15 required sections are present in the correct order.
- [ ] The guide answers the user's practical goal and reflects their existing experience when known.
- [ ] Level 1, level 2, and level 3 have observable outcomes.
- [ ] The 80/20 section contains only high-leverage knowledge.
- [ ] "Learn now," "learn later," and "skip unless needed" are clearly distinguished.
- [ ] Every major recommendation explains why and when it matters.
- [ ] The roadmap produces concrete deliverables.
- [ ] Exercises cover Beginner, Practical, and Advanced levels.
- [ ] Best practices include mistakes or counterexamples.
- [ ] Trade-offs are balanced and include selection criteria.
- [ ] The readiness checklist is specific and testable.
- [ ] Every reference link was verified or clearly marked as unverified.
- [ ] No fact, statistic, quotation, version, or link was invented.
- [ ] Research limitations are disclosed when current sources could not be accessed.
- [ ] The guide is practical, focused, and does not imply that everything must be learned before starting.

After writing and validating the file, report only the created or updated path and a concise completion note. Do not reproduce the full guide in the final chat response unless the environment cannot write files.
