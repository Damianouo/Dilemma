/* eslint-disable react/prop-types */
import { getCoverImageUrl } from "../../utils/entry";
import EmbedVideo from "./EmbedVideo";
import { twMerge as tm } from "tailwind-merge";

const ContestItem = ({ item, mode = "info", className, titleClass }) => {
  const imageUrl = getCoverImageUrl(item.url);
  return (
    <div
      className={tm(
        "overflow-hidden rounded-md bg-tertiary-500 text-center text-black shadow-md shadow-tertiary-800",
        className,
      )}
    >
      {item ? (
        <>
          {mode === "info" && (
            <img src={imageUrl} className="" alt="contest item image" />
          )}
          {mode === "compete" && <EmbedVideo url={item.url} />}
          <p className={tm("p-2 text-sm sm:text-base", titleClass)}>
            {item.title}
          </p>
        </>
      ) : (
        <p>can not find contest item</p>
      )}
    </div>
  );
};
export default ContestItem;
