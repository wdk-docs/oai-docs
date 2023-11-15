---
sidebar_position: 4
---

# <a name="dataTypes"></a>Data Types

Data types in the OAS are based on the types supported by the [JSON Schema Specification Draft 2020-12](https://tools.ietf.org/html/draft-bhutton-json-schema-00#section-4.2.1).
Note that `integer` as a type is also supported and is defined as a JSON number without a fraction or exponent part.
Models are defined using the [Schema Object](#schemaObject), which is a superset of JSON Schema Specification Draft 2020-12.

<a name="dataTypeFormat"></a>As defined by the [JSON Schema Validation vocabulary](https://tools.ietf.org/html/draft-bhutton-json-schema-validation-00#section-7.3), data types can have an optional modifier property: `format`.
OAS defines additional formats to provide fine detail for primitive data types.

The formats defined by the OAS are:

| [`type`](#dataTypes) | [`format`](#dataTypeFormat) | Comments                        |
| -------------------- | --------------------------- | ------------------------------- |
| `integer`            | `int32`                     | signed 32 bits                  |
| `integer`            | `int64`                     | signed 64 bits (a.k.a long)     |
| `number`             | `float`                     |                                 |
| `number`             | `double`                    |                                 |
| `string`             | `password`                  | A hint to UIs to obscure input. |
