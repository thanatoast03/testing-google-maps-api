import FormError from "./components/form/FormError";
import LocationController from "./components/form/LocationController";
import LocationInput from "./components/form/LocationInput";
import SubmitButton from "./components/form/SubmitButton";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <LocationController>
        <div className="flex gap-4">
          <LocationInput
            placeholder="Type address here..."
            className="w-60 flex bg-white text-black rounded p-2"
          />
          <SubmitButton />
        </div>
        <FormError name="name" />
      </LocationController>
    </div>
  );
}
