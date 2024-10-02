import { maskPhone } from "../functions/phone";

export default async function MessageInfoFormCard(props:any) {

  

  return (
    <div className="flex flex-col bg-stone-50 drop-shadow-lg px-12 py-8 rounded-lg gap-y-4">
      <h2 className="text-xl font-bold">Message information:</h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <p className="font-bold">Recipient Phone:</p>
          <p> </p>
        </div>

        <div className="flex flex-col">
          <p className="font-bold">Is Whatsapp:</p>
          <p> </p>
        </div>

        <div className="flex flex-col">
          <p className="font-bold">Message:</p>
          <p> </p>
        </div>

        <div className="flex flex-col">
          <p className="font-bold">SEND!:</p>
          <p> </p>
        </div>

      </div>
      
      
    </div>
  );
}