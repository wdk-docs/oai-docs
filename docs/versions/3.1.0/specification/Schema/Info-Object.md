#### <a name="infoObject"></a>Info Object

The object provides metadata about the API.
The metadata MAY be used by the clients if needed, and MAY be presented in editing or documentation generation tools for convenience.

##### Fixed Fields

| Field Name                                      |               Type               | Description                                                                                                                                                    |
| ----------------------------------------------- | :------------------------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a name="infoTitle"></a>title                   |             `string`             | **REQUIRED**. The title of the API.                                                                                                                            |
| <a name="infoSummary"></a>summary               |             `string`             | A short summary of the API.                                                                                                                                    |
| <a name="infoDescription"></a>description       |             `string`             | A description of the API. [CommonMark syntax](https://spec.commonmark.org/) MAY be used for rich text representation.                                          |
| <a name="infoTermsOfService"></a>termsOfService |             `string`             | A URL to the Terms of Service for the API. This MUST be in the form of a URL.                                                                                  |
| <a name="infoContact"></a>contact               | [Contact Object](#contactObject) | The contact information for the exposed API.                                                                                                                   |
| <a name="infoLicense"></a>license               | [License Object](#licenseObject) | The license information for the exposed API.                                                                                                                   |
| <a name="infoVersion"></a>version               |             `string`             | **REQUIRED**. The version of the OpenAPI document (which is distinct from the [OpenAPI Specification version](#oasVersion) or the API implementation version). |

This object MAY be extended with [Specification Extensions](#specificationExtensions).

##### Info Object Example

```json
{
  "title": "Sample Pet Store App",
  "summary": "A pet store manager.",
  "description": "This is a sample server for a pet store.",
  "termsOfService": "https://example.com/terms/",
  "contact": {
    "name": "API Support",
    "url": "https://www.example.com/support",
    "email": "support@example.com"
  },
  "license": {
    "name": "Apache 2.0",
    "url": "https://www.apache.org/licenses/LICENSE-2.0.html"
  },
  "version": "1.0.1"
}
```

```yaml
title: Sample Pet Store App
summary: A pet store manager.
description: This is a sample server for a pet store.
termsOfService: https://example.com/terms/
contact:
  name: API Support
  url: https://www.example.com/support
  email: support@example.com
license:
  name: Apache 2.0
  url: https://www.apache.org/licenses/LICENSE-2.0.html
version: 1.0.1
```
