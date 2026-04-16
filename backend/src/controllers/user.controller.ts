import type { RequestHandler } from "express";
import createError from "http-errors";

import User from "../models/user.ts";

type CreateUserRequestBody = {
  auth0Id: string;
  email: string;
  name?: string;
  addressLine1?: string;
  city?: string;
  country?: string;
};

export const createUser: RequestHandler<
  unknown,
  unknown,
  CreateUserRequestBody,
  unknown
> = async (req, res, next) => {
  const { auth0Id, email } = req.body;

  const existingUser = await User.findOne({ auth0Id });
  if (existingUser) {
    // next(createError(400, "User already exists"));
    return res.status(200).json(existingUser);
  }

  const newUser = new User(req.body);
  await newUser.save();

  res.status(201).json(newUser.toObject());
};
