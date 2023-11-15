#### <a name="tagObject"></a>Tag Object

Adds metadata to a single tag that is used by the [Operation Object](#operationObject).
It is not mandatory to have a Tag Object per tag defined in the Operation Object instances.

##### Fixed Fields

| Field Name                                 |                             Type                              | Description                                                                                                            |
| ------------------------------------------ | :-----------------------------------------------------------: | ---------------------------------------------------------------------------------------------------------------------- |
| <a name="tagName"></a>name                 |                           `string`                            | **REQUIRED**. The name of the tag.                                                                                     |
| <a name="tagDescription"></a>description   |                           `string`                            | A description for the tag. [CommonMark syntax](https://spec.commonmark.org/) MAY be used for rich text representation. |
| <a name="tagExternalDocs"></a>externalDocs | [External Documentation Object](#externalDocumentationObject) | Additional external documentation for this tag.                                                                        |

This object MAY be extended with [Specification Extensions](#specificationExtensions).

##### Tag Object Example

```json
{
  "name": "pet",
  "description": "Pets operations"
}
```

```yaml
name: pet
description: Pets operations
```
