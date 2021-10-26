const articleDB = require("../articles/model/article");
const Article = articleDB.getModel();
module.exports = async (req, res) => {
  let articles = await Article.find({}).lean();
  let results = articles.map((article) => {
    return {
      id: article._id,
      title: article.title,
      slug: article.slug,
      image: article.image,
      description: article.description,
      content: article.content,
    };
  });
  res.format({
    "application/json": () => {
      res.json(results);
    },
    "application/xml": () => {
      let resultXml = `<?xml version="1.0" ?>
        <articles>
        ${results.map((element) => {
          return `
            <article>
                <title>${element.title}</title>
                <slug>${element.slug}</slug>
                <article-image>${element.image}</article-image>
                <description>${element.description}</description>
                <post><![CDATA[${element.content}]]></post>
            </article>`;
        })}
          </articles>
          `;
      res.send(resultXml);
    },
  });
};
