import { TextInput } from "@repo/ui/text-input";

export default function Chat() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100wh",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <div>child 1</div>
      <div style={{ width: "100wh" }}>
        <TextInput placeholder="Text here"></TextInput>
      </div>
    </div>
  );
}
