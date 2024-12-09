import Image from "next/image";

export default function Editor() {
  return (
    <>
      <div className=" grid grid-rows-[auto , 1fr , auto  grid-cols-[auto, 1fr] ">
        <div className="bg-blue-500">
        <Image
            src="/images/landingpage/ep1.png"
            alt="images"
            height={500}
            width={510}
          />
        </div>
          <div className="bg-white ">

          </div>

          <div className="bg-gray-500"></div>
        
      </div>
    </>
  );
}
