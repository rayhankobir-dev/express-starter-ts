import app from "../src/app";
import supertest from "supertest";
const request = supertest(app);

export default request;
