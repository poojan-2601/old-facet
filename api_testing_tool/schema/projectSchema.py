projects_schema = {
    "type": "object",
    "properties": {
        "name": {
            "type":"string",
            "minLength": 3
        },
        "description": {
            "type":"string"
        }
    },
    "required": ["name"]
}