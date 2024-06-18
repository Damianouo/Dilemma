/* eslint-disable react/prop-types */
import { getCoverImageUrl } from "../../utilityFunc";
import EmbedVideo from "./EmbedVideo";
import { twMerge as tm } from "tailwind-merge";

const ContestItem = ({ item, mode = "info", className, titleClass }) => {
  const imageUrl = getCoverImageUrl(item.url);
  return (
    <div
      className={tm(
        "bg-tertiary-500 shadow-tertiary-800 overflow-hidden rounded-md text-center text-black shadow-md",
        className,
      )}
    >
      {item ? (
        <>
          {mode === "info" && <img src={imageUrl} alt="contest item image" />}
          {mode === "compete" && <EmbedVideo url={item.url} />}
          <p className={tm(" p-2 text-sm sm:text-lg", titleClass)}>
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
