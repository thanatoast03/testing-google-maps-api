import ExtraDataFromMerchantName from "./components/features/ExtraDataFromMerchantName";
import SatelliteImageFromAddress from "./components/features/SatelliteImageFromAddress";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <SatelliteImageFromAddress />
      <ExtraDataFromMerchantName />
    </div>
  );
}
