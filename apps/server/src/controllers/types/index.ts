import { Request } from "express";

export type GenericRequest<T> = Request<Record<string, string>, any, T>;
