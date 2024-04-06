"use client";
import { useDebouncedCallback } from "use-debounce";

export default function Home() {
  const debounceCallback = useDebouncedCallback((e) => {
    console.log(e.target.value);
  }, 1000);
  
  return (
    <div>
      <input onChange={(e) => debounceCallback(e)} defaultValue={"Hello"}/>
    </div>
  );
}
