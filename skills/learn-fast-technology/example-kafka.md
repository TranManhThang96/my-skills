# Ví dụ áp dụng skill: Học nhanh Kafka

## Prompt sử dụng

```md
Áp dụng skill "Học nhanh và áp dụng nhanh công nghệ mới" cho tôi.

Công nghệ muốn học: Kafka

Bối cảnh của tôi:
Tôi là backend developer, đã biết Node.js/NestJS, REST API, PostgreSQL, Redis, Docker cơ bản. Tôi chưa dùng Kafka trong dự án thật.

Mục tiêu áp dụng:
Tôi muốn hiểu Kafka để dùng cho hệ thống e-commerce, xử lý order, payment, inventory, notification, log event và các tác vụ async.

Thời gian mong muốn:
7 ngày

Stack hiện tại:
Node.js, NestJS, PostgreSQL, Redis, Docker, BullMQ.
```

---

# Học nhanh Kafka để áp dụng thực tế

## 1. Kafka giải quyết vấn đề gì?

Kafka dùng để xử lý **event streaming** và giao tiếp bất đồng bộ giữa các service.

Nếu hệ thống e-commerce có các bước:

```txt
Order created
→ trừ tồn kho
→ gửi email
→ tạo hóa đơn
→ ghi log
→ cập nhật điểm thưởng
```

Bạn không nên nhét tất cả vào một request HTTP đồng bộ. Vì nếu email lỗi, inventory chậm, payment timeout thì luồng order sẽ dễ bị ảnh hưởng.

Kafka giúp bạn tách hệ thống theo event:

```txt
Order Service phát event: order.created

Inventory Service nghe event để trừ kho
Notification Service nghe event để gửi thông báo
Billing Service nghe event để tạo hóa đơn
Analytics Service nghe event để lưu dữ liệu phân tích
```

Nói đơn giản:

> Kafka giúp các service giao tiếp với nhau thông qua sự kiện, chịu tải lớn, lưu được lịch sử event, và giúp hệ thống dễ mở rộng hơn.

---

## 2. Bản đồ 80/20 của Kafka

| Nhóm kiến thức | Ưu tiên | Vì sao quan trọng | Ví dụ thực tế |
|---|---:|---|---|
| Topic | Học ngay | Nơi chứa event/message | `order.created`, `payment.completed` |
| Producer | Học ngay | Thành phần gửi message vào Kafka | Order Service gửi event |
| Consumer | Học ngay | Thành phần đọc message từ Kafka | Notification Service nhận event |
| Consumer Group | Học ngay | Giúp scale nhiều consumer | 3 instance cùng xử lý đơn hàng |
| Partition | Học ngay | Tăng throughput và ảnh hưởng ordering | Đảm bảo order của cùng user đi cùng partition |
| Offset | Học ngay | Ghi nhớ consumer đã đọc tới đâu | Consumer restart vẫn đọc tiếp được |
| Broker | Học ngay | Server Kafka lưu và phân phối message | Kafka cluster có nhiều broker |
| Retention | Học sau mức cơ bản | Kafka lưu event theo thời gian | Lưu event 7 ngày hoặc 30 ngày |
| Retry / DLQ | Học khi vào thực tế | Xử lý message lỗi | Gửi message lỗi vào `order.dlq` |
| Schema Registry | Học sau | Quản lý format event | Avro/Protobuf cho event lớn |
| Kafka Streams | Học sau | Xử lý stream nâng cao | Realtime analytics |
| Exactly-once | Học sau | Khó, dễ hiểu sai | Payment/inventory cần thiết kế cẩn thận |

---

## 3. Project mini học Kafka

Project đề xuất:

> Xây dựng mini e-commerce event system.

Bao gồm:

```txt
Order API
Kafka
Inventory Consumer
Notification Consumer
Payment Consumer giả lập
PostgreSQL
```

Flow:

```txt
POST /orders
→ Order Service lưu order
→ Publish event order.created
→ Inventory Consumer trừ kho
→ Notification Consumer gửi thông báo giả lập
→ Payment Consumer xử lý thanh toán giả lập
```

