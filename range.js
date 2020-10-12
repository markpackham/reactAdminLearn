module.exports = (req, res, next) => {
  // pagination with database
  res.header("Content-Range", "posts 0-20/20");
  next();
};
