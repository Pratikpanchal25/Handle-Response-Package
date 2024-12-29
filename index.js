/**
 * @class HandleResponse
 * A standardized response handler for Express applications.
 */
class HandleResponse {
  /**
   * Send a success response.
   * @param {Response} res - Express response object.
   * @param {string} [message='Operation Successful'] - Success message.
   * @param {any} [data=null] - Payload data.
   * @param {number} [status=200] - HTTP status code.
   */
  static success(res, message = 'Operation Successful', data = null, status = 200) {
    return res.status(status).json({
      success: true,
      message,
      data,
      status,
    });
  }

  /**
   * Send a creation success response.
   * @param {Response} res - Express response object.
   * @param {string} [message='Resource Created Successfully'] - Success message.
   * @param {any} [data=null] - Created resource data.
   */
  static created(res, message = 'Resource Created Successfully', data = null) {
    return this.success(res, message, data, 201);
  }

  /**
   * Send a client error response.
   * @param {Response} res - Express response object.
   * @param {string} [message='Bad Request'] - Error message.
   * @param {number} [status=400] - HTTP status code.
   * @param {any} [details=null] - Additional error details.
   */
  static clientError(res, message = 'Bad Request', status = 400, details = null) {
    return res.status(status).json({
      success: false,
      message,
      details,
      status,
    });
  }

  /**
   * Send an unauthorized response.
   * @param {Response} res - Express response object.
   * @param {string} [message='Unauthorized Access'] - Error message.
   */
  static unauthorized(res, message = 'Unauthorized Access') {
    return this.clientError(res, message, 401);
  }

  /**
   * Send a forbidden response.
   * @param {Response} res - Express response object.
   * @param {string} [message='Forbidden Access'] - Error message.
   */
  static forbidden(res, message = 'Forbidden Access') {
    return this.clientError(res, message, 403);
  }

  /**
   * Send a not found response.
   * @param {Response} res - Express response object.
   * @param {string} [message='Resource Not Found'] - Error message.
   */
  static notFound(res, message = 'Resource Not Found') {
    return this.clientError(res, message, 404);
  }

  /**
   * Handle server errors (500).
   * @param {Response} res - Express response object.
   * @param {Error} error - Caught error object.
   * @param {string} [message='Internal Server Error'] - Error message.
   */
  static serverError(res, error, message = 'Internal Server Error') {
    return res.status(500).json({
      success: false,
      message,
      error: error.message || 'An unexpected error occurred',
      status: 500,
    });
  }

  /**
   * Send a validation error response.
   * @param {Response} res - Express response object.
   * @param {string} [message='Validation Failed'] - Validation error message.
   * @param {any} [details=null] - Validation details.
   */
  static validationError(res, message = 'Validation Failed', details = null) {
    return this.clientError(res, message, 422, details);
  }

  /**
   * Generic error handler.
   * @param {Response} res - Express response object.
   * @param {string} [message='An error occurred'] - Error message.
   * @param {number} [status=500] - HTTP status code.
   * @param {any} [details=null] - Additional error details.
   */
  static genericError(res, message = 'An error occurred', status = 500, details = null) {
    return res.status(status).json({
      success: false,
      message,
      details,
      status,
    });
  }

  /**
   * Send a pagination response.
   * @param {Response} res - Express response object.
   * @param {Array} data - Paginated data.
   * @param {number} page - Current page.
   * @param {number} limit - Items per page.
   * @param {number} total - Total items.
   * @param {string} [message='Data Retrieved Successfully'] - Success message.
   */
  static paginated(res, data, page, limit, total, message = 'Data Retrieved Successfully', status= 200) {
    return res.status(status).json({
      success: true,
      message,
      data,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
      status,
    });
  }

  /**
   * Send a no content response.
   * @param {Response} res - Express response object.
   * @param {string} [message='No Content'] - Message.
   */
  static noContent(res, message = 'No Content', status = 204) {
    return res.status(status).json({
      success: true,
      message,
      status,
    });
  }
}

export default HandleResponse;
