"use client"

import useSWR from "swr";
import MessageHistoryList from "../../components/MessageHistoryList";
import MessageInfoFormCard from "../../components/MessageInfoFormCard";
import UserInfoCard from "../../components/UserInfoCard";
import axios from "../../config/axiosConfig";
import { useParams } from "next/navigation";

const baseUrl = process.env.NEXT_PUBLIC_CORE_APP_BASE_URL;

const customerFetcher = (url:string) => axios.get(url).then(res => res.data);

export default function Messaging() {
  const { id } = useParams();

  const customerURL = baseUrl+"/customers/"+id;

  const { data } = useSWR(customerURL, customerFetcher);

  return (
    <main className="flex flex-col gap-y-8 w-full">
      <h1 className="text-2xl text-center md:text-left">Hi
      <span className="font-bold text-bcbgreen"> {data ? data.name : ""}</span>
      , send your messages quickly and easily. </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        { data && <UserInfoCard customer={data}/> }
        
        { data && <MessageInfoFormCard customerId={data.id}/> }

        { data && 
          <div className="col-span-1 lg:col-span-2">
            <MessageHistoryList customerId={data.id} />
          </div> 
        }
        
      </div>
      
      
    </main>
  );
}
