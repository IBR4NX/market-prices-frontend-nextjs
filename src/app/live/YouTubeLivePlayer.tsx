interface YouTubeLivePlayerProps {
  videoId: string;
}

export default function YouTubeLivePlayer({
  videoId,
}: YouTubeLivePlayerProps) {
  return (
    <div className="w-full overflow-hidden rounded-xl bg-black">
      <div className="aspect-video">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="البث المباشر"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}

