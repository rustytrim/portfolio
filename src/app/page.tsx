import { DESCRIPTION } from "@/constants";

export default function Home() {
  return (
    <main className="items-center w-full !pt-[10rem] sm:!pt-[15rem]">
      <div className="grid sm:grid-cols-2 grid-rows-2 gap-x-[20rem]">
        <div className="w-full flex flex-col h-fit">
          <h1>Hello {"I'm"} Rusty!</h1>
          <h2 className="text-blue-400">Self Taught Developer</h2>
          <p>{DESCRIPTION.split('.').map((str, index) => {
            return <span className="block" key={index}>{str}</span>
          })}</p>
          <div className="flex gap-4 mt-2.5">
            <button id="border">My Projects</button>
            <button id="bg">Skills</button>
          </div>
        </div>
        <div className="w-[20rem] h-[20rem] rounded-full bg-[rgba(0,0,0,0.1)] flex justify-center items-center">Image Here</div>
      </div>
    </main>
  );
}