Bạn sẽ học được:

- Producer gửi event.
- Consumer nhận event.
- Consumer group.
- Retry khi lỗi.
- DLQ đơn giản.
- Idempotency.
- Debug consumer lag.
- So sánh Kafka với BullMQ.

---

## 4. Lộ trình 7 ngày học Kafka

### Ngày 1: Hiểu Kafka dùng để làm gì

Mục tiêu:

- Hiểu Kafka khác REST, Redis Pub/Sub, BullMQ ở đâu.
- Chạy Kafka local bằng Docker Compose.

Cần làm:

```bash
docker compose up -d
```

Tạo topic:

```bash
kafka-topics --create --topic order.created --bootstrap-server localhost:9092
```

Kết quả cuối ngày:

- Chạy được Kafka local.
- Tạo được topic.
- Gửi/nhận message bằng CLI.

---

### Ngày 2: Producer và Consumer

Mục tiêu:

- Viết service gửi message.
- Viết service đọc message.

Cần làm:

```txt
Order Service publish order.created
Notification Consumer consume order.created
```

Kết quả cuối ngày:

- Gọi API tạo order.
- Consumer nhận được event.

---

### Ngày 3: Topic, partition, key, ordering

Mục tiêu:

- Hiểu partition ảnh hưởng tới ordering.
- Biết dùng key như `orderId`, `userId`.

Cần làm:

```txt
Publish message với key = orderId
Quan sát message của cùng orderId vào cùng partition
```

Kết quả cuối ngày:

- Hiểu vì sao không nên gửi event không có key trong một số case.

---

### Ngày 4: Consumer group và scale

Mục tiêu:

- Chạy nhiều instance consumer.
- Hiểu Kafka chia partition cho consumer như thế nào.

Cần làm:

```txt
Chạy 3 notification consumers cùng group
Tạo topic có 3 partitions
Quan sát mỗi consumer xử lý một phần message
```

Kết quả cuối ngày:

- Hiểu cách scale consumer.

---

### Ngày 5: Retry, lỗi và DLQ

Mục tiêu:

- Biết xử lý message lỗi.
- Không để consumer chết toàn bộ vì một message xấu.

Cần làm:

```txt
Cố tình tạo message lỗi
Retry 3 lần
Nếu vẫn lỗi, publish sang order.created.dlq
```

Kết quả cuối ngày:

- Có chiến lược xử lý lỗi thực tế.

---

### Ngày 6: Idempotency và consistency

Mục tiêu:

- Hiểu vì sao consumer có thể xử lý lại message.
- Thiết kế consumer không gây sai dữ liệu.

Ví dụ:

```txt
Message inventory.reserve bị xử lý 2 lần
Không được trừ kho 2 lần
```

Cần làm:

```txt
Tạo bảng processed_events
Lưu eventId đã xử lý
Nếu eventId đã tồn tại thì bỏ qua
```

Kết quả cuối ngày:

- Hiểu at-least-once delivery.
- Biết xử lý duplicate message.

---

### Ngày 7: Gắn Kafka vào kiến trúc thật

Mục tiêu:

- Biết khi nào dùng Kafka, khi nào dùng BullMQ.
- Thiết kế flow e-commerce đơn giản.

Cần làm:

```txt
Order Created
→ Kafka topic: order.created
→ Inventory Service
→ Payment Service
→ Notification Service
→ Analytics Service
```

Kết quả cuối ngày:

- Có kiến trúc mẫu để áp dụng vào dự án thật.

---

## 5. Checklist biết dùng Kafka

### Mức 1: Biết dùng cơ bản

Bạn đạt mức này khi:

- Chạy được Kafka local.
- Tạo topic.
- Viết producer gửi message.
- Viết consumer nhận message.
- Hiểu topic, partition, offset, consumer group.
- Debug được consumer không nhận message.

### Mức 2: Dùng được trong dự án thật

Bạn đạt mức này khi:

