import { maskPhone } from "../functions/phone";
import { maskTimestamp } from "../functions/timestamp";

export default async function MessageCard(props:any) {

  const message = props.message;

  return (
    
    <div className="border-2 rounded-lg px-8 py-4 grid grid-rows-2 grid-cols-3 grid-flow-col" 
      style={message.messageStatus == "SUCCESS" ? {borderColor: "#3C896A"} : 
      (message.messageStatus == "CANCELED" ? {borderColor: "#f59e0b"} : {borderColor: "#2563eb"})}>

      <div className="flex gap-2">
        <p className="font-bold">To:</p>
        <p>{maskPhone(message.recipientPhone)}</p>
      </div>

      <div className="flex gap-2">
        <p className="font-bold">Is Whatsapp:</p>
        <p>{message.Whatsapp ? "Yes" : "No"}</p>
      </div>

      <div className="flex gap-2 font-bold">
        <p>Status:</p>
        <p className={message.messageStatus == "SUCCESS" ? "text-bcbgreen" : 
          (message.messageStatus == "CANCELED" ? "text-amber-500" : "text-blue-600")}>{message.messageStatus}</p>
      </div>

      <div className="flex gap-2">
        <p>{maskTimestamp(message.requestTimestamp.toString())}</p>
      </div>

      <div className="flex gap-2 row-span-2">
        <p className="font-bold">Text:</p>
        <p>{message.messageText}</p>
      </div>
      
    </div>
            
  );
}