import Image from "next/image";

async function getCustomers() {
  const response = await fetch("http://localhost:8080/customers");
  return response.json();
}

export default async function Messaging() {

  const customers = await getCustomers();

  return (
    <main>
      <h1>Hello Messaging Page</h1>
      
    </main>
  );
}
