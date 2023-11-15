#### <a name="oauthFlowsObject"></a>OAuth Flows Object

Allows configuration of the supported OAuth Flows.

##### Fixed Fields

| Field Name                                                  |                 Type                  | Description                                                                                          |
| ----------------------------------------------------------- | :-----------------------------------: | ---------------------------------------------------------------------------------------------------- |
| <a name="oauthFlowsImplicit"></a>implicit                   | [OAuth Flow Object](#oauthFlowObject) | Configuration for the OAuth Implicit flow                                                            |
| <a name="oauthFlowsPassword"></a>password                   | [OAuth Flow Object](#oauthFlowObject) | Configuration for the OAuth Resource Owner Password flow                                             |
| <a name="oauthFlowsClientCredentials"></a>clientCredentials | [OAuth Flow Object](#oauthFlowObject) | Configuration for the OAuth Client Credentials flow. Previously called `application` in OpenAPI 2.0. |
| <a name="oauthFlowsAuthorizationCode"></a>authorizationCode | [OAuth Flow Object](#oauthFlowObject) | Configuration for the OAuth Authorization Code flow. Previously called `accessCode` in OpenAPI 2.0.  |

This object MAY be extended with [Specification Extensions](#specificationExtensions).
