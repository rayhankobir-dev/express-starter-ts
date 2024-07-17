import { Response } from 'express';

class AppResponse<T> {
  public status: number;
  public message: string;
  public data?: T;
  public metadata?: any;

  constructor(status: number, message: string, data?: T, metadata?: any) {
    this.status = status;
    this.message = message;

    if (data) {
      this.data = data;
    }

    if (metadata) {
      this.metadata = metadata;
    }
  }

  setMessage(message: string): this {
    this.message = message;
    return this;
  }

  setStatus(status: number): this {
    this.status = status;
    return this;
  }

  setData(data: any): this {
    this.data = data;
    return this;
  }

  setMetaData(metadata: T): this {
    this.metadata = metadata;
    return this;
  }

  send(res: Response): void {
    const response: any = {
      status: this.status,
      message: this.message,
      data: this.data,
    };

    if (this.metadata) {
      response.metadata = this.metadata;
    }

    res.status(this.status).json(response);
  }
}

export class SuccessResponse<T> extends AppResponse<T> {
  constructor(message: string = 'Success', data?: T, metadata?: any) {
    super(200, message, data, metadata);
  }

  send(res: Response): void {
    const response: any = {
      status: this.status,
      message: this.message,
      data: this.data,
    };

    if (this.metadata) {
      response.metadata = this.metadata;
    }

    res.status(this.status).json(response);
  }
}
export default AppResponse;
