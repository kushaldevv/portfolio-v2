/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
"use client";

import { useState } from "react";
import SocialIcons from "./SocialIcons";

// import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import { Field, Label, Switch } from '@headlessui/react'

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = {
      name,
      email,
      message,
    };
    console.log(data);
  };

  return (
    <div className="mx-auto flex flex-col px-3 lg:flex lg:max-w-6xl lg:flex-row">
      <div className="mx-auto mb-5 flex min-h-[22rem] w-full max-w-[36rem] flex-col justify-between lg:mb-0">
        <div>
          <p className={`text-xl font-medium text-purple-400`}>Contact</p>
          <h2 className="text-5xl font-bold tracking-tight text-white">
            Let’s chat <br /> and discover{" "}
            <span className="to-accent bg-gradient-to-br from-purple-400 bg-clip-text font-bold text-transparent">
              exciting
            </span>{" "}
            opportunities.
          </h2>
        </div>
        <div className="space-y-5">
          <p className={`text-md flex font-medium text-gray-300`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mr-5 size-6 stroke-purple-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            Kushaldev07@gmail.com
          </p>
          <p className={`text-md flex font-medium text-gray-300`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              // stroke="currentColor"
              className="mr-5 size-6 stroke-purple-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            Maryland
          </p>
        </div>
        <div className="space-x-5">
          <SocialIcons />
        </div>
      </div>
      <div className="mx-auto w-full max-w-[36rem] rounded-2xl bg-gradient-to-br from-[#763CAC50] from-0% via-[#6EBFF422] via-75% to-[#4690D401] to-100% p-10 px-6 backdrop-blur-md backdrop-filter">
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              {/* <label
                htmlFor="name"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Name
              </label> */}
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="block w-full rounded-md border-0 bg-transparent px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-indigo-400 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="sm:col-span-2">
              {/* <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Email
              </label> */}
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="block w-full rounded-md border-0 bg-transparent px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-indigo-400 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="sm:col-span-2">
              {/* <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Message
              </label> */}
              <textarea
                id="message"
                rows={8}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message"
                className="block w-full rounded-md border-0 bg-transparent px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-indigo-400 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <button
            type="submit"
            className="to-accent mt-4 block w-full rounded-md bg-gradient-to-br from-purple-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gradient-to-br hover:from-purple-600 hover:to-purple-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Message
          </button>
        </form>
      </div>
    </div>
  );
}
