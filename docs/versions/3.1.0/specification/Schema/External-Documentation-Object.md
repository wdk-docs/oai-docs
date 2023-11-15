#### <a name="externalDocumentationObject"></a>External Documentation Object

Allows referencing an external resource for extended documentation.

##### Fixed Fields

| Field Name                                       |   Type   | Description                                                                                                                            |
| ------------------------------------------------ | :------: | -------------------------------------------------------------------------------------------------------------------------------------- |
| <a name="externalDocDescription"></a>description | `string` | A description of the target documentation. [CommonMark syntax](https://spec.commonmark.org/) MAY be used for rich text representation. |
| <a name="externalDocUrl"></a>url                 | `string` | **REQUIRED**. The URL for the target documentation. This MUST be in the form of a URL.                                                 |

This object MAY be extended with [Specification Extensions](#specificationExtensions).

##### External Documentation Object Example

```json
{
  "description": "Find more info here",
  "url": "https://example.com"
}
```

```yaml
description: Find more info here
url: https://example.com
```
