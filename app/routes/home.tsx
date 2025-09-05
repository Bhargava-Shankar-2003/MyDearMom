import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Heart from "../../public/heart.svg";
import Card from "../components/card";
import Year from "~/components/year";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main className="font-white">
      {/* Header  */}
      <div className="flex flex-row align-middle justify-center items-center gap-2.5 w-full mb-18">
        <div className="text-3xl font-semibold">MyDearMom</div>
        <img src={Heart} className="w-8 h-8"></img>
      </div>

      {/* preface  */}
      <div className="flex flex-row justify-center mb-25">
        <div className="w-[48rem] align-middle text-center text-2xl italic font-extralight">
          <span className="text-3xl font-extrabold italic mr-1">"</span>I
          dedicate this small piece of the internet to my late mom. In an
          attempt to document my life and pass on the memories I will be writing
          important events of my life here that I wish I shared with my mom.
          <span className="text-3xl font-extrabold italic">"</span>
        </div>
      </div>

      <div className="w-full flex flex-row justify-center cursor-pointer">
        <div className="flex flex-row gap-20 justify-center w-[65%]">
          <Year />
          <Card title="Hi Mom," target="/post/one-year"></Card>
        </div>
      </div>
    </main>
  );
}
