---
sidebar_position: 4
---

# 数据类型

OAS 中的数据类型基于[JSON 模式规范草案 2020-12](https://tools.ietf.org/html/draft-bhutton-json-schema-00#section-4.2.1)支持的类型.
请注意，也支持将`integer`作为类型，并将其定义为不带分数或指数部分的 JSON 数字。
模型是使用[Schema Object](#schemaObject)定义的，它是 JSON Schema Specification Draft 2020-12 的超集。

<a name="dataTypeFormat"></a>如[JSON 架构验证词汇表](https://tools.ietf.org/html/draft-bhutton-json-schema-validation-00#section-7.3)所定义, 数据类型可以具有可选的修饰符属性: `format`.
OAS 定义了额外的格式，为基元数据类型提供精细的细节。

OAS 定义的格式为:

| [`type`](#dataTypes) | [`format`](#dataTypeFormat) | 评论                    |
| -------------------- | --------------------------- | ----------------------- |
| `integer`            | `int32`                     | 带符号的 32 位          |
| `integer`            | `int64`                     | 带符号的 64 位 (又称长) |
| `number`             | `float`                     |                         |
| `number`             | `double`                    |                         |
| `string`             | `password`                  | 提示 UIs 使输入模糊。   |
