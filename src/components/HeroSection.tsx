import { Button } from "antd";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex justify-center">
      <div
        className="relative w-full flex flex-col items-center justify-center gap-3 sm:gap-5 text-white
        bg-[url('https://cdn-assets-2.alltrails.com/assets/hero-images/hero-logged-out-1-2880w-ff00149db41dbb5f095f57aaa33a5f3ea12420191ca0a0a1f738d52613175e1d.jpg')]
        bg-cover bg-center bg-no-repeat h-[500px] xl:h-[550px] 2xl:h-[650px] px-5"
      >
        <div className="absolute w-full h-full bg-black opacity-20" />

        <h1 className="flex flex-col gap-3 sm:gap-5 font-extrabold text-4xl sm:text-5xl text-center z-10">
          <span>Discover your adventures with AI:</span>
          Pick the right trail for your day
        </h1>

        <p className="sm:text-xl text-center z-10">
          Whether you’re pushing your limits or pushing a stroller, we've got
          you covered.
        </p>

        <Link to="/create-trail">
          <Button>Start Discovering</Button>
        </Link>
      </div>
    </div>
  );
}
