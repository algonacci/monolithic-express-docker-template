const getIndexPage = (req, res) => {
  res.render("pages/index", { title: "Hello Nunjucks", message: "Welcome to Nunjucks Templating!" });
};

module.exports = { getIndexPage };
