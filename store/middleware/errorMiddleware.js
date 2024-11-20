const errorHandler = (err, req, res, next) => {
  console.log(err);

  if (err.code === "23505") {
    return res.status(409).json({ message: err.message, code: err.code });
  }
  if (err.code === "23502") {
    return res.status(400).json({ message: err.message, code: err.code });
  }

  return res.status(500).send("Internal Server Error!");
};
export default errorHandler;
