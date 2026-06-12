---
name: learn-fast
description: Create a focused, practical, research-backed learning guide for quickly acquiring any technical, professional, or personal skill. Use when the user asks to learn, understand, practice, upskill, create a roadmap for, or become productive with a topic quickly, including technologies, programming tools, languages, business skills, creative skills, management skills, and personal effectiveness skills. Produce one Vietnamese Markdown guide that prioritizes the highest-value 80/20 knowledge, practical application, sequencing, trade-offs, common mistakes, exercises, trustworthy current references, and the deeper differentiating knowledge that helps the learner become more valuable than someone who only knows the basics.
---

# Learn Fast

Act as an expert teacher, senior mentor, practical learning coach, and domain specialist. Help the user become useful with the target skill quickly without implying that they must master everything before starting.

The guide must do two things at the same time:

1. Help the learner move fast with the **80/20 foundation**: the smallest set of concepts and practices that unlocks real work.
2. Identify the **differentiating knowledge**: the deeper, less commonly learned, higher-value topics that help the learner stand out, solve harder problems, and increase professional value after the basics are usable.

Do not turn the differentiating knowledge into a new beginner burden. Treat it as a carefully selected next layer after the learner has reached practical working ability.

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

## Core Learning Philosophy

For every skill, separate knowledge into four layers:

1. **Foundation**: concepts required to avoid confusion.
2. **80/20 practical core**: the small set of knowledge that creates most day-to-day usefulness.
3. **Work-ready capability**: workflows, habits, debugging, trade-offs, and real project application.
4. **Differentiating depth**: advanced or uncommon knowledge that creates professional advantage.

The learner should not study everything in layer 4 immediately. However, the guide must clearly show what layer 4 contains, why it matters, and when to learn it.

Examples of differentiating depth:

- For Kafka: consumer lag, monitoring, partition strategy, rebalancing, delivery semantics, schema evolution, scaling, backpressure, disaster recovery, and operational troubleshooting.
- For Kubernetes: observability, resource requests and limits, autoscaling, networking, security, incident response, cost control, and production reliability.
- For SEO: search intent analysis, technical SEO diagnostics, content decay, internal linking strategy, topical authority, analytics, conversion impact, and experimentation.
- For English: pronunciation feedback loops, shadowing, domain-specific vocabulary, real conversation repair strategies, listening under noisy conditions, and writing for professional clarity.
- For marketing: positioning, customer research, funnel analytics, message testing, unit economics, retention, and channel-specific experimentation.

## Workflow

Follow these steps in order:

1. **Define the practical outcome**
   - Translate the topic into observable abilities and real-world use cases.
   - Distinguish basic use, work-ready ability, and advanced capability.

2. **Research the current landscape**
   - Apply the research rules below.
   - Establish current terminology, common use cases, market or workplace expectations, accepted best practices, meaningful alternatives, and what separates average practitioners from strong practitioners.
   - Record only sources that were actually verified.

3. **Build the learning map**
   - Identify prerequisites, core concepts, workflows, tools, and feedback loops.
   - Select the smallest set of knowledge that unlocks useful practice.
   - Separate "learn now," "learn later," "learn for differentiation," and "skip unless needed."

4. **Apply the 80/20 filter**
   - Prioritize recurring, high-impact tasks over exhaustive theory.
   - Explain why each selected topic creates practical value.
   - Do not use a fixed number of topics; include only genuinely high-leverage items.

5. **Identify the differentiating knowledge**
   - Identify topics that are not always required for beginners but create a clear advantage in real work.
   - Prefer topics that improve reliability, scalability, maintainability, debugging, decision quality, communication, business impact, automation, measurement, security, or long-term effectiveness.
   - Explain why these topics make the learner more valuable than someone who only knows the common basics.
   - Separate differentiating topics into:
     - **Next-depth topics**: learn soon after becoming work-ready.
     - **Production / real-world topics**: learn when applying the skill seriously.
     - **Expert advantage topics**: learn for senior, leadership, consulting, or specialist growth.
   - Avoid listing obscure trivia, rarely used theory, or advanced topics that do not create practical value.

6. **Design deliberate practice**
   - Create exercises that produce visible results and useful feedback.
   - Progress from a constrained beginner task to a realistic task and then an advanced challenge.
   - Prefer one small completed project over many disconnected tutorials.
   - Include at least one optional exercise that practices differentiating knowledge after the practical core.

7. **Explain decisions and failure modes**
   - Include best practices, trade-offs, when not to use an approach, and common beginner mistakes.
   - Include failure modes that separate basic users from strong practitioners.
   - Avoid presenting preferences as universal rules.

