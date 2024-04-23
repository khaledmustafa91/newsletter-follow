import Image from 'next/image';
import iconSuccess from '../../public/images/icon-success.svg';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-sm">
      <div className="p-14 items-center bg-white rounded-[35px] max-w-[400px]">
        <div>
          <Image src={iconSuccess} width={50} height={50} alt="icon_success" />
        </div>
        <div className="mt-7">
          <h1 className="text-5xl text-[#36384e] font-bold">
            Thanks for subscribing!
          </h1>
        </div>
        <div className="mt-6">
          <p className="text-xs">
            A confirmation email has been sent to <b> ash@loremcompany.com</b>.
            Please open it and click the button inside to confirm your
            subscription.
          </p>
        </div>
        <div className="mt-7 flex items-center justify-center">
          <button className="bg-[#36384e] hover:bg-[#ff6257] text-white font-bold py-2 px-4 border rounded-md w-72">
            Dismiss Message
          </button>
        </div>
      </div>
    </main>
  );
}
