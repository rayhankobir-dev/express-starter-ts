class AppError extends Error {
  public status: number;
  public code: string;

  constructor(message: string, status: number, code: string = 'ERR_GENERIC') {
    super(message);
    this.name = this.constructor.name;
    this.status = status;
    this.code = code;

    Error.captureStackTrace(this, this.constructor);
  }
}

export class NotFoundError extends AppError {
  constructor(message = 'Not Found') {
    super(message, 404, 'ERR_NOT_FOUND');
  }
}

export class BadRequestError extends AppError {
  constructor(message = 'Bad Request') {
    super(message, 400, 'ERR_BAD_REQUEST');
  }
}

export default AppError;
