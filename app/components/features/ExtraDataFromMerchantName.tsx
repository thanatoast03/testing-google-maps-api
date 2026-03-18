import FormError from "../form/FormError";
import NameController from "../form/NameController";
import NameInput from "../form/NameInput";
import SubmitButton from "../form/SubmitButton";

export default function ExtraDataFromMerchantName() {
  return (
    <>
      <h1 className="text-xl p-4">Retrieve Extra Merchant Data From Name</h1>
      <NameController>
        <div className="flex justify-center gap-4">
          <NameInput
            placeholder="Type name here..."
            className="w-60 flex bg-white text-black rounded p-2"
          />
          <SubmitButton />
        </div>
        <FormError name="name" />
      </NameController>
    </>
  );
}
