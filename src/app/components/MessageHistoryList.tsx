import useSWR from "swr";
import axios from "../config/axiosConfig";
import MessageCard from "./MessageCard";

const baseUrl = process.env.NEXT_PUBLIC_CORE_APP_BASE_URL;

const messagesFetcher = (url:string) => axios.get(url).then(res => res.data);

export default function MessageHistoryList(props:any) {

  const customerId = props.customerId;

  const messagesURL = baseUrl+"/message/customer/"+customerId;

  const { data } = useSWR(messagesURL, messagesFetcher);

  return (
    <div className="flex flex-col bg-stone-50 drop-shadow-lg px-12 py-8 rounded-lg gap-y-4">
      <h2 className="text-xl font-bold">Message History</h2>

      <div className="flex flex-col gap-4">
        
        {
          data && data.map((m:any) => {
            return (
              <MessageCard key={m.id} message={m} />
            )
          })
        } 

      </div>
      
    </div>
  );
}