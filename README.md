# HandleResponse

**HandleResponse** is a lightweight utility class designed for consistent and standardized API responses in Express applications. It simplifies sending success, error, validation, and generic responses with minimal boilerplate code.

## Installation

```bash
npm install handle-response
```

## Usage

### Importing the Module

```javascript
import HandleResponse from 'handle-response';
```

### Success Response
Send a success response with a custom message and data.

```javascript
app.get('/success', (req, res) => {
  HandleResponse.success(res, 'Data fetched successfully', { id: 1, name: 'Example' });
});
```

**Response:**
```json
{
  "success": 1,
  "message": "Data fetched successfully",
  "data": {
    "id": 1,
    "name": "Example"
  },
  "status": 200
}
```

### Error Response
Send a generic error response.

```javascript
app.get('/error', (req, res) => {
  HandleResponse.error(res, 'Resource not found', 404);
});
```

**Response:**
```json
{
  "success": 0,
  "message": "Resource not found",
  "status": 404
}
```

### Catch Error
Handle errors within `try-catch` blocks.

```javascript
app.get('/catch-error', (req, res) => {
  try {
    throw new Error('Something broke');
  } catch (error) {
    HandleResponse.catchError(res, error);
  }
});
```

**Response:**
```json
{
  "success": 0,
  "message": "Something broke",
  "status": 500
}
```

### Validation Error
Send validation error responses.

```javascript
app.post('/validate', (req, res) => {
  const errors = { field: 'username', message: 'Username is required' };
  HandleResponse.validationError(res, 'Validation failed', errors);
});
```

**Response:**
```json
{
  "success": 0,
  "message": "Validation failed",
  "details": {
    "field": "username",
    "message": "Username is required"
  },
  "status": 400
}
```

### Any Generic Error
Send any custom error with additional details.

```javascript
app.get('/custom-error', (req, res) => {
  HandleResponse.anyError(res, 'Custom error occurred', 500, { info: 'Additional error info' });
});
```

**Response:**
```json
{
  "success": 0,
  "message": "Custom error occurred",
  "details": {
    "info": "Additional error info"
  },
  "status": 500
}
```

## API Methods

| Method            | Parameters                                      | Description                          |
|--------------------|------------------------------------------------|--------------------------------------|
| `success`         | `res`, `message`, `data`                        | Send a success response              |
| `error`           | `res`, `message`, `statusCode`                  | Send an error response               |
| `catchError`      | `res`, `error`, `status`                        | Handle errors in `try-catch` blocks   |
| `validationError` | `res`, `message`, `details`, `status`           | Send validation error response       |
| `anyError`        | `res`, `message`, `statusCode`, `details`       | Send any custom error response       |

## License

This project is licensed under the MIT License.

## Contributing

Feel free to open issues or pull requests on the [GitHub repository](https://github.com/Pratikpanchal25/Handle-Response-Package).

## Author

Pratik Panchal

