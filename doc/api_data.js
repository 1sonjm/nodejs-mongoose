define({ "api": [
  {
    "type": "delete",
    "url": "/api/books/:bookId",
    "title": "remove registered Book item",
    "name": "DeleteBook",
    "group": "Books",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bookId",
            "description": "<p>Books unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Books"
  },
  {
    "type": "get",
    "url": "/api/books",
    "title": "Request Book list",
    "name": "GetBooks",
    "group": "Books",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Books"
  },
  {
    "type": "put",
    "url": "/api/books/:bookIdUpdate",
    "title": "registered books for change info",
    "name": "UpdateBoo",
    "group": "Books",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bookId",
            "description": "<p>Books unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Books"
  }
] });
