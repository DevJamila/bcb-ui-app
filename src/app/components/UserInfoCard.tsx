import { maskCNPJ } from "../functions/cnpj";
import { maskCurrency } from "../functions/currency";
import { maskPhone } from "../functions/phone";

export default async function UserInfoCard(props:any) {

  const customer = props.customer;

  return (
    <div className="flex flex-col bg-stone-50 drop-shadow-lg px-12 py-8 rounded-lg gap-y-4">
      <h2 className="text-xl font-bold">Sender information:</h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <p className="font-bold">Name:</p>
          <p>{customer.name}</p>
        </div>

        <div className="flex flex-col">
          <p className="font-bold">Email:</p>
          <p>{customer.email}</p>
        </div>

        <div className="flex flex-col">
          <p className="font-bold">Phone:</p>
          <p>{maskPhone(customer.phone)}</p>
        </div>

        <div className="flex flex-col">
          <p className="font-bold">Plan:</p>
          <p>{customer.customerPlan.planType}</p>
        </div>

        {customer.company&&(
          <div className="flex flex-col">
            <p className="font-bold">Company Name:</p>
            <p>{customer.companyName}</p>
          </div>
        )}
        
        {customer.company&&(
          <div className="flex flex-col">
            <p className="font-bold">Company Document:</p>
            <p>{maskCNPJ(customer.companyDocument)}</p>
          </div>
        )}

        <div className="flex gap-2 col-span-2">
          <p className="font-bold text-lg">Credit Amount:</p>
          <p className="font-bold text-lg">{maskCurrency(customer.customerPlan.amount)}</p>
        </div>
      </div>
      
      
    </div>
  );
}