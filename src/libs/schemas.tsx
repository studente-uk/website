
// TODO: make a method to check schemas


export const recipieSchema = {
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "title": "Recipie",
    "description": "A recipie object",
    "type": "object",
    "properties": {
        "info": {
            "type": "object",
            "description": "Information about the recipie",
            "properties": {
                "name": {
                    "type": "string",
                    "description": "The name of the recipie"
                },
                "id": {
                    "type": "string",
                    "description": "The id of the recipie"
                },
                "video": {
                    "type": "string",
                    "description": "A link to a video of the recipie"
                },
                "description": {
                    "type": "string",
                    "description": "A description of the recipie"
                },
                "tags": {
                    "type": "array",
                    "description": "Tags for the recipie",
                    "items": {
                        "type": "string"
                    }
                }
            }
        },
        "ingredients": {
            "type": "array",
            "description": "The ingredients for the recipie",
            "items": {
                "type": "object",
                "properties": {
                    "quantity": {
                        "type": "integer",
                        "description": "The quantity of the ingredient"
                    },
                    "unit": {
                        "type": "string",
                        "description": "The unit of the ingredient"
                    },
                    "item": {
                        "type": "string",
                        "description": "The name of the ingredient"
                    },
                    "notes": {
                        "type": "string",
                        "description": "Notes about the ingredient"
                    },
                    "alternatives": {
                        "type": "array",
                        "description": "Alternatives to the ingredient",
                        "items": {
                            "type": "string",
                            "description": "An alternative to the ingredient"
                        }
                    }
                }
            }
        },
        "equipment": {
            "type": "array",
            "description": "The equipment needed for the recipie",
            "items": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "description": "The name of the equipment"
                    },
                    "description": {
                        "type": "string",
                        "description": "A description of the equipment"
                    },
                    "notes": {
                        "type": "string",
                        "description": "Notes about the equipment"
                    },
                    "url": {
                        "type": "string",
                        "description": "A link to the equipment"
                    }
                }
            }
        },
        "method": {
            "type": "array",
            "description": "The method for the recipie",
            "items": {
                "type": "string",
                "description": "A step in the method"
            }
        },
        "notes": {
            "type": "string",
            "description": "Notes about the recipie"
        }                    
    }
}