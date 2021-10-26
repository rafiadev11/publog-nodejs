const articleDB = require("../articles/model/article");
const Article = articleDB.getModel();
module.exports = async (req, res) => {
  let article = await Article.findOne({ slug: req.params.slug }).lean();
  res.format({
    "application/json": function () {
      res.json({
        title: article.title,
        slug: article.slug,
        image: article.image,
        description: article.description,
        content: article.content,
      });
    },
    "application/xml": function () {
      let resultXml = `<?xml version="1.0"?>
            <article>
                <title>${article.title}</title>
                <slug>${article.slug}</slug>
                <article-image>${article.image}</article-image>
                <description>${article.description}</description>
                <post><![CDATA[${article.content}]]></post>
            </article>`;
      res.type("application/xml");
      res.send(resultXml);
    },
  });
};
