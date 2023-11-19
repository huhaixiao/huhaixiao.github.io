import { Request, RequestHandler } from "express";
import {} from '../models';
export const signUpHandler: RequestHandler = (
  req: Request<Record<string, string>, any, { name: string; password: string }>,
  res,
  next
) => {
  const { name, password } = req.body;
  console.log({
    name,
    password,
  });
};
