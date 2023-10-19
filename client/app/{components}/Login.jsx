import Link from "next/link";

const Login = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://127.0.0.1:3000/api/v1/u/login", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           email: "farhad.szd@gmail.com",
  //           password: "admin123",
  //         }),
  //       });

  //       if (!response.ok) {
  //         throw new Error("HTTP isteği başarısız.");
  //       }

  //       const data = await response.json();
  //       console.log(data);
  //     } catch (error) {
  //       console.error("Hata oluştu:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/4 dark:bg-[#2f2f3a]">
        <h1 className="text-2xl text-center my-4 font-extrabold dark:text-white">
          SIGN IN
        </h1>
        <div class="relative mb-7" data-te-input-wrapper-init>
          <input
            type="text"
            class="peer border  rounded block min-h-[auto] w-full  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInput1"
            placeholder="Email"
          />
          <label
            for="exampleFormControlInput1"
            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-700 transition-all duration-200 ease-out peer-focus:-translate-y-[1.1rem] peer-focus:scale-[0.8] peer-focus:text-[20px]  peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-focus:bg-white peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-[20px] dark:peer-focus:bg-[#2f2f3a]"
          >
            Email
          </label>
        </div>
        <div class="relative mb-[40px]" data-te-input-wrapper-init>
          <input
            type="password"
            class="peer border  rounded block min-h-[auto] w-full  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInput1"
            placeholder="Password"
          />
          <label
            for="exampleFormControlInput1"
            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-700 transition-all duration-200 ease-out peer-focus:-translate-y-[1.1rem] peer-focus:scale-[0.8] peer-focus:text-[20px]  peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-focus:bg-white peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-[20px] dark:peer-focus:bg-[#2f2f3a]"
          >
            Password
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white transition-all font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          <Link
            className="inline-block align-baseline font-bold text-sm transition-all text-blue-500 hover:text-blue-800"
            href="/register"
          >
            No account? Create one
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
