import { EmbedReturn } from "../GoogleEmbedToImage";
interface PlaceProps {
  q: string;
  center?: string;
  zoom?: string;
  maptype?: "roadmap" | "satellite";
  language?: string;
}

export default function place(props: PlaceProps): EmbedReturn {
  console.log(props.center);
  const propsString = new URLSearchParams({ ...props }).toString();
  return { mapMode: "place", parameters: propsString };
}
