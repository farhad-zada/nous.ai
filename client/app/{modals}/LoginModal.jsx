"use client"

import { useState } from "react";

const LoginModal = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <button onClick={increment}>{count}</button>
    </div>
  );
};

export default LoginModal;
