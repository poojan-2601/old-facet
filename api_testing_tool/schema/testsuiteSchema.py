testsuite_schema = {
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "minLength": 3
        },
        "description": {
            "type": "string"
        },
        "project_id": {
            "type": "string",
            "minlength": 1
        },
        "testcases": {
            "type": "array",
            "items": {
                "type": "string",
                "minLength": 1
            }
        }
    },
    "required": ["name", "project_id", "testcases"]
}