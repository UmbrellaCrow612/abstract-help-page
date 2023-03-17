/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import { FiFeather } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";

const options: { imgSrc: string; title: string; para: string }[] = [
  {
    imgSrc: "/images/sax.png",
    title: "Using Abstract",
    para: "Abstract lets you manage, version, and document your designs in one place.",
  },
  {
    imgSrc: "/images/people.png",
    title: "Manage your account",
    para: "Configure your account settings, such as your email, profile details, and password.",
  },
  {
    imgSrc: "/images/puzz.png",
    title: "Manage organizations, teams, and projects",
    para: "Use Abstract organizations, teams, and projects to organize your people and your work.",
  },
  {
    imgSrc: "/images/doll.png",
    title: "Manage billing",
    para: "Change subscriptions and payment details.",
  },
  {
    imgSrc: "/images/key.png",
    title: "Authenticate to Abstract",
    para: "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
  },
  {
    imgSrc: "/images/chat.png",
    title: "Abstract support",
    para: "Get in touch with a human.",
  },
];

export default function Page() {
  return (
    <>
      <div className="bg-black h-24 text-white">
        <header className="max-w-screen-xl px-6 mx-auto h-full flex items-center justify-between">
          <div className="flex gap-3">
            <a className="flex gap-2 items-center group" href="/">
              <FiFeather className="text-xl" />
              <span className="text-2xl font-bold group-hover:text-slate-200">
                Abstract
              </span>
            </a>
            <a className="border-l-2 text-2xl pl-2 hover:underline" href="/">
              Help center
            </a>
          </div>

          <div className="flex gap-5">
            <button className="border-2 rounded-xl text-2xl px-4 py-2 font-light tracking-widest">
              Submit a request
            </button>
            <button className="text-2xl font-base px-8 py-2 bg-[#4D5ED5] rounded-xl">
              Sign in
            </button>
          </div>
        </header>
      </div>

      <div className="h-96 bg-[#DADBF1] flex items-center justify-center flex-col gap-6">
        <h1 className="font-semibold text-7xl">How can we help?</h1>
        <div className="h-16 w-full max-w-2xl relative">
          <input
            type="text"
            className="w-full  h-full border border-black rounded-md px-4 text-xl"
            placeholder="Search"
            required
          />
          <AiOutlineArrowRight className="absolute right-4 top-5 text-2xl" />
        </div>
      </div>

      <div className="py-40 max-w-screen-xl px-6 mx-auto h-auto lg:h-[70rem] grid grid-cols-1 grid-rows-6 lg:grid-cols-2 lg:grid-rows-3">
        {options.map((item) => (
          <div className="flex px-3 gap-6" key={item.imgSrc}>
            <img src={item.imgSrc} alt="" className="w-24 h-24 object-cover" />

            <div className="flex flex-col gap-6">
              <p className="font-bold text-2xl">{item.title}</p>
              <p className="font-light text-gray-600 text-2xl break-words">
                {item.para}
              </p>
              <a
                href="/"
                className="text-blue-500 flex gap-3 items-center hover:underline text-xl"
              >
                Learn more{" "}
                <span>
                  <AiOutlineArrowRight />
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
