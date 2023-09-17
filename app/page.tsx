import Image from "next/image";

export const runtime = "edge";

export default function Home() {
  return (
    <main className="carousel carousel-vertical rounded-box h-screen w-screen">
      {/* Hero、区切り区切りに入れていく */}
      <div
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
        className="carousel-item hero min-h-screen"
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      {/* 経験年数テーブル */}
      <div className="carousel-item h-full overflow-x-auto">
        <table className="table table-pin-rows table-pin-cols table-xs">
          <thead>
            <tr>
              <th></th>
              <td>Name</td>
              <td>Job</td>
              <td>company</td>
              <td>location</td>
              <td>Last Login</td>
              <td>Favorite Color</td>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Littel, Schaden and Vandervort</td>
              <td>Canada</td>
              <td>12/16/2020</td>
              <td>Blue</td>
              <th>1</th>
            </tr>
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Zemlak, Daniel and Leannon</td>
              <td>United States</td>
              <td>12/5/2020</td>
              <td>Purple</td>
              <th>2</th>
            </tr>
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Carroll Group</td>
              <td>China</td>
              <td>8/15/2020</td>
              <td>Red</td>
              <th>3</th>
            </tr>
            <tr>
              <th>4</th>
              <td>Marjy Ferencz</td>
              <td>Office Assistant I</td>
              <td>Rowe-Schoen</td>
              <td>Russia</td>
              <td>3/25/2021</td>
              <td>Crimson</td>
              <th>4</th>
            </tr>
            <tr>
              <th>5</th>
              <td>Yancy Tear</td>
              <td>Community Outreach Specialist</td>
              <td>Wyman-Ledner</td>
              <td>Brazil</td>
              <td>5/22/2020</td>
              <td>Indigo</td>
              <th>5</th>
            </tr>
            <tr>
              <th>6</th>
              <td>Irma Vasilik</td>
              <td>Editor</td>
              <td>Wiza, Bins and Emard</td>
              <td>Venezuela</td>
              <td>12/8/2020</td>
              <td>Purple</td>
              <th>6</th>
            </tr>
            <tr>
              <th>7</th>
              <td>Meghann Durtnal</td>
              <td>Staff Accountant IV</td>
              <td>Schuster-Schimmel</td>
              <td>Philippines</td>
              <td>2/17/2021</td>
              <td>Yellow</td>
              <th>7</th>
            </tr>
            <tr>
              <th>8</th>
              <td>Sammy Seston</td>
              <td>Accountant I</td>
              <td>O'Hara, Welch and Keebler</td>
              <td>Indonesia</td>
              <td>5/23/2020</td>
              <td>Crimson</td>
              <th>8</th>
            </tr>
            <tr>
              <th>9</th>
              <td>Lesya Tinham</td>
              <td>Safety Technician IV</td>
              <td>Turner-Kuhlman</td>
              <td>Philippines</td>
              <td>2/21/2021</td>
              <td>Maroon</td>
              <th>9</th>
            </tr>
            <tr>
              <th>10</th>
              <td>Zaneta Tewkesbury</td>
              <td>VP Marketing</td>
              <td>Sauer LLC</td>
              <td>Chad</td>
              <td>6/23/2020</td>
              <td>Green</td>
              <th>10</th>
            </tr>
            <tr>
              <th>11</th>
              <td>Andy Tipple</td>
              <td>Librarian</td>
              <td>Hilpert Group</td>
              <td>Poland</td>
              <td>7/9/2020</td>
              <td>Indigo</td>
              <th>11</th>
            </tr>
            <tr>
              <th>12</th>
              <td>Sophi Biles</td>
              <td>Recruiting Manager</td>
              <td>Gutmann Inc</td>
              <td>Indonesia</td>
              <td>2/12/2021</td>
              <td>Maroon</td>
              <th>12</th>
            </tr>
            <tr>
              <th>13</th>
              <td>Florida Garces</td>
              <td>Web Developer IV</td>
              <td>Gaylord, Pacocha and Baumbach</td>
              <td>Poland</td>
              <td>5/31/2020</td>
              <td>Purple</td>
              <th>13</th>
            </tr>
            <tr>
              <th>14</th>
              <td>Maribeth Popping</td>
              <td>Analyst Programmer</td>
              <td>Deckow-Pouros</td>
              <td>Portugal</td>
              <td>4/27/2021</td>
              <td>Aquamarine</td>
              <th>14</th>
            </tr>
            <tr>
              <th>15</th>
              <td>Moritz Dryburgh</td>
              <td>Dental Hygienist</td>
              <td>Schiller, Cole and Hackett</td>
              <td>Sri Lanka</td>
              <td>8/8/2020</td>
              <td>Crimson</td>
              <th>15</th>
            </tr>
            <tr>
              <th>16</th>
              <td>Reid Semiras</td>
              <td>Teacher</td>
              <td>Sporer, Sipes and Rogahn</td>
              <td>Poland</td>
              <td>7/30/2020</td>
              <td>Green</td>
              <th>16</th>
            </tr>
            <tr>
              <th>17</th>
              <td>Alec Lethby</td>
              <td>Teacher</td>
              <td>Reichel, Glover and Hamill</td>
              <td>China</td>
              <td>2/28/2021</td>
              <td>Khaki</td>
              <th>17</th>
            </tr>
            <tr>
              <th>18</th>
              <td>Aland Wilber</td>
              <td>Quality Control Specialist</td>
              <td>Kshlerin, Rogahn and Swaniawski</td>
              <td>Czech Republic</td>
              <td>9/29/2020</td>
              <td>Purple</td>
              <th>18</th>
            </tr>
            <tr>
              <th>19</th>
              <td>Teddie Duerden</td>
              <td>Staff Accountant III</td>
              <td>Pouros, Ullrich and Windler</td>
              <td>France</td>
              <td>10/27/2020</td>
              <td>Aquamarine</td>
              <th>19</th>
            </tr>
            <tr>
              <th>20</th>
              <td>Lorelei Blackstone</td>
              <td>Data Coordinator</td>
              <td>Witting, Kutch and Greenfelder</td>
              <td>Kazakhstan</td>
              <td>6/3/2020</td>
              <td>Red</td>
              <th>20</th>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <td>Name</td>
              <td>Job</td>
              <td>company</td>
              <td>location</td>
              <td>Last Login</td>
              <td>Favorite Color</td>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
      {/* 職歴ステップ */}
      <ul className="carousel-item steps h-full">
        <li className="step step-info">Fly to moon</li>
        <li className="step step-info">Shrink the moon</li>
        <li className="step step-info">Grab the moon</li>
        <li className="step step-error" data-content="?">
          Sit on toilet
        </li>
      </ul>
      {/* カード、職歴ごとに代表的なこと */}
      <div className="card carousel-item h-full bg-base-100 shadow-xl lg:card-side">
        <figure>
          <img
            src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
      {/* 会話調で簡単に説明 */}
      <div className="carousel-item chat chat-start h-full">
        <div className="avatar chat-image">
          <div className="w-10 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="chat-header">
          Obi-Wan Kenobi
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble">You were the Chosen One!</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      <div className="chat chat-end">
        <div className="avatar chat-image">
          <div className="w-10 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="chat-header">
          Anakin
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble">I hate you!</div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div>
      {/* 縦スクロールコンテンツ、カードの中をスクロールできるように */}
      <div className="carousel-item h-full">
        <div className="carousel carousel-vertical rounded-box h-96">
          <div className="carousel-item h-full">
            <img src="/images/stock/photo-1559703248-dcaaec9fab78.jpg" />
          </div>
          <div className="carousel-item h-full">
            <img src="/images/stock/photo-1565098772267-60af42b81ef2.jpg" />
          </div>
          <div className="carousel-item h-full">
            <img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" />
          </div>
          <div className="carousel-item h-full">
            <img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" />
          </div>
          <div className="carousel-item h-full">
            <img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" />
          </div>
          <div className="carousel-item h-full">
            <img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" />
          </div>
          <div className="carousel-item h-full">
            <img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" />
          </div>
        </div>
      </div>
      {/* クリックしたら、詳細をモーダルで表示する */}
      {/* <button
        onClick={() => document.getElementById("my_modal_5")?.showModal()}
        className="btn"
      >
        open modal
      </button> */}
      <dialog
        className="_modal-open modal modal-bottom sm:modal-middle"
        id="my_modal_5"
      >
        <div className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </main>
  );
}
