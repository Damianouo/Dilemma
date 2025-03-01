import DilemmaDemo from "../assets/DilemmaDemo.mp4";
import DilemmaDemoFirstFrame from "../assets/DilemmaDemoFirstFrame.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-y-6 p-4 pt-8 md:grid-cols-2 md:gap-x-8 md:gap-y-16 md:p-8 md:pt-30">
      <div>
        <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-6xl">
          Your Stream, Your Tournament
        </h1>
        <p className="mt-4 text-sm text-zinc-200 md:mt-8 md:text-base lg:text-xl">
          Bring your community together with Dilemma! Host fun, interactive tournaments on stream.
          Pick from a wide range of pre-made contests (Music videos, gaming etc.) with youtube video
          entries, or create your own. Let viewers vote and decide the ultimate champion!
        </p>
      </div>
      <video
        className="row-start-2 mx-auto aspect-video w-full max-w-[500px] rounded-md shadow-md shadow-black md:col-start-2 md:row-start-1"
        muted // Automatically mute the video, as autoplaying videos with sound are often blocked
        preload="metadata" // Loads only the metadata (and not the whole file)
        loading="lazy"
        poster={DilemmaDemoFirstFrame} // A still image to show before the video loads
        autoPlay
        loop
      >
        <source src={DilemmaDemo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="col-span-2 mt-4 flex items-center justify-center gap-8">
        <Link
          to="/contests"
          className="btn btn-light text-center text-sm font-bold md:p-4 md:text-xl"
        >
          Browse All Contests
        </Link>
        <Link to="/create" className="btn btn-dark text-center text-sm font-bold md:p-4 md:text-xl">
          Create a Contest Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
