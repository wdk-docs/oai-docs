---
sidebar_position: 3
---

# <a name="documentStructure"></a>Document Structure

An OpenAPI document MAY be made up of a single document or be divided into multiple, connected parts at the discretion of the author. In the latter case, [`Reference Objects`](#referenceObject) and [`Schema Object`](#schemaObject) `$ref` keywords are used.

It is RECOMMENDED that the root OpenAPI document be named: `openapi.json` or `openapi.yaml`.
