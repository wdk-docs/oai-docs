---
sidebar_position: 1
---

# 版本

OpenAPI 规范使用`major`.`minor`.`patch`版本控制方案进行版本控制。
The `major`.`minor` portion of the version string (for example `3.1`) SHALL designate the OAS feature set. _`.patch`_ versions address errors in, or provide clarifications to, this document, not the feature set. Tooling which supports OAS 3.1 SHOULD be compatible with all OAS 3.1.\* versions. The patch version SHOULD NOT be considered by tooling, making no distinction between `3.1.0` and `3.1.1` for example.

Occasionally, non-backwards compatible changes may be made in `minor` versions of the OAS where impact is believed to be low relative to the benefit provided.

An OpenAPI document compatible with OAS 3.\*.\* contains a required [`openapi`](#oasVersion) field which designates the version of the OAS that it uses.
