import LocationController from "../form/LocationController";
import LocationInput from "../form/LocationInput";
import SubmitButton from "../form/SubmitButton";
import FormError from "../form/FormError";

export default function SatelliteImageFromAddress() {
  return (
    <>
      <h1 className="text-xl p-4">Find Satellite Image From Address</h1>
      <LocationController>
        <div className="flex justify-center gap-4">
          <LocationInput
            placeholder="Type address here..."
            className="w-60 flex bg-white text-black rounded p-2"
          />
          <SubmitButton />
        </div>
        <FormError name="name" />
      </LocationController>
    </>
  );
}
