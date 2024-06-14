/* eslint-disable react/prop-types */
import { getCoverImageUrl } from "../../utilityFunc";
import EmbedVideo from "./EmbedVideo";

const ContestItemPreview = ({
  item,
  mode = "info",
  bgColor = "bg-zinc-300 dark:bg-zinc-400",
}) => {
  const imageUrl = getCoverImageUrl(item);
  return (
    <div
      className={` rounded-lg p-2 text-center text-black md:p-4
    ${bgColor}`}
    >
      {item ? (
        <>
          {mode === "info" && <img src={imageUrl} alt="item image" />}
          {mode === "compete" && <EmbedVideo url={item.itemUrl} />}
          <p className="mt-4 text-sm sm:text-lg">{item.itemTitle}</p>
        </>
      ) : (
        <p>can not find contest item</p>
      )}
    </div>
  );
};
export default ContestItemPreview;
