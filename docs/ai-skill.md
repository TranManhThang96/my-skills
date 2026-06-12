I. Đẩy lên npm
- ```npm login```
- Trước khi publish  ```npm pack --dry-run```
- ```whoami```

II. Chạy local
```npm link```
```ai-skills list```
```ai-skills install learn-fast```
```ai-skills install learn-fast --target claude-code,cursor,windsurf```

IV. Publish
- Lần đầu: ```npm publish --access public```
- Chạy thật: ```npx @tranmanhthang96/ai-skills install learn-fast```

Nếu cập nhât:
- tăng version: ```npm version patch```
- publish lại: ```npm publish```


IV. Cài thật sau khi publish
```npx @tranmanhthang96/ai-skills install learn-fast```
```npx @tranmanhthang96/ai-skills install learn-fast --target claude-code,cursor,windsurf```
```npx @tranmanhthang96/ai-skills install learn-fast --all```
```npx @tranmanhthang96/ai-skills install learn-fast --target claude-code --global```

