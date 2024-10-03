import { maskPhone } from "../functions/phone";
import { maskTimestamp } from "../functions/timestamp";

export default function MessageCard(props:any) {

  const message = props.message;

  return (
    
    <div className="border-2 rounded-lg px-8 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" 
      style={message.messageStatus == "SUCCESS" ? {borderColor: "#3C896A"} : 
      (message.messageStatus == "CANCELED" ? {borderColor: "#f59e0b"} : {borderColor: "#2563eb"})}>

      <div className="grid-cols-1 grid-rows-2 gap-2">
        <div className="flex gap-2">
          <p className="font-bold">To:</p>
          <p>{maskPhone(message.recipientPhone)}</p>
        </div>

        <div className="flex gap-2">
          <p className="font-bold">Is Whatsapp:</p>
          <p>{message.Whatsapp ? "Yes" : "No"}</p>
        </div>
      </div>

      <div className="grid-cols-1 grid-rows-2 gap-2">
        <div className="flex gap-2 font-bold">
          <p>Status:</p>
          <p className={message.messageStatus == "SUCCESS" ? "text-bcbgreen" : 
            (message.messageStatus == "CANCELED" ? "text-amber-500" : "text-blue-600")}>{message.messageStatus}</p>
        </div>

        <div className="flex gap-2">
          <p>{maskTimestamp(message.requestTimestamp)}</p>
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 lg:col-span-1 grid-rows-2">
        <div className="flex gap-2 row-span-2">
          <p className="font-bold">Text:</p>
          <div className="max-h-12 w-full overflow-y-scroll">
            <p>{message.messageText}</p>
          </div>
          
        </div>
      </div>
      
    </div>
            
  );
}