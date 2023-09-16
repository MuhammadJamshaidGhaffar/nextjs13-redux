"use client";
import { RootState } from "@/store/store";
import { useSelector, useDispatch, Provider } from "react-redux";
import Image from "next/image";
import { decrease, increase } from "@/store/counterSlice";

export default function Home() {
  console.log("Hello world");
  const count = useSelector((state: RootState) => state.counterReducer.value);
  const dispatch = useDispatch();
  return (
    <main className="pt-20 px-20">
      <h1 className="text-center"> Counter : {count}</h1>

      <button
        className="bg-black text-white px-2 py-1 mr-7 hover:bg-black/80 hover:scale-105"
        onClick={() => {
          dispatch(increase());
        }}
      >
        Increase
      </button>
      <button
        className="bg-black text-white px-2 py-1 mr-7 hover:bg-black/80 hover:scale-105"
        onClick={() => {
          dispatch(decrease());
        }}
      >
        decrease
      </button>
    </main>
  );
}
