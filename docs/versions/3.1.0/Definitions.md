---
sidebar_position: 2
---

# 定义

## <a name="oasDocument"></a>OpenAPI 文件

定义或描述 API 或 API 元素的自包含或复合资源。OpenAPI 文档必须至少包含一个[paths](#pathsObject)字段、一个[components](#oasComponents)字段或一个[webhook](#oasWebhooks)字段。OpenAPI 文档使用并符合 OpenAPI 规范。

## <a name="pathTemplating"></a>路径模板

路径模板化是指使用由大括号({})分隔的模板表达式，使用路径参数将 URL 路径的一部分标记为可替换的。

路径中的每个模板表达式必须对应于一个路径参数，该路径参数包含在[Path Item](#path-item-object)本身和/或每个 path Item 的[Operations](#operation-object)中。例外情况是，如果路径项为空，例如由于 ACL 约束，则不需要匹配的路径参数。

这些路径参数的值不得包含[RFC3986](https://tools.ietf.org/html/rfc3986#section-3)中描述的任何未标注的`通用语法`字符: 正向斜线 (`/`), 问号 (`?`), 或井号 (`#`).

## <a name="mediaTypes"></a>媒体类型

媒体类型定义分布在多个资源中。
媒体类型定义应符合[RFC6838](https://tools.ietf.org/html/rfc6838).

可能的媒体类型定义的一些示例:

```
  text/plain; charset=utf-8
  application/json
  application/vnd.github+json
  application/vnd.github.v3+json
  application/vnd.github.v3.raw+json
  application/vnd.github.v3.text+json
  application/vnd.github.v3.html+json
  application/vnd.github.v3.full+json
  application/vnd.github.v3.diff
  application/vnd.github.v3.patch
```

## <a name="httpCodes"></a>HTTP 状态代码

HTTP 状态代码用于指示已执行操作的状态。
可用的状态代码由[RFC7231](https://tools.ietf.org/html/rfc7231#section-6)定义，注册的状态代码列在[IANA 状态代码注册表](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)中.
