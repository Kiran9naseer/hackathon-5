import Link from "next/link";
import { RxAvatar } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
export default function Navbar() {
  return (
    <>
      <nav className=" flex flex-row  p-4 w-[90%] ">
        <div className=" flex justify-center    ">
          <div className="flex justify-center items-center gap-10  font-bold ">
            Bandage
          </div>
          <div className="flex justify-center items-center gap-5 mx-10">
            <Link href={"/"}>Home</Link>
            <Link href={"/shop"}>Shop</Link>
            {/* <Link href={"/about"}>About</Link>
            <Link href={"/blog"}>Blog</Link>
            <Link href={"/contact"}>Contact</Link>
            <Link href={"/pages"}>Pages</Link> */}
          </div>

          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <Link href={"/page"}>pages</Link>
              <Link href={"/"}>blog </Link>
              <Link href={"/"}>about </Link>
            </ul>
          </div>
        </div>
        <div className="flex justify-center  content-end min-w-96 ml-[200px]">
          {" "}
        </div>
        <div className="flex justify-center items-center gap-4 text-blue-500 ">
          <Link
            href={"/login"}
            className="flex justify-center items-center gap-6"
          >
            {" "}
            <RxAvatar size={24} />
            Login/Register
          </Link>
          <CiSearch size={24} />
          <FaCartShopping size={24} />
          <CiHeart size={24} />
        </div>
      </nav>
    </>
  );
}
