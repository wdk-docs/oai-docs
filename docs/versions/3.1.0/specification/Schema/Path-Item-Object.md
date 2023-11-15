#### <a name="pathItemObject"></a>Path Item Object

Describes the operations available on a single path.
A Path Item MAY be empty, due to [ACL constraints](#securityFiltering).
The path itself is still exposed to the documentation viewer but they will not know which operations and parameters are available.

##### Fixed Fields

| Field Name                                    |                                      Type                                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------- | :----------------------------------------------------------------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a name="pathItemRef"></a>$ref                |                                    `string`                                    | Allows for a referenced definition of this path item. The referenced structure MUST be in the form of a [Path Item Object](#pathItemObject). In case a Path Item Object field appears both in the defined object and the referenced object, the behavior is undefined. See the rules for resolving [Relative References](#relativeReferencesURI).                                                                                                                                                                     |
| <a name="pathItemSummary"></a>summary         |                                    `string`                                    | An optional, string summary, intended to apply to all operations in this path.                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| <a name="pathItemDescription"></a>description |                                    `string`                                    | An optional, string description, intended to apply to all operations in this path. [CommonMark syntax](https://spec.commonmark.org/) MAY be used for rich text representation.                                                                                                                                                                                                                                                                                                                                        |
| <a name="pathItemGet"></a>get                 |                      [Operation Object](#operationObject)                      | A definition of a GET operation on this path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| <a name="pathItemPut"></a>put                 |                      [Operation Object](#operationObject)                      | A definition of a PUT operation on this path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| <a name="pathItemPost"></a>post               |                      [Operation Object](#operationObject)                      | A definition of a POST operation on this path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| <a name="pathItemDelete"></a>delete           |                      [Operation Object](#operationObject)                      | A definition of a DELETE operation on this path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| <a name="pathItemOptions"></a>options         |                      [Operation Object](#operationObject)                      | A definition of a OPTIONS operation on this path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| <a name="pathItemHead"></a>head               |                      [Operation Object](#operationObject)                      | A definition of a HEAD operation on this path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| <a name="pathItemPatch"></a>patch             |                      [Operation Object](#operationObject)                      | A definition of a PATCH operation on this path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| <a name="pathItemTrace"></a>trace             |                      [Operation Object](#operationObject)                      | A definition of a TRACE operation on this path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| <a name="pathItemServers"></a>servers         |                        [[Server Object](#serverObject)]                        | An alternative `server` array to service all operations in this path.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| <a name="pathItemParameters"></a>parameters   | [[Parameter Object](#parameterObject) \| [Reference Object](#referenceObject)] | A list of parameters that are applicable for all the operations described under this path. These parameters can be overridden at the operation level, but cannot be removed there. The list MUST NOT include duplicated parameters. A unique parameter is defined by a combination of a [name](#parameterName) and [location](#parameterIn). The list can use the [Reference Object](#referenceObject) to link to parameters that are defined at the [OpenAPI Object's components/parameters](#componentsParameters). |

This object MAY be extended with [Specification Extensions](#specificationExtensions).

##### Path Item Object Example

```json
{
  "get": {
    "description": "Returns pets based on ID",
    "summary": "Find pets by ID",
    "operationId": "getPetsById",
    "responses": {
      "200": {
        "description": "pet response",
        "content": {
          "*/*": {
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Pet"
              }
            }
          }
        }
      },
      "default": {
        "description": "error payload",
        "content": {
          "text/html": {
            "schema": {
              "$ref": "#/components/schemas/ErrorModel"
            }
          }
        }
      }
    }
  },
  "parameters": [
    {
      "name": "id",
      "in": "path",
      "description": "ID of pet to use",
      "required": true,
      "schema": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "style": "simple"
    }
  ]
}
```

```yaml
get:
  description: Returns pets based on ID
  summary: Find pets by ID
  operationId: getPetsById
  responses:
    "200":
      description: pet response
      content:
        "*/*":
          schema:
            type: array
            items:
              $ref: "#/components/schemas/Pet"
    default:
      description: error payload
      content:
        "text/html":
          schema:
            $ref: "#/components/schemas/ErrorModel"
parameters:
  - name: id
    in: path
    description: ID of pet to use
    required: true
    schema:
      type: array
      items:
        type: string
    style: simple
```
