---
sidebar_position: 3
---

# 文档结构

OpenAPI 文档可以由单个文档组成，也可以由作者自行决定分为多个相连的部分。
在后一种情况下，使用了[`引用对象`](./Schema/Reference-Object)和[`架构对象`](./Schema/Schema-Object)`$ref`关键字。

建议将根 OpenAPI 文档命名为: `openapi.json` 或 `openapi.yaml`.
