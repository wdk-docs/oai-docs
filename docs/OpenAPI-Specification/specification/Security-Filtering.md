---
sidebar_position: 10
---

# 安全筛选

OpenAPI 规范中的某些对象可能被声明并保持为空，或者被完全删除，即使它们本质上是 API 文档的核心。

理由是允许对文档进行额外的访问控制。
虽然不是规范本身的一部分，但某些库可能会选择允许基于某种形式的身份验证/授权访问部分文档。

这方面的两个例子:

1. [Paths Object](#pathsObject)可能存在但为空。这可能违反直觉，但这可能会告诉观众，他们到达了正确的地方，但无法访问任何文档。他们仍然至少可以访问[Info Object](#infoObject)，其中可能包含有关身份验证的附加信息。
2. [Path Item Object](#pathItemObject)可能为空。在这种情况下，查看器将知道路径存在，但将无法看到其任何操作或参数。这不同于对[Paths Object](#pathsObject)隐藏路径本身，因为用户会知道它的存在。这允许文档提供程序精细地控制查看器可以看到的内容。