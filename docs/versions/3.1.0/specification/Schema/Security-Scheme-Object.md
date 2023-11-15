#### <a name="securitySchemeObject"></a>Security Scheme Object

Defines a security scheme that can be used by the operations.

Supported schemes are HTTP authentication, an API key (either as a header, a cookie parameter or as a query parameter), mutual TLS (use of a client certificate), OAuth2's common flows (implicit, password, client credentials and authorization code) as defined in [RFC6749](https://tools.ietf.org/html/rfc6749), and [OpenID Connect Discovery](https://tools.ietf.org/html/draft-ietf-oauth-discovery-06).
Please note that as of 2020, the implicit flow is about to be deprecated by [OAuth 2.0 Security Best Current Practice](https://tools.ietf.org/html/draft-ietf-oauth-security-topics). Recommended for most use case is Authorization Code Grant flow with PKCE.

##### Fixed Fields

| Field Name                                                    |                  Type                   | Applies To          | Description                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------- | :-------------------------------------: | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a name="securitySchemeType"></a>type                         |                `string`                 | Any                 | **REQUIRED**. The type of the security scheme. Valid values are `"apiKey"`, `"http"`, `"mutualTLS"`, `"oauth2"`, `"openIdConnect"`.                                                                                                                                                                                                   |
| <a name="securitySchemeDescription"></a>description           |                `string`                 | Any                 | A description for security scheme. [CommonMark syntax](https://spec.commonmark.org/) MAY be used for rich text representation.                                                                                                                                                                                                        |
| <a name="securitySchemeName"></a>name                         |                `string`                 | `apiKey`            | **REQUIRED**. The name of the header, query or cookie parameter to be used.                                                                                                                                                                                                                                                           |
| <a name="securitySchemeIn"></a>in                             |                `string`                 | `apiKey`            | **REQUIRED**. The location of the API key. Valid values are `"query"`, `"header"` or `"cookie"`.                                                                                                                                                                                                                                      |
| <a name="securitySchemeScheme"></a>scheme                     |                `string`                 | `http`              | **REQUIRED**. The name of the HTTP Authorization scheme to be used in the [Authorization header as defined in RFC7235](https://tools.ietf.org/html/rfc7235#section-5.1). The values used SHOULD be registered in the [IANA Authentication Scheme registry](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml). |
| <a name="securitySchemeBearerFormat"></a>bearerFormat         |                `string`                 | `http` (`"bearer"`) | A hint to the client to identify how the bearer token is formatted. Bearer tokens are usually generated by an authorization server, so this information is primarily for documentation purposes.                                                                                                                                      |
| <a name="securitySchemeFlows"></a>flows                       | [OAuth Flows Object](#oauthFlowsObject) | `oauth2`            | **REQUIRED**. An object containing configuration information for the flow types supported.                                                                                                                                                                                                                                            |
| <a name="securitySchemeOpenIdConnectUrl"></a>openIdConnectUrl |                `string`                 | `openIdConnect`     | **REQUIRED**. OpenId Connect URL to discover OAuth2 configuration values. This MUST be in the form of a URL. The OpenID Connect standard requires the use of TLS.                                                                                                                                                                     |

This object MAY be extended with [Specification Extensions](#specificationExtensions).

##### Security Scheme Object Example

###### Basic Authentication Sample

```json
{
  "type": "http",
  "scheme": "basic"
}
```

```yaml
type: http
scheme: basic
```

###### API Key Sample

```json
{
  "type": "apiKey",
  "name": "api_key",
  "in": "header"
}
```

```yaml
type: apiKey
name: api_key
in: header
```

###### JWT Bearer Sample

```json
{
  "type": "http",
  "scheme": "bearer",
  "bearerFormat": "JWT"
}
```

```yaml
type: http
scheme: bearer
bearerFormat: JWT
```

###### Implicit OAuth2 Sample

```json
{
  "type": "oauth2",
  "flows": {
    "implicit": {
      "authorizationUrl": "https://example.com/api/oauth/dialog",
      "scopes": {
        "write:pets": "modify pets in your account",
        "read:pets": "read your pets"
      }
    }
  }
}
```

```yaml
type: oauth2
flows:
  implicit:
    authorizationUrl: https://example.com/api/oauth/dialog
    scopes:
      write:pets: modify pets in your account
      read:pets: read your pets
```