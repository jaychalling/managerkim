import { ImageIcon } from "lucide-react";

export default function ScreenshotPlaceholder({
  alt,
  caption,
}: {
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="my-6">
      <div className="bg-subtle border-2 border-dashed border-border-default rounded-xl flex flex-col items-center justify-center py-12 px-6 text-center">
        <ImageIcon size={32} className="text-caption mb-3" />
        <p className="text-sm font-medium text-body">{alt}</p>
        <p className="text-xs text-caption mt-1">스크린샷 준비 중</p>
      </div>
      {caption && (
        <figcaption className="text-center text-xs text-caption mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
