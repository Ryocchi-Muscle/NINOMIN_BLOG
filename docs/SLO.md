# SLO

## 対象

- https://ninominlog.com
- https://www.ninominlog.com

## SLI（観測指標）

- 可用性：HTTP 200/3xx が返る割合（死活監視）
- エラー：5xx が増えたら異常（取得できる範囲で）

## SLO（目標）

- 月間可用性 99.9%（仮）

## アラート方針

- 5分連続で失敗したら通知
- 復旧したら通知
  # SLO (Service Level Objectives)

## Service

- ninominlog.com (static blog)

## User journeys (対象)

- Top page / Article pages
- https://ninominlog.com
- https://www.ninominlog.com

## SLI (Service Level Indicators)

1. Availability (外形)

- SLI: HTTP 200/3xx が返る割合
- Measurement: 外形監視（例: CloudWatch Synthetics / Uptime監視）

2. Latency (任意・取れれば)

- SLI: p95 応答時間
- Measurement: 取得できる範囲で（将来追加）

## SLO (Service Level Objectives)

- Availability: 99.9% / 30日（暫定）

## Alerting policy

- 5分連続で失敗したら通知
- 復旧したら通知
- 通知先: Email（将来 Slack へ拡張）

## Notes / Next

- 監視が安定したら、エラーバジェット運用（リリース判断）を導入する
