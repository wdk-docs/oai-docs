---
sidebar_position: 2
---

# 格式化

符合 OpenAPI 规范的 OpenAPI 文档本身就是一个 JSON 对象，可以用 JSON 或 YAML 格式表示。

例如，如果字段具有数组值，则将使用 JSON 数组表示：

```json
{
  "field": [1, 2, 3]
}
```

规范中的所有字段名称都区分**大小写**。
这包括映射中用作键的所有字段，除非明确指出键**不区分大小写**。

该模式公开了两种类型的字段：具有声明名称的固定字段和为字段名称声明正则表达式模式的模式字段。

模式字段在包含对象中必须具有唯一的名称。

为了保持在 YAML 和 JSON 格式之间往返的能力，YAML 版本[1.2](https://yaml.org/spec/1.2/spec.html)建议与一些其他限制条件一起使用：

- 标记必须限于[JSON 架构规则集](https://yaml.org/spec/1.2/spec.html#id2803231)允许的标记.
- YAML 映射中使用的键必须限制为标量字符串，如[YAML Failsafe schema 规则集](https://yaml.org/spec/1.2/spec.html#id2802346)所定义.

:::note
虽然 API 可以由 OpenAPI 文档以 YAML 或 JSON 格式定义，但 API 请求和响应主体以及其他内容不需要是 JSON 或 YAML。
:::
