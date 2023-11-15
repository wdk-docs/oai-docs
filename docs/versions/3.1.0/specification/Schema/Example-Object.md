#### <a name="exampleObject"></a>Example Object

##### Fixed Fields

| Field Name                                       |   Type   | Description                                                                                                                                                                                                                                                                                           |
| ------------------------------------------------ | :------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a name="exampleSummary"></a>summary             | `string` | Short description for the example.                                                                                                                                                                                                                                                                    |
| <a name="exampleDescription"></a>description     | `string` | Long description for the example. [CommonMark syntax](https://spec.commonmark.org/) MAY be used for rich text representation.                                                                                                                                                                         |
| <a name="exampleValue"></a>value                 |   Any    | Embedded literal example. The `value` field and `externalValue` field are mutually exclusive. To represent examples of media types that cannot naturally represented in JSON or YAML, use a string value to contain the example, escaping where necessary.                                            |
| <a name="exampleExternalValue"></a>externalValue | `string` | A URI that points to the literal example. This provides the capability to reference examples that cannot easily be included in JSON or YAML documents. The `value` field and `externalValue` field are mutually exclusive. See the rules for resolving [Relative References](#relativeReferencesURI). |

This object MAY be extended with [Specification Extensions](#specificationExtensions).

In all cases, the example value is expected to be compatible with the type schema
of its associated value. Tooling implementations MAY choose to
validate compatibility automatically, and reject the example value(s) if incompatible.

##### Example Object Examples

In a request body:

```yaml
requestBody:
  content:
    "application/json":
      schema:
        $ref: "#/components/schemas/Address"
      examples:
        foo:
          summary: A foo example
          value: { "foo": "bar" }
        bar:
          summary: A bar example
          value: { "bar": "baz" }
    "application/xml":
      examples:
        xmlExample:
          summary: This is an example in XML
          externalValue: "https://example.org/examples/address-example.xml"
    "text/plain":
      examples:
        textExample:
          summary: This is a text example
          externalValue: "https://foo.bar/examples/address-example.txt"
```

In a parameter:

```yaml
parameters:
  - name: "zipCode"
    in: "query"
    schema:
      type: "string"
      format: "zip-code"
    examples:
      zip-example:
        $ref: "#/components/examples/zip-example"
```

In a response:

```yaml
responses:
  "200":
    description: your car appointment has been booked
    content:
      application/json:
        schema:
          $ref: "#/components/schemas/SuccessResponse"
        examples:
          confirmation-success:
            $ref: "#/components/examples/confirmation-success"
```
