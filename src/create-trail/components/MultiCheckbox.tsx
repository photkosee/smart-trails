import { useState } from "react";

export interface MultiCheckboxProps {
  name: string;
  img?: string;
  setState: (names: string[]) => void;
  state: string[];
}

export default function MultiCheckbox({
  name,
  img,
  setState,
  state,
}: MultiCheckboxProps) {
  const [load, setLoad] = useState(false);

  return (
    <label
      className={`relative size-[120px] md:size-[135px] cursor-pointer
        rounded-xl shadow-md border transition-all ${
          state.includes(name)
            ? "ring-[4px] ring-[#00bf63]"
            : "hover:ring-[4px] hover:ring-[#00bf63]/30"
        }`}
    >
      <img
        src={img}
        className="absolute w-full h-full object-cover rounded-xl"
        onLoad={() => setLoad(true)}
      />

      {!load && (
        <div className="absolute w-full h-full bg-neutral-700 rounded-xl animate-pulse" />
      )}

      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent rounded-xl" />

      <div className="relative w-1/2 h-full text-white font-extrabold z-10">
        <span className="absolute bottom-1 left-3">{name}</span>
      </div>

      <input
        type="checkbox"
        name={name}
        className="peer sr-only"
        onChange={() => {
          if (state.includes(name)) {
            setState(state.filter((i) => i !== name));
          } else {
            setState([...state, name]);
          }
        }}
      />

      <span
        className={`absolute right-0 bottom-0 z-10 opacity-0 transition-all
        ${state.includes(name) && "opacity-100"}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-[#00bf63] stroke-white"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="9" />
          <path d="M9 12l2 2l4 -4" />
        </svg>
      </span>
    </label>
  );
}
