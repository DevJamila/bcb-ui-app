import MessageCard from "./MessageCard";

export default async function MessageHistoryList(props:any) {

  const messages = props.messages;

  return (
    <div className="flex flex-col bg-stone-50 drop-shadow-lg px-12 py-8 rounded-lg gap-y-4">
      <h2 className="text-xl font-bold">Message History</h2>

      <div className="flex flex-col gap-4">
        
        {
          messages.reverse().map((m:any) => {
            return (
              <MessageCard message={m} />
            )
          })
        }

      </div>
      
    </div>
  );
}