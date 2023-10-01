import { Main } from "$/_ui/atoms/main";
import Image from "next/image";

export const runtime = "edge";

export default function Home() {
  const linkIcon = (
    <svg
      className="mb-[.125rem] mr-[.125rem] inline h-4 w-4 scale-x-[-1] scale-y-[1] fill-none stroke-current stroke-1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
  return (
    <Main className="h-screen w-screen sm:carousel sm:carousel-vertical">
      {/* Hero、区切り区切りに入れていく */}
      <div
        className="carousel-item hero min-h-screen bg-base-200 pt-10 sm:pt-0"
        id="top"
      >
        <div className="hero-content max-w-3xl flex-col sm:flex-row">
          <Image
            className="!static max-w-xs"
            alt="Profile image"
            src="/miko.PNG"
            fill
          />
          <div>
            <h1 className="text-xl font-bold">フロントエンド・Webエンジニア</h1>
            <p className="py-6">
              Webフロントエンドの開発が好きな二児の父です。最近は、TypeScriptやReact、Next.js、Tailwind
              CSSなどを中心に使っています。
              {/* UI/UXのデザインも行いますし、JavaやNode.js、TypeScriptなどのバックエンドの開発も行います。 */}
            </p>
            <div className="chat chat-start">
              <div className="chat-bubble text-sm">
                10年以上経験: Java/Servlet/JSP/HTML/CSS/jQuery
              </div>
            </div>
            <div className="chat chat-end">
              <div className="chat-bubble text-sm">
                1〜2年以上経験: React/Vue/Tailwind CSS/TypeScript/Bootstrap
              </div>
            </div>
            <div className="chat chat-start">
              <div className="chat-bubble text-sm">
                工場系SIerを12年、地元ベンチャー企業を2年。現在は虎の穴ラボで2年半勤務し、アーキテクト/セキュリティを担当。
              </div>
            </div>
            <div className="chat chat-end">
              <div className="chat-bubble text-sm">
                <a
                  href="https://techbookfest.org/organization/4848038407307264"
                  className="link"
                  target="_blank"
                >
                  {linkIcon}技術書典11〜14へ参加、累計228部を頒布。
                </a>
              </div>
            </div>
            <a
              className="btn btn-primary mt-4 animate-bounce text-neutral-content"
              href="#work-history"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                strokeWidth={1.5}
                fill="none"
              >
                <path
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* 職歴ステップ */}
      <div
        className="carousel-item relative flex h-[100rem] items-center justify-center bg-primary-content"
        id="history"
      >
        <div className="h-full max-w-3xl pl-8">
          <h1 className="absolute top-[6.5rem] text-xl font-bold">
            主に携わったプロジェクトなど
          </h1>
          <ul className="steps steps-vertical h-full w-full">
            <li className="step relative">
              Sler・工場内業務Webアプリケーション開発
              <div className="absolute left-10 top-[50%] flex h-full w-full flex-col content-center justify-center">
                <div className="chat chat-start">
                  <div className="chat-bubble text-sm">
                    主な開発言語は Servlet/JSP/Struts1/Java
                  </div>
                </div>
                <div className="chat chat-start">
                  <div className="chat-bubble text-sm">
                    新規・既存ツール開発保守
                  </div>
                </div>
                <div className="chat chat-start">
                  <div className="chat-bubble text-sm">
                    CORBA接続共通ライブラリの開発
                  </div>
                </div>
                <div className="chat chat-start">
                  <div className="chat-bubble text-sm">JDK5へ移行</div>
                </div>
                <div className="chat chat-start">
                  <div className="chat-bubble text-sm">JDK8へ移行</div>
                </div>
                <div className="chat chat-start">
                  <div className="chat-bubble text-sm">Oracle→DB2へ移行</div>
                </div>
              </div>
            </li>
            <li className="step relative">
              地元ベンチャー企業
              <div className="absolute left-10 top-[50%] flex h-full w-[calc(100%-6rem)] flex-col content-center justify-center">
                <div className="chat chat-start">
                  <div className="chat-bubble text-sm">
                    フロントエンドエンジニアとして入社
                  </div>
                </div>
                <div className="chat chat-start">
                  <div className="chat-bubble text-sm">
                    EC保守開発 PHP/MySQL/jQuery/Vue.js
                  </div>
                </div>
                <div className="chat chat-start">
                  <div className="chat-bubble text-sm">
                    社外向け新規ツール開発 Nuxt.js/Bootstrap/Firebase
                  </div>
                </div>
                <div className="chat chat-start">
                  <div className="chat-bubble text-sm">
                    CtoCスマホアプリ保守 Riot.js/Cordova/GCP
                  </div>
                </div>
                <div className="chat chat-start">
                  <div className="chat-bubble text-sm">
                    社内向け新規ツール開発 Nuxt.js/Tailwind CSS/Firebase/GCP
                  </div>
                </div>
              </div>
            </li>
            <li className="step step-primary relative">
              虎の穴ラボ（Webエンジニア・AT＆CSIRT）
              <div className="absolute left-10 top-[50%] flex h-full w-[calc(100%-6rem)] flex-col content-center justify-center">
                <div className="chat chat-start">
                  <div className="chat-bubble text-sm">
                    とらのあな補充発注システム開発 Nuxt.js/ElementUI
                    <br />
                    StoryBook駆動開発
                  </div>
                </div>
                <div className="chat chat-start">
                  <div className="chat-bubble text-sm">
                    とらのあな通販の保守開発、セキュリティ対策
                  </div>
                </div>
                <div className="chat chat-start">
                  <div className="chat-bubble text-sm">
                    とらのあな通販向けのオンライン待合室開発 Vue.js/Tailwind CSS
                  </div>
                </div>
                <div className="chat chat-start">
                  <div className="chat-bubble text-sm">
                    新サークルポータル アーキテクチャ設計/開発
                    Next.js/TypeScript/Tailwind CSS
                  </div>
                </div>
              </div>
            </li>
            <li className="step step-primary relative">現在</li>
          </ul>
        </div>
      </div>
      {/* カード、職歴ごとに代表的なこと */}
      <div
        className="carousel-item grid grid-cols-1 gap-4 bg-secondary-content p-4 pt-28 md:grid-cols-2 xl:grid-cols-3"
        id="results"
      >
        <div className="card bg-base-300 shadow-xl lg:card-side">
          <figure>
            <Image
              src="https://dummyimage.com/600x400/000/fff.png&text=Coming+Soon!!"
              className="!static !max-h-40 object-cover"
              alt="Coming Soon!!"
              fill
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Coming Soon!!</h2>
            <div className="badge badge-secondary">技術書典15</div>
            <p className="text-sm">
              技術書典15向けの同人誌を執筆中です。Next.jsとTailwind CSS、App
              Routerによるアプリケーション作成のノウハウをまとめた本になります。
            </p>
            {/* <div className="card-actions justify-end">
              <a
                className="btn btn-primary btn-outline btn-xs"
                target="_blank"
                href="#"
              >
                技術書典
              </a>
              <a
                className="btn btn-primary  btn-outline btn-xs"
                target="_blank"
                href="#"
              >
                Booth
              </a>
              <a
                className="btn btn-primary  btn-outline btn-xs"
                target="_blank"
                href="#"
              >
                Amazon
              </a>
            </div> */}
          </div>
        </div>
        <div className="card bg-base-300 shadow-xl lg:card-side">
          <figure>
            <Image
              className="!static !max-h-40 object-cover"
              src="/tailwindcss-matome-cover.png"
              alt="Tailwind CSSまとめの表紙"
              fill
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Tailwind CSSまとめ</h2>
            <div className="badge badge-secondary">技術書典14</div>
            <p className="text-sm">
              VivlioStyle で作成した「Tailwind CSS
              の推し理由を語る本」をベースに、第一版の「Tailwind CSS
              まとめ」の構成やデザインを改善し、本の内容も全体的に現在の最新の
              Tailwind 3.0 ベースにした本です。
            </p>
            <div className="card-actions justify-end">
              <a
                href="https://techbookfest.org/product/fqwn57yGyfD6S1UAgd8fCF"
                className="btn btn-primary btn-xs"
                target="_blank"
              >
                {linkIcon}技術書典
              </a>
              <a
                className="btn btn-neutral  btn-outline btn-xs"
                href="https://kght6123.booth.pm/items/3039023"
                target="_blank"
              >
                {linkIcon}Booth
              </a>
              <a
                className="btn btn-neutral  btn-outline btn-xs"
                href="https://www.amazon.co.jp/dp/B0BFHZG1QK"
                target="_blank"
              >
                {linkIcon}Amazon
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-base-300 shadow-xl lg:card-side">
          <figure>
            <Image
              className="!static !max-h-40 object-cover"
              alt="Tailwind CSSの推し理由を語る本の表紙"
              src="/tailwindcss-oshi.png"
              fill
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Tailwind CSSの推し理由を語る本</h2>
            <div className="badge badge-secondary">技術書典13</div>
            <p className="text-sm">
              CSSフレームワークに関する経験や過去に作ってきたものを思い起こしながら、なぜ、Tailwind
              CSSを推すのか？をまとめた本になります。
            </p>
            <div className="card-actions justify-end">
              <a
                href="https://techbookfest.org/product/fn0HMHZqnDEr6LVKYA1r78"
                className="btn btn-primary btn-xs"
                target="_blank"
              >
                {linkIcon}技術書典
              </a>
              <a
                className="btn btn-neutral  btn-outline btn-xs"
                href="https://kght6123.booth.pm/items/4151967"
                target="_blank"
              >
                {linkIcon}Booth
              </a>
              <a
                className="btn btn-neutral  btn-outline btn-xs"
                href="https://www.amazon.co.jp/dp/B0BF34MLL9"
                target="_blank"
              >
                {linkIcon}Amazon
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-base-300 shadow-xl lg:card-side">
          <figure>
            <Image
              className="!static !max-h-40 object-cover"
              alt="MiraiBoardのスクリーンショット"
              src="/MiraiBoard.png"
              fill
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">MiraiBoard</h2>
            <div className="badge badge-secondary">ぷらいべーと開発</div>
            <p className="text-sm">
              BacklogのAPIを使って、Backlogでのタスク管理を簡単にするためのツールを作成中、Next.js/Tailwind
              CSSで作成しています。
              <br />
              （Backlog APIキーでログイン）
            </p>
            <div className="card-actions justify-end">
              <a
                href="https://github.com/kght6123/MiraiBoard/tree/backlog"
                className="btn btn-neutral btn-outline btn-xs"
                target="_blank"
              >
                {linkIcon}GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-base-300 shadow-xl lg:card-side">
          <figure>
            <Image
              className="!static !max-h-40 object-cover"
              alt="OpenAIChatExtentionのスクリーンショット"
              src="/VSCode_Chat.png"
              fill
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">OpenAI Chat Extention</h2>
            <div className="badge badge-secondary">ぷらいべーと開発</div>
            <p className="text-sm">
              Copilot
              Chatが使えない間の一時凌ぎで代わりのAIとチャットできるツールをOpenAI
              APIで作成、React.js/Tailwind CSSで作成しています。
            </p>
            <div className="card-actions justify-end">
              <a
                href="https://toranoana-lab.hatenablog.com/entry/2023/07/13/140000"
                className="btn btn-neutral btn-outline btn-xs"
                target="_blank"
              >
                {linkIcon}虎の穴開発室ブログ
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-base-300 shadow-xl lg:card-side">
          <figure>
            <Image
              className="!static !max-h-40 object-cover"
              alt="作成したカスタム構文を使った書面のサンプル"
              src="/20220713174523.png"
              fill
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Markdownでカスタム構文が使える技術同人誌の執筆環境を作ってみた!!
            </h2>
            <div className="badge badge-secondary">ぷらいべーと開発</div>
            <p className="text-sm">
              VivlioStyleのビルド前にテンプレートエンジンの「Handlebars.js」のビルドを挟むことで、MarkdownでMustacheテンプレートのカスタム構文が使える技術同人誌の執筆環境を作成しています。
              <br />
              最近、執筆した技術同人誌のベースです。
            </p>
            <div className="card-actions justify-end">
              <a
                href="https://toranoana-lab.hatenablog.com/entry/2022/07/18/110000"
                className="btn btn-neutral btn-outline btn-xs"
                target="_blank"
              >
                {linkIcon}虎の穴開発室ブログ
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* 経験年数テーブル */}
      <div
        className="carousel-item flex h-full justify-center overflow-x-auto bg-primary-content"
        id="skills"
      >
        <table className="table table-pin-rows table-pin-cols table-xs w-full max-w-3xl [&>tfoot>tr>td]:text-base-content [&>thead>tr>td]:text-base-content [&_th]:w-8 [&_th]:text-center [&_th]:text-base-content">
          <thead>
            <tr>
              <th></th>
              <td>言語・フレームワーク名</td>
              <td>経験年数</td>
              <td>得意レベル</td>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td className="text-4xl">Java</td>
              <td>
                <div>
                  <span className="countdown font-mono text-4xl">
                    <span className="[--value:10]"></span>
                  </span>
                  years
                </div>
              </td>
              <td>
                <div className="rating rating-lg">
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-1"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-1"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-1"
                    type="radio"
                    checked
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-1"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-1"
                    type="radio"
                  />
                </div>
              </td>
              <th>1</th>
            </tr>
            <tr>
              <th>2</th>
              <td className="text-4xl">JavaScript</td>
              <td>
                <div>
                  <span className="countdown font-mono text-4xl">
                    <span className="[--value:10]"></span>
                  </span>
                  years
                </div>
              </td>
              <td>
                <div className="rating rating-lg">
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-2"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-2"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-2"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-2"
                    type="radio"
                    checked
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-2"
                    type="radio"
                  />
                </div>
              </td>
              <th>2</th>
            </tr>
            <tr>
              <th>3</th>
              <td className="text-4xl">TypeScript</td>
              <td>
                <div>
                  <span className="countdown font-mono text-4xl">
                    <span className="[--value:2]"></span>
                  </span>
                  years
                </div>
              </td>
              <td>
                <div className="rating rating-lg">
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-3"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-3"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-3"
                    type="radio"
                    checked
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-3"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-3"
                    type="radio"
                  />
                </div>
              </td>
              <th>3</th>
            </tr>
            <tr>
              <th>4</th>
              <td className="text-4xl">React.js</td>
              <td>
                <div>
                  <span className="countdown font-mono text-4xl">
                    <span className="[--value:1]"></span>
                  </span>
                  years
                </div>
              </td>
              <td>
                <div className="rating rating-lg">
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-4"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-4"
                    type="radio"
                    checked
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-4"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-4"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-4"
                    type="radio"
                  />
                </div>
              </td>
              <th>4</th>
            </tr>
            <tr>
              <th>5</th>
              <td className="text-4xl">Vue.js</td>
              <td>
                <div>
                  <span className="countdown font-mono text-4xl">
                    <span className="[--value:2]"></span>
                  </span>
                  years
                </div>
              </td>
              <td>
                <div className="rating rating-lg">
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-5"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-5"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-5"
                    type="radio"
                    checked
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-5"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-5"
                    type="radio"
                  />
                </div>
              </td>
              <th>5</th>
            </tr>
            <tr>
              <th>6</th>
              <td className="text-4xl">CSS</td>
              <td>
                <div>
                  <span className="countdown font-mono text-4xl">
                    <span className="[--value:10]"></span>
                  </span>
                  years
                </div>
              </td>
              <td>
                <div className="rating rating-lg">
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-6"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-6"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-6"
                    type="radio"
                    checked
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-6"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-6"
                    type="radio"
                  />
                </div>
              </td>
              <th>6</th>
            </tr>
            <tr>
              <th>7</th>
              <td className="text-4xl">Tailwind CSS</td>
              <td>
                <div>
                  <span className="countdown font-mono text-4xl">
                    <span className="[--value:4]"></span>
                  </span>
                  years
                </div>
              </td>
              <td>
                <div className="rating rating-lg">
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-7"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-7"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-7"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-7"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-7"
                    type="radio"
                    checked
                  />
                </div>
              </td>
              <th>7</th>
            </tr>
            <tr>
              <th>8</th>
              <td className="text-4xl">Next.js</td>
              <td>
                <div>
                  <span className="countdown font-mono text-4xl">
                    <span className="[--value:1]"></span>
                  </span>
                  years
                </div>
              </td>
              <td>
                <div className="rating rating-lg">
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-8"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-8"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-8"
                    type="radio"
                    checked
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-8"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-8"
                    type="radio"
                  />
                </div>
              </td>
              <th>8</th>
            </tr>
            <tr>
              <th>9</th>
              <td className="text-4xl">Nuxt.js</td>
              <td>
                <div>
                  <span className="countdown font-mono text-4xl">
                    <span className="[--value:2]"></span>
                  </span>
                  years
                </div>
              </td>
              <td>
                <div className="rating rating-lg">
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-9"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-9"
                    type="radio"
                    checked
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-9"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-9"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-9"
                    type="radio"
                  />
                </div>
              </td>
              <th>9</th>
            </tr>
            <tr>
              <th>10</th>
              <td className="text-4xl">OracleDB</td>
              <td>
                <div>
                  <span className="countdown font-mono text-4xl">
                    <span className="[--value:10]"></span>
                  </span>
                  years
                </div>
              </td>
              <td>
                <div className="rating rating-lg">
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-10"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-10"
                    type="radio"
                    checked
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-10"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-10"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-10"
                    type="radio"
                  />
                </div>
              </td>
              <th>10</th>
            </tr>
            <tr>
              <th>11</th>
              <td className="text-4xl">AWS</td>
              <td>
                <div>
                  <span className="countdown font-mono text-4xl">
                    <span className="[--value:1]"></span>
                  </span>
                  years
                </div>
              </td>
              <td>
                <div className="rating rating-lg">
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-11"
                    type="radio"
                    checked
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-11"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-11"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-11"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-11"
                    type="radio"
                  />
                </div>
              </td>
              <th>11</th>
            </tr>
            <tr>
              <th>12</th>
              <td className="text-4xl">GCP</td>
              <td>
                <div>
                  <span className="countdown font-mono text-4xl">
                    <span className="[--value:2]"></span>
                  </span>
                  years
                </div>
              </td>
              <td>
                <div className="rating rating-lg">
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-12"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-12"
                    type="radio"
                    checked
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-12"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-12"
                    type="radio"
                  />
                  <input
                    className="mask mask-star-2 bg-orange-400"
                    name="rating-12"
                    type="radio"
                  />
                </div>
              </td>
              <th>12</th>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <td>言語・フレームワーク名</td>
              <td>経験年数</td>
              <td>得意レベル</td>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
      {/* クリックしたら、詳細をモーダルで表示する */}
      <div
        className="carousel-item grid h-full grid-cols-1 items-center gap-4 overflow-x-auto bg-primary-content px-4 pb-4 pt-28 md:grid-cols-2 xl:grid-cols-3"
        id="documents"
      >
        <div className="space-y-2 rounded bg-base-content p-4 drop-shadow">
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vR92fIRKyO78_iZ9kqHpJ7hM9-gsMsdbILhLSdxlLKPNcUdxA-xOvGuJ4wfsNGl7g/embed?start=false&loop=true&delayms=3000"
            className="h-80 w-full"
            allowFullScreen={true}
          ></iframe>
          <div className="text-sm">
            「オタクが最新技術を追う LTイベント
            2023夏」に登壇した時のスライドです。
          </div>
        </div>
        <div className="space-y-2 rounded bg-base-content p-4 drop-shadow">
          <iframe
            src="https://speakerdeck.com/player/56c6ad02ad7e4dc5bf47bb28ba8bae12?slide=1"
            title="20230331_とらのあな通販へ導入したオンライン待合室について"
            className="h-80 w-full"
            allowFullScreen={true}
          ></iframe>
          <div className="text-sm">
            「オタクが最新技術を追う LTイベント
            2023春」に登壇した時のスライドです。
          </div>
        </div>
        <div className="space-y-2 rounded bg-base-content p-4 drop-shadow">
          <iframe
            src="https://www.youtube-nocookie.com/embed/4oiqNSfzzdI?si=ytjsiKJ516vVunLp"
            className="h-80 w-full"
            allowFullScreen={true}
          ></iframe>
          <div className="text-sm">
            虎の穴ラボの「TechConference Vol.3」に登壇した時の動画です。
          </div>
        </div>
        <div className="space-y-2 rounded bg-base-content p-4 drop-shadow">
          <iframe
            src="https://www.youtube-nocookie.com/embed/eThggWcCM6s?si=4g5RokpGLa2CoIeW"
            className="h-80 w-full"
            allowFullScreen={true}
          ></iframe>
          <div className="text-sm">
            虎の穴ラボの「TechConference
            Vol.3」で開催したLT大会に登壇した時の動画です。
          </div>
        </div>
        <div className="space-y-2 rounded bg-base-content p-4 drop-shadow">
          <iframe
            src="https://speakerdeck.com/player/488cdc518eab47c28dc6e95c2ce62be7?slide=1"
            title="新規社内システムのモダンなフロントエンド開発について 〜開発の高速化でDXを促進！〜"
            className="h-80 w-full"
            allowFullScreen={true}
          ></iframe>
          <div className="text-sm">
            「TechConference Vol.2」に登壇した時のスライドです。
          </div>
        </div>
        <div className="space-y-2 rounded bg-base-content p-4 drop-shadow">
          <iframe
            src="https://speakerdeck.com/player/ef9a5d3f8ca349298557920a5efc8ea9?slide=1"
            title="Webページの更新を検知するツールを作った話"
            className="h-80 w-full"
            allowFullScreen={true}
          ></iframe>
          <div className="text-sm">
            「TechConference Vol.2」で開催したLT大会に登壇した時のスライドです。
          </div>
        </div>
        <div className="space-y-2 rounded bg-base-content p-4 drop-shadow">
          <iframe
            src="https://www.docswell.com/slide/KNVL2Z/embed"
            className="h-64 w-full"
            allowFullScreen={true}
          ></iframe>
          <div className="text-sm">
            Another
            works様主催の「フロントエンドLT」イベントに登壇した時のスライドです。
          </div>
        </div>
        <div className="space-y-2 rounded bg-base-content p-4 drop-shadow">
          <iframe
            src="https://www.slideshare.net/slideshow/embed_code/key/6pJeVeFLt6DUmv?startSlide=1"
            className="h-80 w-full"
            allowFullScreen={true}
          ></iframe>
          <div className="text-sm">
            「toranoana@LT #27 x
            Serverless（サーバーレス）」に登壇した時のスライドです。
          </div>
        </div>
        <div className="space-y-2 rounded bg-base-content p-4 drop-shadow">
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vSX-hY-np9-zxupsXLRad9VIZGjsxaJIp4CUL3j0BEEa6tGe73AZv5NbOiVieVmCA/embed?start=false&loop=true&delayms=3000"
            className="h-80 w-full"
            allowFullScreen={true}
          ></iframe>
          <div className="text-sm">
            「オタクが最新技術を追う LTイベント
            #25」に登壇した時のスライドです。
          </div>
        </div>
        <div className="space-y-2 rounded bg-base-content p-4 drop-shadow">
          <iframe
            src="https://www.slideshare.net/slideshow/embed_code/key/J8wiVTdY4RLfyS?startSlide=1"
            className="h-80 w-full"
            allowFullScreen={true}
          ></iframe>
          <div className="text-sm">
            「オタクが最新技術を追うLTイベント#24」に登壇した時のスライドです。
          </div>
        </div>
        <div className="space-y-2 rounded bg-base-content p-4 drop-shadow">
          <iframe
            src="https://www.slideshare.net/slideshow/embed_code/key/y66bsaKqF1CiiE?startSlide=1"
            className="h-80 w-full"
            allowFullScreen={true}
          ></iframe>
          <div className="text-sm">
            「オタクが最新技術を追うLTイベント#23」に登壇した時のスライドです。
            <a
              href="https://toranoana-lab.hatenablog.com/entry/2021/03/02/175626"
              className="link"
              target="_blank"
            >
              ブログ版はこちら。
            </a>
          </div>
        </div>
      </div>
    </Main>
  );
}
