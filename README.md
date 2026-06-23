# AI Skills CLI

`@tranmanhthang96/ai-skills` là CLI giúp cài đặt nhanh các AI skills vào những công cụ lập trình có hỗ trợ rule/skill/command như Claude Code, Codex, OpenCode, Cursor và Windsurf....

Package này phù hợp khi bạn muốn tái sử dụng cùng một bộ hướng dẫn AI ở nhiều dự án hoặc nhiều công cụ khác nhau.

## Yêu cầu

- Node.js `>=18`
- Có thể chạy trực tiếp bằng `npx`, không cần cài global

## Cách sử dụng nhanh

Liệt kê các skill hiện có:

```bash
npx @tranmanhthang96/ai-skills list
```

Cài một skill và chọn nơi cài bằng giao diện tương tác:

```bash
npx @tranmanhthang96/ai-skills install learn-fast
```

Cài skill vào một target cụ thể:

```bash
npx @tranmanhthang96/ai-skills install learn-fast --target codex
```

Cài skill vào nhiều target cùng lúc:

```bash
npx @tranmanhthang96/ai-skills install learn-fast --target claude-code,cursor,windsurf
```

Cài skill vào tất cả target được hỗ trợ:

```bash
npx @tranmanhthang96/ai-skills install learn-fast --all
```

Cài skill ở chế độ global cho những target có hỗ trợ global:

```bash
npx @tranmanhthang96/ai-skills install learn-fast --target codex --global
```

## Lệnh CLI

```bash
ai-skills list
ai-skills install <skill-name>
ai-skills install <skill-name> --target <target>
ai-skills install <skill-name> --target <target1,target2>
ai-skills install <skill-name> --all
ai-skills install <skill-name> --global
```

## Target được hỗ trợ

| Target | Vị trí cài local | Vị trí cài global |
| --- | --- | --- |
| `claude-code` | `.claude/skills/<skill-name>/` | `~/.claude/skills/<skill-name>/` |
| `codex` | `.codex/skills/<skill-name>/` | `~/.codex/skills/<skill-name>/` |
| `opencode` | `.opencode/commands/<skill-name>.md` | `~/.opencode/commands/<skill-name>.md` |
| `cursor` | `.cursor/rules/<skill-name>.mdc` | Chỉ hỗ trợ local |
| `windsurf` | `.windsurf/rules/<skill-name>.md` | Chỉ hỗ trợ local |

## Skills hiện có

### `learn-fast`

Tạo một hướng dẫn học nhanh bằng tiếng Việt cho một kỹ năng bất kỳ. Skill này tập trung vào kiến thức 80/20, lộ trình thực hành, lỗi thường gặp, bài tập, tài liệu tham khảo đáng tin cậy và phần kiến thức chuyên sâu giúp người học tạo lợi thế sau khi nắm được nền tảng.

Ví dụ:

```bash
npx @tranmanhthang96/ai-skills install learn-fast --target codex
```

Sau khi cài, bạn có thể yêu cầu AI tạo lộ trình học nhanh cho một chủ đề như Kubernetes, SEO, tiếng Anh giao tiếp, video editing hoặc system design.

### `open-source`

Phân tích một public open-source repository từ Git URL và tạo bộ tài liệu học tập bằng tiếng Việt. Skill này giúp hiểu nhanh dự án, cách chạy, kiến trúc, công nghệ sử dụng, luồng code quan trọng, bài tập thực hành, cơ hội cải thiện và roadmap clone lại dự án theo hướng học tập.

Ví dụ:

```bash
npx @tranmanhthang96/ai-skills install open-source --target codex
```

Sau khi cài, bạn có thể đưa cho AI một GitHub/GitLab/Bitbucket repository công khai để yêu cầu phân tích và tạo bộ tài liệu học tập.
