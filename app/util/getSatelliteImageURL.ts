export default function getSatelliteImageURL({
  latitude,
  longitude,
}: {
  latitude: string;
  longitude: string;
}) {
  const queryString = new URLSearchParams();
  queryString.append("center", `${latitude},${longitude}`);
  queryString.append("zoom", "20");
  queryString.append("size", "600x600");
  queryString.append("maptype", "satellite");

  return `https://maps.googleapis.com/maps/api/staticmap?${queryString.toString()}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
}
