import Image from 'next/image';
import iconList from '../public/images/icon-list.svg';
import illustrationSignUpDesktop from '../public/images/illustration-sign-up-desktop.svg';
import illustrationSignUpMobile from '../public/images/illustration-sign-up-mobile.svg';

export default function Home() {
  return (
    <main className="lg:flex min-h-screen lg:flex-col max-md:flex-col-reverse items-center lg:justify-between lg:p-24 text-sm lg:h-full">
      <div className="flex max-md:flex-col-reverse max-md:h-dvh lg:p-4 items-center bg-white lg:rounded-3xl">
        <div className="lg:p-9 max-md:p-4 max-w-[400px]">
          <div>
            <h1 className="text-5xl text-[#36384e] font-bold">Stay updated!</h1>
          </div>
          <div className="mt-5">
            <p>Join 60,000+ product managers receiving monthly updates on</p>
          </div>
          <div className="mt-5">
            <ul className="icon-list">
              <li> Product discovery and building what matters</li>
              <li> Measuring to ensure updates are a success </li>
              <li> And much more! </li>
            </ul>
          </div>

          <div className="mt-5">
            <label htmlFor="small-input" className="block mb-2 text-xs">
              <b>Email address</b>
            </label>
            <input
              type="email"
              id="email-address"
              className="border text-sm rounded-lg block w-full p-2.5"
              placeholder="email@company.com"
            />
            <button className="mt-5 bg-[#36384e] hover:bg-[#ff6257] text-white font-bold py-3 px-12 border rounded-lg w-full">
              Subscribe to monthly newsletter
            </button>
          </div>
        </div>
        <div className="flex items-end">
          <Image
            src={illustrationSignUpDesktop}
            alt="illustrationSignUp"
            style={{ objectFit: 'none' }}
          />
        </div>
      </div>
    </main>
  );
}
