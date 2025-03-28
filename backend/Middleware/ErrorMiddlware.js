const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  const extraDetails = err.extraDetails || "No additional details available";
  console.error(`Error: ${message}`);
  res.status(status).json({ status, message, extraDetails });
};

module.exports = errorMiddleware;