- Thiết kế được event name.
- Biết dùng message key.
- Biết retry message lỗi.
- Có DLQ.
- Consumer xử lý idempotent.
- Biết monitor consumer lag.
- Biết khi nào dùng Kafka thay vì BullMQ.
- Biết tách event theo bounded context.

### Mức 3: Production

Bạn học sau:

- Kafka cluster nhiều broker.
- Replication factor.
- Schema Registry.
- Avro/Protobuf.
- Exactly-once semantics.
- Kafka Connect.
- Kafka Streams.
- ACL/Security.
- Monitoring bằng Prometheus/Grafana.
- Disaster recovery.

---

## 6. Debug checklist Kafka

### Consumer không nhận được message

Kiểm tra topic:

```bash
kafka-topics --list --bootstrap-server localhost:9092
```

Kiểm tra consumer group:

```bash
kafka-consumer-groups --bootstrap-server localhost:9092 --list
```

Kiểm tra lag:

```bash
kafka-consumer-groups \
  --bootstrap-server localhost:9092 \
  --describe \
  --group notification-service
```

Nguyên nhân thường gặp:

- Sai topic name.
- Sai bootstrap server.
- Consumer đã đọc hết message cũ.
- Auto offset reset đang là `latest`, nên không đọc message trước khi consumer start.
- Consumer group khác với bạn nghĩ.

---

### Message bị xử lý lại

Nguyên nhân thường gặp:

- Consumer xử lý xong nhưng chưa commit offset.
- Consumer crash giữa chừng.
- Rebalance xảy ra.
- Timeout do xử lý quá lâu.

Cách xử lý:

- Thiết kế idempotency.
- Lưu `eventId` đã xử lý.
- Chỉ commit offset sau khi xử lý thành công.
- Tách xử lý nặng sang worker riêng nếu cần.

---

### Message bị sai thứ tự

Nguyên nhân thường gặp:

- Message cùng một entity nhưng gửi vào nhiều partition khác nhau.
- Không dùng key.
- Dùng key không ổn định.

Cách xử lý:

```txt
Dùng orderId làm key cho các event liên quan tới cùng order.
```

---

## 7. Kafka so với BullMQ

| Tiêu chí | BullMQ | Kafka |
|---|---|---|
| Nền tảng | Redis | Distributed log |
| Phù hợp | Background jobs, queue nội bộ | Event streaming, microservices, high throughput |
| Độ phức tạp | Thấp hơn | Cao hơn |
| Retry job | Rất tiện | Phải tự thiết kế hoặc dùng framework |
| Delayed job | Rất tiện | Không phải thế mạnh chính |
| Fan-out nhiều service | Có nhưng không mạnh bằng Kafka | Rất mạnh |
| Lưu lịch sử event | Không phải trọng tâm | Là trọng tâm |
| Scale lớn | Có giới hạn theo Redis | Rất mạnh |
| Dùng cho e-commerce vừa | Thường đủ | Dùng khi event/microservice/phân tích lớn hơn |

Gợi ý thực tế:

- Nếu chỉ cần xử lý job như gửi email, resize ảnh, export file, sync dữ liệu nhỏ: **BullMQ đủ tốt**.
- Nếu có nhiều service cùng cần phản ứng với event, cần lưu event, replay event, scale consumer độc lập: **Kafka phù hợp hơn**.
- Với hệ thống vừa, có thể bắt đầu bằng BullMQ, sau đó chỉ đưa Kafka vào các luồng event quan trọng.

---

## 8. Không nên học gì ngay khi mới bắt đầu Kafka?

Chưa cần học sâu ngay:

- Kafka Streams.
- KSQL.
- Exactly-once semantics.
- Multi-cluster replication.
- Kafka Connect nâng cao.
- Schema Registry phức tạp.
- Tuning broker.
- ISR, controller election, quorum chi tiết.

Giai đoạn đầu chỉ cần tập trung:

```txt
Producer
Consumer
Topic
Partition
Offset
Consumer Group
Retry
DLQ
Idempotency
```
