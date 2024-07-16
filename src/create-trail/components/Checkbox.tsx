export interface CheckboxProps {
  id: number;
  name: string;
  img?: string;
  setState: (id: number) => void;
  state: number;
}

export default function Checkbox({ id, name, setState, state }: CheckboxProps) {
  return (
    <label
      className="relative size-[120px] md:size-[135px] cursor-pointer
      rounded-xl shadow-md border hover:ring hover:ring-[#00bf63]/50
      transition-all"
      key={id}
    >
      <input
        type="checkbox"
        name={name}
        className="peer sr-only"
        onChange={() => setState(id)}
      />
      <div
        className={`flex h-full w-full flex-col items-center justify-around rounded-lg
        py-2 transition-all active:scale-95 ${
          state === id && "ring ring-[#00bf63]"
        }`}
      >
        <div>{name}</div>
      </div>
      <span
        className={`absolute right-0 bottom-0 z-10 opacity-0 transition-all
        ${state === id && "opacity-100"}`}
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
