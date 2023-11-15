---
sidebar_position: 6
---

# <a name="relativeReferencesURI"></a>Relative References in URIs

Unless specified otherwise, all properties that are URIs MAY be relative references as defined by [RFC3986](https://tools.ietf.org/html/rfc3986#section-4.2).

Relative references, including those in [`Reference Objects`](#referenceObject), [`PathItem Object`](#pathItemObject) `$ref` fields, [`Link Object`](#linkObject) `operationRef` fields and [`Example Object`](#exampleObject) `externalValue` fields, are resolved using the referring document as the Base URI according to [RFC3986](https://tools.ietf.org/html/rfc3986#section-5.2).

If a URI contains a fragment identifier, then the fragment should be resolved per the fragment resolution mechanism of the referenced document. If the representation of the referenced document is JSON or YAML, then the fragment identifier SHOULD be interpreted as a JSON-Pointer as per [RFC6901](https://tools.ietf.org/html/rfc6901).

Relative references in [`Schema Objects`](#schemaObject), including any that appear as `$id` values, use the nearest parent `$id` as a Base URI, as described by [JSON Schema Specification Draft 2020-12](https://tools.ietf.org/html/draft-bhutton-json-schema-00#section-8.2). If no parent schema contains an `$id`, then the Base URI MUST be determined according to [RFC3986](https://tools.ietf.org/html/rfc3986#section-5.1).
