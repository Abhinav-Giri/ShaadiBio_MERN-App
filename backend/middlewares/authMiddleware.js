import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json("Unauthorized");
  const decoded = jwt.verify(token, "secret");
  req.user = decoded;

  next();
};