"use client";

import axios from "axios";
import { useState } from "react";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="border p-2">
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <button
          onClick={() => {
            axios.post("https://localhost:3000/api/v1/signin", {
              username,
              password,
            });
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}
