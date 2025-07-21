import jwt from "jsonwebtoken";
import config from "../config/config.js";
import { findOneUser } from "../dao/user.dao.js";

export async function authMiddleware(req, res, next) {
  const token = req.cookie.token;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized access, please login first.",
    });
  }

  try {
    const decoded = jwt.verify(token, config.secretKey);
    const user = await findOneUser({ _id: decoded._id });
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token,please login again.",
    });
  }
}
