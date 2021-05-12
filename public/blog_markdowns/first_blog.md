# First Blog

---

This is the first blog of this section of the site. Glad you could make it! Let me walk you through how I made it, and if there are any questions, feel free to go to my [Contact Page](https://charleskanoy.com/contact).

The blog portion of this site is made on the front-end side of development. I am using a JSON array to store the information about each blog, and the actual content of each blog is located in a MarkDown (`*.md`) file. The JSON array stores the path to each blog markdown file and is converted in a `BlogDetail` component. In order for this `BlogDetail` component to render each markdown as needed, I decided to use the [`react-markdown`](https://github.com/remarkjs/react-markdown) library.

## Stretch goals for this project

---

In the future, I'd like to include the following features in the blog portion of this site:

- Automated addition to JSON array at the same time as creation of a markdown file in the `blog_markdowns` directory.

- Handling of enhanced markdown features.

*Thank you so much for reading. Stay curious!* [👾](https://github.com/remarkjs/react-markdown)
