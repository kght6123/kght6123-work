import type { Metadata } from "next";

import Image from "next/image";

import "./globals.css";

export const metadata: Metadata = {
  description: "kght6123こと、古賀広隆のポートフィリオです。（2023年9月）",
  title: "Hirotaka Koga's portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {children}
        {/* ナビゲーションバー */}
        <nav className="navbar fixed top-0 bg-base-100/60 transition-transform duration-200 ease-linear peer-data-[scroll-up=false]/body:scale-0">
          {/* TODO: コンテナクエリーでメニューだけ出す */}
          <div className="navbar-start">
            <a className="btn btn-ghost text-xl normal-case">
              kght6123<span className="-mb-1 text-xs">by Hirotaka Koga</span>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {/* TODO リンクで各章に飛ぶ */}
              <li>
                <a>Item 1</a>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="dropdown-end dropdown">
              <label className="btn btn-circle btn-ghost" tabIndex={0}>
                <div className="indicator">
                  <svg
                    className="h-6 w-6 fill-none stroke-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="badge indicator-item badge-sm">8</span>
                </div>
              </label>
              <div
                className="card dropdown-content card-compact z-[1] mt-3 w-52 bg-base-100 shadow"
                tabIndex={0}
              >
                {/* TODO チャット形式で挨拶を書く */}
                <div className="card-body">
                  <span className="text-lg font-bold">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown-end dropdown">
              <label className="avatar btn btn-circle btn-ghost" tabIndex={0}>
                <div className="w-10 rounded-full">
                  <Image
                    src="/profile.PNG"
                    alt="プロフィール画像"
                    height={40}
                    width={40}
                  />
                </div>
              </label>
              <ul
                className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
                tabIndex={0}
              >
                {/* TODO 何を置くか検討中 */}
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* フッター */}
        <footer className="footer footer-center fixed bottom-0 bg-base-100/60 p-10 text-base-content transition-transform duration-200 ease-linear peer-data-[scroll-up=false]/body:scale-0">
          <nav className="grid grid-flow-col gap-4">
            {/* TODO リンクで各章に飛ぶ */}
            <a
              href="https://techbookfest.org/organization/4848038407307264"
              className="link-hover link"
              rel="noopener noreferrer"
              target="_blank"
            >
              技術書典
            </a>
            <a
              href="https://kght6123.booth.pm"
              className="link-hover link"
              rel="noopener noreferrer"
              target="_blank"
            >
              Booth
            </a>
            <a
              href="https://www.amazon.co.jp/s?i=stripbooks&rh=p_27%3A古賀+広隆&s=relevancerank&text=古賀+広隆&ref=dp_byline_sr_book_2"
              className="link-hover link"
              rel="noopener noreferrer"
              target="_blank"
            >
              Amazon
            </a>
            <a
              href="https://kght6123.page"
              className="link-hover link"
              target="_blank"
            >
              Blog
            </a>
          </nav>
          <nav>
            <div className="grid grid-flow-col gap-4">
              <a
                href="https://twitter.com/kght6123"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/jp.ne.sakura.sticky/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  className="fill-base-content stroke-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 96 96"
                  height="24"
                  width="24"
                >
                  <path
                    d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/jp.ne.sakura.sticky/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
          <aside>
            <p>Copyright © 2023 - All right reserved by kght6123.</p>
          </aside>
        </footer>
      </body>
    </html>
  );
}
