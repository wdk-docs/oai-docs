#### <a name="licenseObject"></a>License Object

License information for the exposed API.

##### Fixed Fields

| Field Name                                 |   Type   | Description                                                                                                                                                                   |
| ------------------------------------------ | :------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a name="licenseName"></a>name             | `string` | **REQUIRED**. The license name used for the API.                                                                                                                              |
| <a name="licenseIdentifier"></a>identifier | `string` | An [SPDX](https://spdx.org/spdx-specification-21-web-version#h.jxpfx0ykyb60) license expression for the API. The `identifier` field is mutually exclusive of the `url` field. |
| <a name="licenseUrl"></a>url               | `string` | A URL to the license used for the API. This MUST be in the form of a URL. The `url` field is mutually exclusive of the `identifier` field.                                    |

This object MAY be extended with [Specification Extensions](#specificationExtensions).

##### License Object Example

```json
{
  "name": "Apache 2.0",
  "identifier": "Apache-2.0"
}
```

```yaml
name: Apache 2.0
identifier: Apache-2.0
```