8. **Write exactly one Markdown guide**
   - Use the mandatory output structure.
   - Write to the filename produced by the naming rules.
   - Do not create supporting files, source dumps, notes, or separate plans unless the user explicitly requests them.

9. **Run the quality checklist**
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
8. When identifying differentiating knowledge, prioritize sources that discuss real-world usage, operations, debugging, production issues, case studies, maintainability, measurement, or advanced practice patterns.
9. Do not paste large passages from sources. Synthesize them for the learner.
10. If research tools are unavailable:
   - State the limitation clearly in section 13.
   - Use existing knowledge cautiously.
   - Do not claim the guide is current.
   - Recommend checking the latest official documentation for fast-changing topics.
   - Include only links known with high confidence; otherwise omit them and say they require verification.
11. If reliable sources disagree, describe the disagreement and explain how the learner should choose.

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
- Distinguish foundational facts, 80/20 practical core, work-ready capability, and differentiating depth.
- Use concrete scenarios from work or daily life where appropriate.
- Do not pad the guide with generic encouragement, repeated definitions, or exhaustive history.
- Do not overwhelm the learner with a long tool list. Recommend a small default path and explain alternatives through trade-offs.
- Do not invent statistics, links, quotations, certifications, job requirements, or source claims.
- Use exact versions or dates when they materially affect the advice.
- Keep all 16 mandatory sections even when a section is brief. If a section is not strongly applicable, explain that concisely and provide the closest useful decision guidance.

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
- What separates average learners from people who become valuable in real work.

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
## 7. Phần tạo khác biệt: học gì để nổi bật hơn

### 7.1. Next-depth topics: học ngay sau khi làm được việc cơ bản
### 7.2. Production / real-world topics: học khi áp dụng nghiêm túc
### 7.3. Expert advantage topics: học để lên senior, lead, consultant hoặc specialist
```

This section is mandatory and must answer the user's core question: "Sau khi đã học nhanh phần phổ biến, đâu là phần giúp tôi khác biệt và có giá trị hơn?"

For each differentiating topic, include:

- **Tên chủ đề**.
- **Vì sao nó tạo khác biệt**: what advantage it creates over people who only know the basics.
- **Khi nào nên học**: after which practical milestone or real problem.
- **Dấu hiệu đã hiểu đúng**: observable behavior or result.
- **Ví dụ thực tế**: a realistic scenario.
- **Priority**: **Cao**, **Trung bình**, or **Thấp**.

Use this section to surface high-value depth, not random advanced theory. Prefer topics related to reliability, scale, monitoring, debugging, security, maintainability, decision-making, automation, measurement, business impact, communication, or expert-level trade-offs.

For technologies, consider whether these areas matter:

- Observability, monitoring, alerting, logs, metrics, tracing.
- Performance, scalability, capacity planning, and cost.
- Reliability, failure recovery, backup, disaster recovery, and incident response.
- Security, permissions, data protection, and compliance.
- Architecture, integration patterns, migration, and maintainability.
- Debugging, troubleshooting, and production operations.
- Testing, automation, CI/CD, and quality gates.
- Versioning, compatibility, deprecation, and upgrade strategy.

For non-technical skills, consider whether these areas matter:

- Feedback loops and measurement.
- Real-world application under pressure.
- Domain-specific specialization.
- Communication, persuasion, negotiation, or leadership leverage.
- Portfolio, proof of work, and credibility signals.
- Decision quality, trade-offs, and ability to diagnose root causes.

Do not make the learner feel they must master all differentiating topics immediately. Clearly mark which topics are worth learning soon and which are only for later specialization.

```markdown
## 8. Lộ trình học nhanh

### Giai đoạn 1: Hiểu bản chất
### Giai đoạn 2: Thực hành tối thiểu
### Giai đoạn 3: Áp dụng vào thực tế
### Giai đoạn 4: Đi sâu có chọn lọc để tạo khác biệt
```

For every stage, specify:

- What to learn or do.
- The objective.
- A concrete completion result.
- What to avoid studying prematurely.

Include a work-readiness checklist in stage 3.

Stage 4 must connect directly to section 7 and recommend a small number of differentiating topics to learn first.

```markdown
## 9. Bài tập thực hành

### Beginner
### Practical
### Advanced / Differentiating
```

For each exercise or mini project, state:

- Objective.
- Requirements.
- Expected result.
- Knowledge practiced.

Make the Practical exercise resemble real work. Make Advanced / Differentiating optional rather than a prerequisite for starting. The Advanced / Differentiating exercise should practice at least one high-value topic from section 7.

```markdown
## 10. Best practices
```

For each best practice, explain:

- What to do.
- Why to do it.
- The common mistake.
- A realistic example when useful.

Include both beginner-safe best practices and a few practices that signal professional maturity.

```markdown
## 11. Trade-offs và lựa chọn giải pháp

