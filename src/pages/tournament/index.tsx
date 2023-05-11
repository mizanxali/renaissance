import MyNavbar from "@/components/Navbar";
import Image from "next/image";

export default function tournament() {
  return (
    <>
      <MyNavbar />
      <div className="flex flex-row">
        <div className="w-1/2 p-5 flex items-center justify-center h-screen">
          <Image
            src="/tourney-bracket.png"
            alt="bracket"
            width={589}
            height={275}
          />
        </div>
      </div>
    </>
  );
}
