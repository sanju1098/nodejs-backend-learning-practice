import { Request, Response } from "express";

import * as userService from "../services/user.service";

export const create = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  const user = await userService.createUser(name, email);

  res.status(201).json(user);
};

export const getAll = async (req: Request, res: Response) => {
  const users = await userService.getUsers();

  res.json(users);
};

export const getOne = async (req: Request, res: Response) => {
  const user = await userService.getUser(req.params.id);

  res.json(user);
};

export const update = async (req: Request, res: Response) => {
  const user = await userService.updateUser(req.params.id, req.body.name);

  res.json(user);
};

export const remove = async (req: Request, res: Response) => {
  await userService.deleteUser(req.params.id);

  res.json({
    message: "User deleted",
  });
};
