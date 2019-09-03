# Model-Generator


Generate code for basic models from JSON schema. 


## Languages
- [ ] Java (in progress)
- [ ] Groovy
- [ ] Kotlin
- [ ] TypeScript


## To Do
* 'default' value for simple properties
* BigDecimal support
* long, double


## Possible Improvements
* Constants / final properties ?
* Serialization
* Builder methods
* hashCode, toString, and equals methods
* Parameterized constructor using 'required' on object properties
* On a similar note, call parameterized super constructor


## Specification
```JSON
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Test schema",
    "description": "A test schema to show various things",
    "type": "object",
    "extends": {
        "$ref": "Common/Thing.json"
    },
    "properties": {
        "name": {
            "type": "string"
        },
        
    }
}
```


## Commands
* Run tests ```python -m unittest```


## References
* JSON Schema Core https://json-schema.org/latest/json-schema-core.html
* https://schema.org/docs/schemas.html
* https://json-schema.org/understanding-json-schema/index.html
* https://www.jsonschemavalidator.net/
* Inspiration https://app.quicktype.io/