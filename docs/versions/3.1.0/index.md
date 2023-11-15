# OpenAPI 规范

#### 版本 3.1.0

在本文档中关键词 "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "NOT RECOMMENDED", "MAY", 和 "OPTIONAL" 应按照[BCP 14](https://tools.ietf.org/html/bcp14) [RFC2119](https://tools.ietf.org/html/rfc2119) [RFC8174](https://tools.ietf.org/html/rfc8174) 中所述进行解释如图所示，它们出现在所有大写字母中的时间。

本文档根据[Apache 许可证，2.0 版](https://www.apache.org/licenses/LICENSE-2.0.html)获得许可.

## Table of Contents

<!-- TOC depthFrom:1 depthTo:3 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Definitions](#definitions)
  - [OpenAPI Document](#oasDocument)
  - [Path Templating](#pathTemplating)
  - [Media Types](#mediaTypes)
  - [HTTP Status Codes](#httpCodes)
- [Specification](#specification)
  - [Versions](#versions)
  - [Format](#format)
  - [Document Structure](#documentStructure)
  - [Data Types](#dataTypes)
  - [Rich Text Formatting](#richText)
  - [Relative References In URIs](#relativeReferencesURI)
  - [Relative References In URLs](#relativeReferencesURL)
  - [Schema](#schema)
    - [OpenAPI Object](#oasObject)
    - [Info Object](#infoObject)
    - [Contact Object](#contactObject)
    - [License Object](#licenseObject)
    - [Server Object](#serverObject)
    - [Server Variable Object](#serverVariableObject)
    - [Components Object](#componentsObject)
    - [Paths Object](#pathsObject)
    - [Path Item Object](#pathItemObject)
    - [Operation Object](#operationObject)
    - [External Documentation Object](#externalDocumentationObject)
    - [Parameter Object](#parameterObject)
    - [Request Body Object](#requestBodyObject)
    - [Media Type Object](#mediaTypeObject)
    - [Encoding Object](#encodingObject)
    - [Responses Object](#responsesObject)
    - [Response Object](#responseObject)
    - [Callback Object](#callbackObject)
    - [Example Object](#exampleObject)
    - [Link Object](#linkObject)
    - [Header Object](#headerObject)
    - [Tag Object](#tagObject)
    - [Reference Object](#referenceObject)
    - [Schema Object](#schemaObject)
    - [Discriminator Object](#discriminatorObject)
    - [XML Object](#xmlObject)
    - [Security Scheme Object](#securitySchemeObject)
    - [OAuth Flows Object](#oauthFlowsObject)
    - [OAuth Flow Object](#oauthFlowObject)
    - [Security Requirement Object](#securityRequirementObject)
  - [Specification Extensions](#specificationExtensions)
  - [Security Filtering](#securityFiltering)
- [Appendix A: Revision History](#revisionHistory)

<!-- /TOC -->
