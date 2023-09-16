import { createElement, Fragment } from "react";
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import { unified } from "unified";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import fs from "fs/promises";

// export const runtime = "edge";

async function getData(slug: string) {
  "use server";
  const file = await fs.readFile(`posts/${slug}.md`, "utf-8");
  const { content, data } = matter(file);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();
  // const vfile = await unified()
  //   .use(rehypeParse, {
  //     fragment: true,
  //   })
  //   .use(
  //     rehypeReact
  //     //    {
  //     //   Fragment,
  //     //   components: {
  //     //     a: (props: any) => <CustomLink {...props} />,
  //     //     img: (props: any) => <CustomImage {...props} />,
  //     //   },
  //     //   createElement,
  //     // }
  //   )
  //   .process(contentHtml);
  return contentHtml;
}

export default async function Slug({
  params: { slug },
}: {
  params: { slug: string };
}) {
  // fsでmarkdownファイルを取得し、remark でHTMLに変換する
  const html = await getData(slug);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
