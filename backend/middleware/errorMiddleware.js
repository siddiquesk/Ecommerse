
const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({ msg: message });
};
module.exports = errorMiddleware;
