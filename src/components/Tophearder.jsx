// import { MdOutlinePhone } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { GrYoutube } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Topheader() {
  return (
    <>
      <div className="p-1   bg-blue-950 text-white flex justify-between md:flex hidden">
        <div className="mx-10  m-2">
          {" "}
          <div className="  flex gap-2 items-center">
            <IoCallOutline /> (255)555-0118
            <div className="mx-4 flex gap-2 items-center">
              {" "}
              <BsEnvelopeFill /> michelle.rivera@example.com
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center justify-centers">
          {" "}
          Follow Us and get a chance to win 80% off{" "}
        </div>
        <div className="flex gap-2 items-center mx-10">
          {" "}
          Follow Us : <FaInstagram />
          <GrYoutube />
          <FaFacebook />
          <FaTwitter />
        </div>
      </div>
    </>
  );
}