| Giải pháp | Ưu điểm | Nhược điểm | Khi nào nên dùng |
| --- | --- | --- | --- |
```

Compare meaningful approaches, tools, learning paths, or decision strategies. Include when not to choose an option. Do not force false alternatives.

```markdown
## 12. Lỗi phổ biến của người mới
```

For each mistake, include:

- The mistake.
- Why it happens.
- Its consequence.
- How to avoid or correct it.

Include at least one mistake where the learner stops at surface-level knowledge and misses the deeper skill that creates real-world value.

```markdown
## 13. Checklist áp dụng thực tế
```

Provide testable Markdown checkboxes such as:

```markdown
- [ ] Tôi giải thích được các khái niệm cốt lõi bằng lời của mình.
- [ ] Tôi đã hoàn thành ít nhất một bài tập thực tế.
- [ ] Tôi biết khi nào nên dùng và khi nào không nên dùng kỹ năng này.
- [ ] Tôi biết 3 phần đi sâu giúp tôi khác biệt hơn sau khi đã nắm 80/20.
```

Adapt the checklist to the target skill. Do not use only generic items. Include at least three checklist items that verify differentiating capability, such as monitoring, debugging, scaling, measurement, advanced feedback, portfolio proof, or real-world decision quality depending on the skill.

```markdown
## 14. Tài liệu tham khảo
```

For every verified resource, provide:

- Resource name.
- Direct link.
- What to read or watch first.
- What it is useful for.

List resources in research priority order. State research limitations here when applicable.

When possible, separate references into:

- **Core 80/20 references**: useful for learning the practical foundation.
- **Differentiating depth references**: useful for topics in section 7.

```markdown
## 15. Kế hoạch học siêu ngắn

### Học trong 1 ngày
### Học trong 3 ngày
### Học trong 7 ngày
```

Create cumulative plans:

- **1 day**: Understand the landscape and highest-value concepts.
- **3 days**: Perform a basic practical task.
- **7 days**: Complete and review a small realistic application.

Assign concrete activities and deliverables, not only reading time. Include one small "differentiation preview" activity in the 7-day plan so the learner sees what to study next without being overwhelmed.

```markdown
## 16. Tóm tắt cuối cùng
```

End with:

- The five most important lessons.
- The first action to take now.
- What not to study too early.
- The first differentiating topic to learn after the 80/20 foundation.
- How to continue without becoming overwhelmed.

## Quality Checklist

Before returning the result, verify:

- [ ] Exactly one Markdown learning guide was created.
- [ ] The filename is a specific lowercase ASCII kebab-case skill name.
- [ ] The guide is written in Vietnamese with full diacritics.
- [ ] All 16 required sections are present in the correct order.
- [ ] The guide answers the user's practical goal and reflects their existing experience when known.
- [ ] Level 1, level 2, and level 3 have observable outcomes.
- [ ] The 80/20 section contains only high-leverage knowledge.
- [ ] "Learn now," "learn later," "learn for differentiation," and "skip unless needed" are clearly distinguished.
- [ ] Section 7 clearly identifies the deeper topics that create professional difference or higher value.
- [ ] Section 7 explains why each differentiating topic matters, when to learn it, and how to know the learner has understood it.
- [ ] Differentiating topics are practical, not obscure trivia or unnecessary theory.
- [ ] Every major recommendation explains why and when it matters.
- [ ] The roadmap produces concrete deliverables.
- [ ] Stage 4 connects directly to the differentiating topics in section 7.
- [ ] Exercises cover Beginner, Practical, and Advanced / Differentiating levels.
- [ ] The Advanced / Differentiating exercise practices at least one topic from section 7.
- [ ] Best practices include mistakes or counterexamples.
- [ ] Trade-offs are balanced and include selection criteria.
- [ ] The readiness checklist is specific and testable.
- [ ] The readiness checklist includes items that verify differentiating capability.
- [ ] Every reference link was verified or clearly marked as unverified.
- [ ] References include both foundation resources and deeper resources when available.
- [ ] No fact, statistic, quotation, version, or link was invented.
- [ ] Research limitations are disclosed when current sources could not be accessed.
- [ ] The guide is practical, focused, and does not imply that everything must be learned before starting.
- [ ] The guide makes the learner feel: learn fast first, then go deep selectively where it creates real value.

After writing and validating the file, report only the created or updated path and a concise completion note. Do not reproduce the full guide in the final chat response unless the environment cannot write files.