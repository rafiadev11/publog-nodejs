// const articleDB = require("./../modules/articles/model/article");
// const Article = articleDB.getModel();
// (async () => {
//   await Article.deleteMany({});
//   let article1 = new Article({
//     title: "How to Architect a Node.Js Project from Ground Up?",
//     slug: "how-to-architect-a-nodejs-project-from-ground-up",
//     description:
//       "In this article, we will discuss how to architect a Node.js application properly, and why it is important. Also, we’ll look at what design decisions can lead us to in creating a successful digital product. Maybe you are building a new Node.js application from scratch.",
//     image:
//       "https://res.cloudinary.com/practicaldev/image/fetch/s--5C4LXRYo--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/b93pbwxsjmzs45d00hjy.jpg",
//     content: `<p>In this article, we will discuss&nbsp;<strong>how to architect a Node.js application</strong>&nbsp;properly, and why it is important. Also, we&rsquo;ll look at what&nbsp;<strong>design decisions</strong>&nbsp;can lead us to in creating a successful digital product. Maybe you are building a new Node.js application from scratch. Perhaps you would like to refactor your existing application, or perhaps you want to explore&nbsp;<strong>Node.js application architecture</strong>&nbsp;and learn about the best practices and patterns. Whatever the reason, this article will help you.</p>
// <h2><a class="anchor" href="https://dev.to/shadid12/how-to-architect-a-node-js-project-from-ground-up-1n22#why-should-you-read-this-post" name="why-should-you-read-this-post"></a>Why should you read this post?</h2>
// <p>Well, it is true that there are many blog posts on the internet that cover this very subject. While there are some good articles on architecting Node.js projects, there are none that give you an in-depth explanation. Moreover, there are many blog posts that only elaborate on certain topics (i.e. layered architecture) but don&rsquo;t tell you how everything fits together in an application. This is why I chose to write this article. I tried to research and compact all the information into one digestible piece so you don&rsquo;t have to.</p>
// <p>We will briefly go over how to architect a Node.js application properly and discuss the reasoning behind all the design decisions while building an actual dummy application.</p>
// <p>We will discuss</p>
// <ol>
// <li>Folder structure</li>
// <li>Configuring environment variables</li>
// <li>MVC pattern (Model, View, Controller)</li>
// <li>Layered-architecture</li>
// <li>Encapsulating Configurations</li>
// </ol>
// <p>We will start with simple concepts and build on them. By the end of this article, you will be able to craft code that you are proud of.</p>
// <p>Excited? 🤩 Let&rsquo;s get started!</p>
// <h2><a class="anchor" href="https://dev.to/shadid12/how-to-architect-a-node-js-project-from-ground-up-1n22#folder-structure" name="folder-structure"></a>Folder Structure</h2>
// <p>The organization is important while building large scale projects. We define our folder structure in a way so that it is easy and obvious to find code pieces later. As developers, we often collaborate with others. A well-defined code structure allows us to easily collaborate on a project.</p>
// <p>Below is a sample folder structure that we have been using in my day job and it is working very well for us. We have delivered several successful projects with this structure. We came up with this after many trials and errors. You are welcome to use this structure or modify it.</p>`,
//     createdAt: Date.now(),
//   });
//   await Promise.all([article1.save()]);
//   process.exit();
// })();
// const topicDB = require("./../modules/topics/model/topic");
// const Topic = topicDB.getModel();
// (async () => {
//   await Topic.deleteMany({});
//   let topic = new Topic({
//     name: "VueJS",
//   });
//   let topic2 = new Topic({
//     name: "React",
//   });
//   let topic3 = new Topic({
//     name: "Angular",
//   });
//   let topic4 = new Topic({
//     name: "NodeJS",
//   });
//   let topic5 = new Topic({
//     name: "MongoDB",
//   });
//   let topic6 = new Topic({
//     name: "ExpressJS",
//   });
//   let topic7 = new Topic({
//     name: "PHP",
//   });
//   let topic8 = new Topic({
//     name: "Laravel",
//   });
//   let topic9 = new Topic({
//     name: "MySQL",
//   });
//   let topic10 = new Topic({
//     name: "HTML5",
//   });
//   let topic11 = new Topic({
//     name: "CSS",
//   });
//   await Promise.all([
//     topic.save(),
//     topic2.save(),
//     topic3.save(),
//     topic4.save(),
//     topic5.save(),
//     topic6.save(),
//     topic7.save(),
//     topic8.save(),
//     topic9.save(),
//     topic10.save(),
//     topic11.save(),
//   ]);
//   process.exit();
// })();
// const bcrypt = require("bcrypt");
// const userDB = require("./../modules/users/model/user");
// const User = userDB.getModel();
// (async () => {
//   let password = await bcrypt.hash("test123", 10);
//   let user = new User({
//     name: "Rachid Rafia",
//     email: "rrafia@bu.edu",
//     password: password,
//     role: "admin",
//   });
//
//   await Promise.all([user.save()]);
//   process.exit();
// })();
