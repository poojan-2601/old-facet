header_schema = {
    "type": "object",
    "properties": {
        "name": {
            "type":"string",
            "minLength": 3
        },
        "project": {
            "type": "string",
            "minLength": 1
        },
        "header": {
            "type": "object"
        }
    },
    "required": ["name", "project", "header"]
}