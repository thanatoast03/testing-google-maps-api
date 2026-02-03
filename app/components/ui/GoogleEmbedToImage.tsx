export interface EmbedReturn {
  mapMode: string;
  parameters?: string;
}

export default function GoogleEmbedToImage({
  width,
  height,
  mapMode,
  parameters,
  ...props
}: React.ComponentProps<"iframe"> & { mapMode: string; parameters?: string }) {
  // Maps Embed API URL
  const requestStr = `https://www.google.com/maps/embed/v1/${mapMode}?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}${parameters && `&${parameters}`}`;
  return (
    <div
      style={{
        zIndex: 99999, // Ensure the cover is on top
        background: "transparent",
        pointerEvents: "auto", // Ensures the cover captures events
      }}
    >
      <iframe
        width={width ?? "400"}
        height={height ?? "400"}
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        src={requestStr}
        {...props}
      />
    </div>
  );
}
