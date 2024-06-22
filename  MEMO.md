# メモ

## 構築

Cloud Flareでホスティングする。Pushすれば自動でデプロイされるようになっている。

https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/#preview-your-site

下記のInterフォントを無効にする（build時にエラーになる）

app/layout.tsx

React Cosmosも無効にする（build時にエラーになる）

npm remove react-cosmos react-cosmos-next

ローカル官僚は構築しない、npm run devで動くし

https://developers.cloudflare.com/d1/learning/local-development/

最後にドメインを買う

https://dash.cloudflare.com/66324a27b9dfb3c604dada5efb35ca12/domains/register

https://developers.cloudflare.com/pages/platform/custom-domains/

remark

npm install remark remark-html

npm install gray-matter unified

npm install remark-parse remark-rehype

npm install rehype-parse rehype-react

next.config.js

```
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;

```

Cloud FlareのEdge API/Workersでは、fsが使えないので、remarkを使わない

https://nextjs.org/docs/messages/node-module-in-edge-runtime

別途、APIを用意するか、SSGで生成するか

```
npm i -D daisyui@latest
```

configに追記

```
plugins: [require("daisyui")],
```

container-queriesを導入する

```
npm install @tailwindcss/container-queries
```

```
  plugins: [require("@tailwindcss/container-queries"), require("daisyui")],
```
