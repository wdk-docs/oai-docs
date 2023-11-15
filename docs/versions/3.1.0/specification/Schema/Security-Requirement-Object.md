#### <a name="securityRequirementObject"></a>Security Requirement Object

Lists the required security schemes to execute this operation.
The name used for each property MUST correspond to a security scheme declared in the [Security Schemes](#componentsSecuritySchemes) under the [Components Object](#componentsObject).

Security Requirement Objects that contain multiple schemes require that all schemes MUST be satisfied for a request to be authorized.
This enables support for scenarios where multiple query parameters or HTTP headers are required to convey security information.

When a list of Security Requirement Objects is defined on the [OpenAPI Object](#oasObject) or [Operation Object](#operationObject), only one of the Security Requirement Objects in the list needs to be satisfied to authorize the request.

##### Patterned Fields

| Field Pattern                                 |    Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------------------------------------- | :--------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a name="securityRequirementsName"></a>{name} | [`string`] | Each name MUST correspond to a security scheme which is declared in the [Security Schemes](#componentsSecuritySchemes) under the [Components Object](#componentsObject). If the security scheme is of type `"oauth2"` or `"openIdConnect"`, then the value is a list of scope names required for the execution, and the list MAY be empty if authorization does not require a specified scope. For other security scheme types, the array MAY contain a list of role names which are required for the execution, but are not otherwise defined or exchanged in-band. |

##### Security Requirement Object Examples

###### Non-OAuth2 Security Requirement

```json
{
  "api_key": []
}
```

```yaml
api_key: []
```

###### OAuth2 Security Requirement

```json
{
  "petstore_auth": ["write:pets", "read:pets"]
}
```

```yaml
petstore_auth:
  - write:pets
  - read:pets
```

###### Optional OAuth2 Security

Optional OAuth2 security as would be defined in an <a href="#openapi-object">OpenAPI Object</a> or an <a href="#operation-object">Operation Object</a>:

```json
{
  "security": [
    {},
    {
      "petstore_auth": ["write:pets", "read:pets"]
    }
  ]
}
```

```yaml
security:
  - {}
  - petstore_auth:
      - write:pets
      - read:pets
```
