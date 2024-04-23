import Image from 'next/image';
import iconList from '../public/images/icon-list.svg';
import illustrationSignUpDesktop from '../public/images/illustration-sign-up-desktop.svg';

export default function Home() {
  return (
    // margin-top: 122px;
    // margin-left: 87px;
    // min-width: 927px;
    // border-radius: 5%;
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-sm">
      <div className="items-center grid grid-cols-2 min-w-[927px] bg-white rounded-[35px] mt-[156px] ml-[87px]">
        {/* margin-left: 80px;
    line-height: 45px; */}
        <div>
          {/* font-size: 56px;
          margin-top: -129px;
          margin-left: 1px; */}
          <h1 className="text-5xl font-bold">Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on</p>
          <ul className="list-image-[url(../public/images/icon-list.svg)]">
            <li>Product discovery and building what matters </li>
            <li> Measuring to ensure updates are a success </li>
            <li> And much more! </li>
          </ul>

          <div>
            <label
              htmlFor="small-input"
              className="block mb-2 text-sm font-medium"
            >
              Email address
            </label>
            <input
              type="email"
              id="email-address"
              className="border text-sm rounded-lg block w-2/3 p-2.5"
              placeholder="email@company.com"
            />
            <button className="bg-[#36384e] hover:bg-[#ff6257] text-white font-bold py-2 px-4 border rounded">
              Subscribe to monthly newsletter
            </button>
          </div>
        </div>
        <div>
          <Image
            src={illustrationSignUpDesktop}
            className="p-[20px] mt-[5px] ml-[21px] w-auto"
            alt="illustrationSignUp"
          />
        </div>
      </div>
    </main>
  );
}
