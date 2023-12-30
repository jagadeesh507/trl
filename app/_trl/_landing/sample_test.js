"use client";
import fetchData from "@/app/_api/fetch";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

function SampleTest() {
  const { data, isLoading } = useQuery({
    queryKey: ["todo"],
    queryFn: () => fetchData("todo"),
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  console.log(data);

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.name}>{todo.name}</li>
      ))}
    </ul>
  );
}

export default SampleTest;
