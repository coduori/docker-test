const errorHandler = (err, req, res, next) => {
  const payload = {
    status: res.status ? res.status : 500,
    message: err.message || "unable to serve your request!",
  };
  res.status(payload.status).send({ message: payload.message });
};
export default errorHandler;
