#### <a name="serverVariableObject"></a>Server Variable Object

An object representing a Server Variable for server URL template substitution.

##### Fixed Fields

| Field Name                                          |    Type    | Description                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------------------------------------- | :--------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <a name="serverVariableEnum"></a>enum               | [`string`] | An enumeration of string values to be used if the substitution options are from a limited set. The array MUST NOT be empty.                                                                                                                                                                                                                                                    |
| <a name="serverVariableDefault"></a>default         |  `string`  | **REQUIRED**. The default value to use for substitution, which SHALL be sent if an alternate value is _not_ supplied. Note this behavior is different than the [Schema Object's](#schemaObject) treatment of default values, because in those cases parameter values are optional. If the [`enum`](#serverVariableEnum) is defined, the value MUST exist in the enum's values. |
| <a name="serverVariableDescription"></a>description |  `string`  | An optional description for the server variable. [CommonMark syntax](https://spec.commonmark.org/) MAY be used for rich text representation.                                                                                                                                                                                                                                   |

This object MAY be extended with [Specification Extensions](#specificationExtensions).
