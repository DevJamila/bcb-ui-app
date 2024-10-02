import MessageHistoryList from "../components/MessageHistoryList";
import MessageInfoFormCard from "../components/MessageInfoFormCard";
import UserInfoCard from "../components/UserInfoCard";

async function getCustomer() {
  const response = await fetch("http://localhost:8080/customers/3");
  return response.json();
}

async function getMessageHistory() {
  const response = await fetch("http://localhost:8080/message/customer/2", { cache: "no-store" });
  return response.json();
}

export default async function Messaging() {

  var customer = await getCustomer();
  var messages = await getMessageHistory();

  return (
    <main className="flex flex-col gap-y-8 w-full">
      <h1 className="text-2xl">Hi
      <span className="font-bold text-bcbgreen"> {customer.name}</span>
      , send your messages quickly and easily. </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <UserInfoCard customer={customer}/>
        <MessageInfoFormCard />
        <div className="col-span-1 lg:col-span-2">
          <MessageHistoryList messages={messages} />
        </div>
      </div>
      
      
    </main>
  );
}
