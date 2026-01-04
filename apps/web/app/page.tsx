import { TextInput } from "@repo/ui/text-input";
import { Button } from "@repo/ui/button";
export default function Home() {
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
        <Button messsage="Join a room"></Button>
      </div>
    </div>
  );
}
