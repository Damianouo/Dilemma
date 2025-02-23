/* eslint-disable react/prop-types */
import { cn } from "../../utils/cn";
import { getCoverImageUrl } from "../../utils/entry";
import EmbedVideo from "./EmbedVideo";

const ContestItem = ({ item, mode = "info", className, titleClass }) => {
  const imageUrl = getCoverImageUrl(item?.url);
  return (
    <div
      className={cn(
        "from-primary-300 to-primary-400 text-primary-950 shadow-primary-950 overflow-hidden rounded-md bg-linear-to-b text-center shadow-md",
        className,
      )}
    >
      {item ? (
        <>
          {mode === "info" && <img src={imageUrl} alt="contest item image" />}
          {mode === "compete" && <EmbedVideo url={item.url} />}
          <p className={cn("p-2 text-sm sm:text-base", titleClass)}>{item.title}</p>
        </>
      ) : (
        <p>can not find contest item</p>
      )}
    </div>
  );
};
export default ContestItem;
