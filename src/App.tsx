import axios from "axios";
import { useEffect, useState } from "react";

export function App() {
  const [order, setOrder] = useState<Order>();
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await axios.get<Order[]>("http://localhost:8080");
      setOrder(response.data[0])
      // ...
    }
    fetchData()
  }, [])

  return (
    <>
    <h1>Order detail</h1>
    <p>{order?.name}</p>
    <p>{order?.quantity}</p>
    </>
  );
}

interface Order {
  name: string;
  quantity: number;
}