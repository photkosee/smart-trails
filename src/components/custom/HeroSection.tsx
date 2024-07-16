import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <div className="flex flex-col justify-center items-center px-5 sm:px-7 pt-16 gap-5 sm:gap-9">
      <h1 className="flex flex-col gap-3 sm:gap-5 font-extrabold text-4xl sm:text-5xl text-center">
        <span className="text-[#00bf63]">
          Discover your adventures with AI:
        </span>
        Pick the right trail for your day
      </h1>

      <p className="sm:text-xl text-neutral-500 text-center">
        Whether you’re pushing your limits or pushing a stroller, we've got you
        covered.
      </p>

      <Link to="/create-trail">
        <Button>Start Discovering</Button>
      </Link>
    </div>
  );
}
