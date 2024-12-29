class HandleResponse {
  /**
   * Success Response
   * @param {string} message - Optional success message
   * @param {any} data - Optional payload data
   */
  static success(res, message = 'Operation Successful', data = null) {
    return res.status(200).json({
      success: 1,
      message,
      data,
      status: 200
    });
  }

  /**
   * Error Response
   * @param {string} message - Optional error message
   * @param {number} statusCode - HTTP status code
   */
  static error(res, message = 'Something went wrong', statusCode = 404) {
    return res.status(statusCode).json({
      success: 0,
      message,
      status: 404
    });
  }

  /**
   * Catch Error (For Try-Catch Blocks)
   * @param {Error} error - The caught error object
   */
  static catchError(res, error) {
    console.error(error); // Optional: Use a logger here
    return res.status(500).json({
      success: 0,
      message: error.message || 'An unexpected error occurred',
      status: 500
    });
  }

  /**
   * Validation Error
   * @param {string} message - Optional validation error message
   * @param {any} details - Validation error details
   */
  static validationError(res, message = 'Validation failed', details = null, status = 400) {
    return res.status(status).json({
      success: 0,
      message,
      details,
      status
    });
  }

  /**
   * Any Generic Error
   * @param {string} message - Optional error message
   * @param {number} statusCode - HTTP status code
   * @param {any} details - Additional error details
   */
  static anyError(res, message = 'An error occurred', statusCode = 500, details = null) {
    return res.status(statusCode).json({
      success: 0,
      message,
      details,
    });
  }
}

export default HandleResponse
