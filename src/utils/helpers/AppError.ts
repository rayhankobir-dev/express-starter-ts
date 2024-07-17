class AppError extends Error {
  public status: number;
  public error: string;
  public errors?: string[];

  constructor(
    message: string,
    status: number,
    error: string = 'ERR_GENERIC',
    errors?: string[],
  ) {
    super(message);
    this.name = this.constructor.name;
    this.status = status;
    this.error = error;
    this.errors = errors;

    Error.captureStackTrace(this, this.constructor);
  }

  setMessage(message: string): this {
    this.message = message;
    return this;
  }

  setstatus(status: number): this {
    this.status = status;
    return this;
  }

  seterror(error: string): this {
    this.error = error;
    return this;
  }

  setErrors(errors: string[]): this {
    this.errors = errors;
    return this;
  }

  toApiResponse(): any {
    const response: any = {
      status: this.status,
      error: this.error,
      message: this.message,
    };

    if (this.errors && this.errors.length > 0) {
      response.errors = this.errors;
    }

    return response;
  }
}

export class BadRequestError extends AppError {
  constructor(message = 'Bad Request', errors?: string[]) {
    super(message, 400, 'ERR_BAD_REQUEST', errors);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = 'Unauthorized', errors?: string[]) {
    super(message, 401, 'ERR_UNAUTHORIZED', errors);
  }
}

export class ForbiddenError extends AppError {
  constructor(message = 'Forbidden', errors?: string[]) {
    super(message, 403, 'ERR_FORBIDDEN', errors);
  }
}

export class NotFoundError extends AppError {
  constructor(message = 'Not Found', errors?: string[]) {
    super(message, 404, 'ERR_NOT_FOUND', errors);
  }
}

export class MethodNotAllowedError extends AppError {
  constructor(message = 'Method Not Allowed', errors?: string[]) {
    super(message, 405, 'ERR_METHOD_NOT_ALLOWED', errors);
  }
}

export class NotAcceptableError extends AppError {
  constructor(message = 'Not Acceptable', errors?: string[]) {
    super(message, 406, 'ERR_NOT_ACCEPTABLE', errors);
  }
}

export class ConflictError extends AppError {
  constructor(message = 'Conflict', errors?: string[]) {
    super(message, 409, 'ERR_CONFLICT', errors);
  }
}

export class GoneError extends AppError {
  constructor(message = 'Gone', errors?: string[]) {
    super(message, 410, 'ERR_GONE', errors);
  }
}

export class UnsupportedMediaTypeError extends AppError {
  constructor(message = 'Unsupported Media Type', errors?: string[]) {
    super(message, 415, 'ERR_UNSUPPORTED_MEDIA_TYPE', errors);
  }
}

export class UnprocessableEntityError extends AppError {
  constructor(message = 'Unprocessable Entity', errors?: string[]) {
    super(message, 422, 'ERR_UNPROCESSABLE_ENTITY', errors);
  }
}

export class InternalServerError extends AppError {
  constructor(message = 'Internal Server Error', errors?: string[]) {
    super(message, 500, 'ERR_INTERNAL_SERVER', errors);
  }
}

export class NotImplementedError extends AppError {
  constructor(message = 'Not Implemented', errors?: string[]) {
    super(message, 501, 'ERR_NOT_IMPLEMENTED', errors);
  }
}

export class BadGatewayError extends AppError {
  constructor(message = 'Bad Gateway', errors?: string[]) {
    super(message, 502, 'ERR_BAD_GATEWAY', errors);
  }
}

export class ServiceUnavailableError extends AppError {
  constructor(message = 'Service Unavailable', errors?: string[]) {
    super(message, 503, 'ERR_SERVICE_UNAVAILABLE', errors);
  }
}

export class GatewayTimeoutError extends AppError {
  constructor(message = 'Gateway Timeout', errors?: string[]) {
    super(message, 504, 'ERR_GATEWAY_TIMEOUT', errors);
  }
}

export default AppError;
