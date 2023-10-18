import React from "react";

const Page = () => {
  return <div className="h-screen flex justify-center items-center">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/4 dark:bg-[#2f2f3a]">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-white" htmlFor="email">
        Email
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:text-[#fff]"
        id="email"
        type="text"
        placeholder="Email"
      />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-white" htmlFor="password">
        Password
      </label>
      <input
        className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline dark:text-[#fff]"
        id="password"
        type="password"
        placeholder="********"
      />
      {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
    </div>
    <div className="flex items-center justify-between">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white transition-all font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Register
      </button>
   
    </div>
  </form>
</div>;
};

export default Page;