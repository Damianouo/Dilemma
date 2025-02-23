import { getEmbedUrl } from "../../utils/entry";

const EmbedVideo = ({ url, className }) => {
  const embedUrl = getEmbedUrl(url);
  return (
    <div className={className}>
      <div className="relative w-full pb-[56.25%]">
        <iframe
          className="absolute top-0 left-0 h-full w-full"
          width="560"
          height="315"
          src={embedUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default EmbedVideo;
