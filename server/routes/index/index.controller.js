const getIndexPage = (req, res) => {
  res.render("pages/index/index", { title: "Hi Kids", message: "Welcome to Monolithic Express Templating!" });
};

module.exports = { getIndexPage };
