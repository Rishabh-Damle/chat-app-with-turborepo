"use client";
import { TextInput } from "@repo/ui/text-input";
import { Button } from "@repo/ui/button";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <div
      style={{
        height: "100vh",
        width: "100wh",
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <TextInput placeholder="give it a try"></TextInput>
        <button
          onClick={() => {
            router.push("/chat/123");
          }}
          style={{ padding: 7, cursor: "pointer" }}
        >
          join a room
        </button>
      </div>
    </div>
  );
}
