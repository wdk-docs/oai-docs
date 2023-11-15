#### <a name="componentsObject"></a>Components Object

Holds a set of reusable objects for different aspects of the OAS.
All objects defined within the components object will have no effect on the API unless they are explicitly referenced from properties outside the components object.

##### Fixed Fields

| Field Name                                               | Type                                                                                                   | Description                                                                  |
| -------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| <a name="componentsSchemas"></a> schemas                 | Map[`string`, [Schema Object](#schemaObject)]                                                          | An object to hold reusable [Schema Objects](#schemaObject).                  |
| <a name="componentsResponses"></a> responses             | Map[`string`, [Response Object](#responseObject) \| [Reference Object](#referenceObject)]              | An object to hold reusable [Response Objects](#responseObject).              |
| <a name="componentsParameters"></a> parameters           | Map[`string`, [Parameter Object](#parameterObject) \| [Reference Object](#referenceObject)]            | An object to hold reusable [Parameter Objects](#parameterObject).            |
| <a name="componentsExamples"></a> examples               | Map[`string`, [Example Object](#exampleObject) \| [Reference Object](#referenceObject)]                | An object to hold reusable [Example Objects](#exampleObject).                |
| <a name="componentsRequestBodies"></a> requestBodies     | Map[`string`, [Request Body Object](#requestBodyObject) \| [Reference Object](#referenceObject)]       | An object to hold reusable [Request Body Objects](#requestBodyObject).       |
| <a name="componentsHeaders"></a> headers                 | Map[`string`, [Header Object](#headerObject) \| [Reference Object](#referenceObject)]                  | An object to hold reusable [Header Objects](#headerObject).                  |
| <a name="componentsSecuritySchemes"></a> securitySchemes | Map[`string`, [Security Scheme Object](#securitySchemeObject) \| [Reference Object](#referenceObject)] | An object to hold reusable [Security Scheme Objects](#securitySchemeObject). |
| <a name="componentsLinks"></a> links                     | Map[`string`, [Link Object](#linkObject) \| [Reference Object](#referenceObject)]                      | An object to hold reusable [Link Objects](#linkObject).                      |
| <a name="componentsCallbacks"></a> callbacks             | Map[`string`, [Callback Object](#callbackObject) \| [Reference Object](#referenceObject)]              | An object to hold reusable [Callback Objects](#callbackObject).              |
| <a name="componentsPathItems"></a> pathItems             | Map[`string`, [Path Item Object](#pathItemObject) \| [Reference Object](#referenceObject)]             | An object to hold reusable [Path Item Object](#pathItemObject).              |

This object MAY be extended with [Specification Extensions](#specificationExtensions).

All the fixed fields declared above are objects that MUST use keys that match the regular expression: `^[a-zA-Z0-9\.\-_]+$`.

Field Name Examples:

```
User
User_1
User_Name
user-name
my.org.User
```

##### Components Object Example

```json
"components": {
  "schemas": {
    "GeneralError": {
      "type": "object",
      "properties": {
        "code": {
          "type": "integer",
          "format": "int32"
        },
        "message": {
          "type": "string"
        }
      }
    },
    "Category": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "name": {
          "type": "string"
        }
      }
    },
    "Tag": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "name": {
          "type": "string"
        }
      }
    }
  },
  "parameters": {
    "skipParam": {
      "name": "skip",
      "in": "query",
      "description": "number of items to skip",
      "required": true,
      "schema": {
        "type": "integer",
        "format": "int32"
      }
    },
    "limitParam": {
      "name": "limit",
      "in": "query",
      "description": "max records to return",
      "required": true,
      "schema" : {
        "type": "integer",
        "format": "int32"
      }
    }
  },
  "responses": {
    "NotFound": {
      "description": "Entity not found."
    },
    "IllegalInput": {
      "description": "Illegal input for operation."
    },
    "GeneralError": {
      "description": "General Error",
      "content": {
        "application/json": {
          "schema": {
            "$ref": "#/components/schemas/GeneralError"
          }
        }
      }
    }
  },
  "securitySchemes": {
    "api_key": {
      "type": "apiKey",
      "name": "api_key",
      "in": "header"
    },
    "petstore_auth": {
      "type": "oauth2",
      "flows": {
        "implicit": {
          "authorizationUrl": "https://example.org/api/oauth/dialog",
          "scopes": {
            "write:pets": "modify pets in your account",
            "read:pets": "read your pets"
          }
        }
      }
    }
  }
}
```

```yaml
components:
  schemas:
    GeneralError:
      type: object
      properties:
        code:
          type: integer
          format: int32
        message:
          type: string
    Category:
      type: object
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string
    Tag:
      type: object
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string
  parameters:
    skipParam:
      name: skip
      in: query
      description: number of items to skip
      required: true
      schema:
        type: integer
        format: int32
    limitParam:
      name: limit
      in: query
      description: max records to return
      required: true
      schema:
        type: integer
        format: int32
  responses:
    NotFound:
      description: Entity not found.
    IllegalInput:
      description: Illegal input for operation.
    GeneralError:
      description: General Error
      content:
        application/json:
          schema:
            $ref: "#/components/schemas/GeneralError"
  securitySchemes:
    api_key:
      type: apiKey
      name: api_key
      in: header
    petstore_auth:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://example.org/api/oauth/dialog
          scopes:
            write:pets: modify pets in your account
            read:pets: read your pets
```
