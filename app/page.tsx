import FormError from "./components/form/FormError";
import LocationController from "./components/form/LocationController";
import LocationInput from "./components/form/LocationInput";
import SubmitButton from "./components/form/SubmitButton";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
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
    </div>
  );
}
