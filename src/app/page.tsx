
"use client";

import { useState } from "react";
import axios from "./config/axiosConfig";
import {useRouter} from "next/navigation";

export default function Login() {

  const router = useRouter();

  let [errorMessage, setErrorMessage] = useState<string>("");
  let [email, setEmail] = useState<string>("");
  let [password, setPassword] = useState<string>("");

  async function login() {
    axios.post("/auth/login", {
      username: email,
      password: password
    })
    .then(res => {
      router.push("/messaging/"+res.data);
    })
    .catch(err => {
      err.response ? setErrorMessage(err.response.data) : setErrorMessage(err.message);
    });
  }

  document.addEventListener('keyup', (e) => {
    if(e.key === "Enter" && email && password) {
      login();
    }
  });

  return (
    <main className="flex justify-center">

      <div className="bg-stone-50 rounded-lg px-12 py-8 drop-shadow-lg flex flex-col gap-4 w-full md:max-w-md">
        <h1 className="text-lg font-bold text-center">Sign In with your email</h1>

        <div className="form-field">
          <label htmlFor="username">Email:</label>
          <input type="text" id="username" value={email} onChange={e => setEmail(e.target.value)}/>
        </div>

        <div className="form-field">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </div>

        <div className="text-center">
          <p className="text-red-700 font-bold">{errorMessage}</p>
        </div>

        <button onClick={() => login()} className="bg-bcbgreen hover:bg-bcbyellow px-8 py-3 rounded-lg drop-shadow-md text-2xl font-bold text-stone-50 hover:text-bcbgreen ">Enter</button>

      </div>
      
    </main>
  );
}
