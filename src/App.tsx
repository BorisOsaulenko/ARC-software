import React from "react";
import "./App.css";

function App() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const login = (email: string, password: string) => {
    console.log(email, password);

    fetch(
      `https://sylvan-harmony-394109.nw.r.appspot.com/user?email=${encodeURIComponent(
        email
      )}&password=${encodeURIComponent(password)}`
    ).then(async (res) => console.log(await res.json()));
  };
  return (
    <div className=" p-20 flex flex-col w-1/4">
      <input
        type="text"
        value={email}
        className=" p-3 border-gray-300 border-2"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="Password"
        className=" p-3 border-gray-300 border-2"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={() => login(email, password)}
        className=" border-black border-1 p-5 bg-slate-300"
      >
        Submit
      </button>
    </div>
  );
}

export default App;
