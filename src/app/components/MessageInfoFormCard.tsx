import { useState } from "react";
import { maskPhone } from "../functions/phone";
import axios from "../config/axiosConfig";

const baseUrl = process.env.NEXT_PUBLIC_CORE_APP_BASE_URL;

export default function MessageInfoFormCard(props:any) {

  const customerId = props.customerId;

  let [recipientPhone, setRecipientPhone] = useState<string>("");
  let [isWhatsapp, setWhatsapp] = useState<any>();
  let [msgText, setMesgText] = useState<string>("");
  let [errorMessage, setErrorMessage] = useState<string>("");

  function onPhoneUpdate(phone:any) {
    let maskedPhone = maskPhone(phone);
    setRecipientPhone(maskedPhone);
  }

  function handleClick() {
    if (recipientPhone.length < 15) {
      setErrorMessage("Phone is invalid (xx) xxxxx-xxxx");
    } else if (recipientPhone && msgText) {
      setErrorMessage("");
      sendMessage();
    } else {
      setErrorMessage("Message and Recipient Phone are required.");
    }
  }
  
  function sendMessage() {

    axios.post("/message", {
      messageSender: {
        customerId: customerId
      },
      messageRecipient: {
        recipientPhone: recipientPhone.replace(/\D/g, "")
      },
      isWhatsapp: isWhatsapp == "on" ? true : false,
      messageText: msgText
    })
    .then(res => {
      res.data;
      window.location.reload();
    })
    .catch(err => {
      console.log(err.response ? err.response.data : err.message);
    });

  }

  return (
    <div className="flex flex-col bg-stone-50 drop-shadow-lg px-12 py-8 rounded-lg gap-y-4">
      <h2 className="text-xl font-bold">Message information:</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-field">
          <label htmlFor="rphone" className="font-bold">Recipient Phone:</label>
          <input type="text" id="rphone" minLength={15} maxLength={15} value={recipientPhone} onChange={e => onPhoneUpdate(e.target.value)}/>
        </div>

        <div className="form-field">
          <label htmlFor="wpp" className="font-bold">Is Whatsapp:</label>
          <input type="checkbox" className="max-w-min" id="wpp" value={isWhatsapp} onChange={e => setWhatsapp(e.target.value)}/>
        </div>

        <div className="form-field col-span-1 md:col-span-2">
          <label htmlFor="msg" className="font-bold">Message:</label>
          <textarea id="msg" rows={4} value={msgText} onChange={e => setMesgText(e.target.value)}></textarea>
        </div>

        <div className="text-center col-span-2">
          <p className="text-red-700 font-bold">{errorMessage}</p>
        </div>

        <div className="flex flex-col col-span-2 items-center">
          <button onClick={() => handleClick()} className="w-64 bg-bcbgreen hover:bg-bcbyellow px-8 py-3 rounded-lg drop-shadow-md text-2xl font-bold text-stone-50 hover:text-bcbgreen ">Send!</button>
        </div>

      </div>
      
      
    </div>
  );
}