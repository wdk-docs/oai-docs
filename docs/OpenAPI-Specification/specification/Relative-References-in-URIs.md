---
sidebar_position: 6
---

# URI 中的相对引用

除非另有规定，否则作为 URI 的所有属性都可以是[RFC3986](https://tools.ietf.org/html/rfc3986#section-4.2)定义的相对引用.

相对引用, 包括[`Reference Objects`](#referenceObject), [`PathItem Object`](#pathItemObject) `$ref` 字段, [`Link Object`](#linkObject) `operationRef` 字段 and [`Example Object`](#exampleObject) `externalValue` 字段 中的那些, 根据[RFC3986](https://tools.ietf.org/html/rfc3986#section-5.2)使用引用文档作为基本 URI 进行解析.

如果 URI 包含片段标识符，那么应该根据引用文档的片段解析机制解析该片段。如果引用文档的表示是 JSON 或 YAML，则片段标识符应根据[RFC6901](https://tools.ietf.org/html/rfc6901)解释为 JSON 指针.

[`Schema Objects`](#schemaObject)中的相对引用, 包括任何显示为`$id`值的值, 使用最近的父级`$id`作为基 URI, 如[JSON 模式规范草案 2020-12](https://tools.ietf.org/html/draft-bhutton-json-schema-00#section-8.2)所述. 如果没有父架构包含`$id`，则必须根据[RFC3986](https://tools.ietf.org/html/rfc3986#section-5.1)确定基 URI.
