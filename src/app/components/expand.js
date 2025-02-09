import { useState } from "react";

export default function ExpandingMenu({isSkill}) {
  

  return (
    <div className="">
        
        <div
            className={
                `flex flex-wrap gap-3 bg-white p-2 rounded-lg shadow-lg border transition-all duration-300 ease-in-out absolute -bottom-44 lg:-bottom-20 md:-bottom-28 sm:-bottom-32 left-0 *:px-4 *:py-2 *:rounded-lg *:text-center
                ${isSkill ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`
            }

        >
            <p className="bg-yellow-300">JavaScript</p>
            <p className="bg-sky-500 text-white">JQuery</p>
            <p className="bg-blue-500 text-white">TypeScript</p>
            <p className="bg-slate-900 text-sky-400">React</p>
            <p className="bg-purple-700 text-white">Redux</p>
            <p className="bg-black text-white">Next</p>
            <p className="bg-green-500 text-white">Vue</p>
            <p className="bg-slate-800 text-emerald-400">Tailwind</p>
        </div>
    </div>
  );
}

