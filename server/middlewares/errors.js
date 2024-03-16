const notFoundHandler = (req, res, next) => {
  res.status(404).render("pages/errors/404");
};

module.exports = notFoundHandler;
