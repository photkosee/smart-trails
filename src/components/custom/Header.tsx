import { Button } from "../ui/button";

export default function Header() {
  return (
    <div className="py-3 px-5 shadow-sm flex justify-center">
      <div className="w-full flex justify-between max-w-7xl">
        <div className="flex justify-center items-center gap-1 text-2xl font-bold">
          <img src="logo.svg" className="w-10" alt="logo" />
          SmartTrails
        </div>

        <Button>Sign In</Button>
      </div>
    </div>
  );
}
