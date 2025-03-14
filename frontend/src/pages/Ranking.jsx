import { useLoaderData } from "react-router-dom";
import { getCoverImageUrl } from "../utils/entry";

const Ranking = () => {
  const data = useLoaderData();

  return (
    <div className="bg-primary-900/70 mx-auto max-w-[1000px] rounded-md p-4 sm:p-8">
      <h2 className="text-2xl text-white sm:text-4xl">{data.title}</h2>
      <p className="my-8 text-base sm:text-xl">{data.description}</p>
      <ol className="flex flex-col gap-4 rounded-md text-base">
        {data.entries.map((entry, index) => (
          <li
            key={entry.title}
            className="bg-primary-700 grid grid-cols-[1fr_3fr_4fr] items-center rounded-md shadow-md shadow-black sm:grid-cols-[80px_220px_1fr]"
          >
            <p className="justify-self-center text-xl text-white sm:text-3xl">{index + 1}</p>

            <div className="bg-primary-500 aspect-[4/3]">
              <img src={getCoverImageUrl(entry.url)} alt="entry image" loading="lazy" />
            </div>
            <div className="px-2 sm:px-8">
              <p className="text-sm text-white sm:text-2xl">{entry.title}</p>
              <p className="text-xs sm:text-xl">{entry.winCount} Wins</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Ranking;
