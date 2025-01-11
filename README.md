# 🚀 **Api Response Handler**

**Api Response Handler** is a utility library designed for **consistent, standardized, and user-friendly API responses** in **Express.js** applications. It simplifies success, error, validation, and pagination responses while reducing repetitive boilerplate code.

---

## 📦 **Installation**

Install the package via **npm**:

```bash
npm install api-response-handler
```

---

## 📚 **Usage**

### ✅ **Import the Module**

```javascript
import HandleResponse from 'api-response-handler';
```

---

## ⚡ **API Response Methods**

### 🔹 **1. Success Response**
Send a generic success response.

```javascript
app.get('/success', (req, res) => {
  HandleResponse.success(res, 'Data fetched successfully', { id: 1, name: 'Example' });
});
```

**Response:**
```json
{
  "success": true,
  "message": "Data fetched successfully",
  "data": {
    "id": 1,
    "name": "Example"
  },
  "status": 200
}
```

---

### 🔹 **2. Created Response**
Send a success response specifically for resource creation.

```javascript
app.post('/create', (req, res) => {
  HandleResponse.created(res, 'User created successfully', { id: 1 });
});
```

**Response:**
```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "id": 1
  },
  "status": 201
}
```

---

### 🔹 **3. Validation Error**
Handle validation failures.

```javascript
app.post('/validate', (req, res) => {
  const errors = { field: 'email', message: 'Invalid email format' };
  HandleResponse.validationError(res, 'Validation failed', errors);
});
```

**Response:**
```json
{
  "success": false,
  "message": "Validation failed",
  "details": {
    "field": "email",
    "message": "Invalid email format"
  },
  "status": 422
}
```

---

### 🔹 **4. Unauthorized Access**
Handle unauthorized access attempts.

```javascript
app.get('/unauthorized', (req, res) => {
  HandleResponse.unauthorized(res);
});
```

**Response:**
```json
{
  "success": false,
  "message": "Unauthorized Access",
  "status": 401
}
```

---

### 🔹 **5. Forbidden Access**
Handle forbidden requests.

```javascript
app.get('/forbidden', (req, res) => {
  HandleResponse.forbidden(res);
});
```

**Response:**
```json
{
  "success": false,
  "message": "Forbidden Access",
  "status": 403
}
```

---

### 🔹 **6. Not Found**
Handle requests to non-existent resources.

```javascript
app.get('/not-found', (req, res) => {
  HandleResponse.notFound(res);
});
```

**Response:**
```json
{
  "success": false,
  "message": "Resource Not Found",
  "status": 404
}
```

---

### 🔹 **7. Server Error (Try-Catch Handling)**
Handle unexpected server errors gracefully.

```javascript
app.get('/server-error', (req, res) => {
  try {
    throw new Error('Unexpected error');
  } catch (error) {
    HandleResponse.serverError(res, error);
  }
});
```

**Response:**
```json
{
  "success": false,
  "message": "Internal Server Error",
  "error": "Unexpected error",
  "status": 500
}
```

---

### 🔹 **8. Paginated Response**
Send a structured paginated response.

```javascript
app.get('/paginated', (req, res) => {
  const data = [{ id: 1 }, { id: 2 }];
  HandleResponse.paginated(res, data, 1, 10, 50);
});
```

**Response:**
```json
{
  "success": true,
  "message": "Data Retrieved Successfully",
  "data": [
    { "id": 1 },
    { "id": 2 }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 50,
    "totalPages": 5
  },
  "status": 200
}
```

---

### 🔹 **9. Generic Error**
Send a custom error response with details.

```javascript
app.get('/custom-error', (req, res) => {
  HandleResponse.genericError(res, 'Something went wrong', 400, { info: 'Custom issue' });
});
```

**Response:**
```json
{
  "success": false,
  "message": "Something went wrong",
  "details": {
    "info": "Custom issue"
  },
  "status": 400
}
```

---

### 🔹 **10. No Content**
Send a `204 No Content` response.

```javascript
app.delete('/delete', (req, res) => {
  HandleResponse.noContent(res);
});
```

**Response:** *(No Body Returned, HTTP Status Code 204)*

---

## 📊 **API Methods Overview**

| Method            | Parameters                                      | Description                          |
|--------------------|------------------------------------------------|--------------------------------------|
| `success`         | `res`, `message`, `data`, `status`              | Generic success response             |
| `created`         | `res`, `message`, `data`                        | Resource creation response           |
| `validationError` | `res`, `message`, `details`                     | Validation error response            |
| `unauthorized`    | `res`, `message`                                | Unauthorized access                  |
| `forbidden`       | `res`, `message`                                | Forbidden access                      |
| `notFound`        | `res`, `message`                                | Resource not found                   |
| `serverError`     | `res`, `error`, `message`                       | Server error response                |
| `paginated`       | `res`, `data`, `page`, `limit`, `total`, `message` | Paginated response                |
| `genericError`    | `res`, `message`, `status`, `details`           | Custom error response                |
| `noContent`       | `res`, `message`                                | No content response (204)            |

---

## 🤝 **Contributing**
Contributions are always welcome!
- Open issues or feature requests on the [GitHub repository](https://github.com/Pratikpanchal25/Handle-Response-Package).
- Submit pull requests with descriptive explanations.

---

## 📄 **License**
This project is licensed under the **MIT License**.

---

## 🧑‍💻 **Author**
**Pratik Panchal**
- GitHub: [Pratikpanchal25](https://github.com/Pratikpanchal25)
- Twitter: [@pratikpanchal](https://twitter.com/pratikpanchal)

