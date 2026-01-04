interface PropTypes {
  placeholder: string;
}
export function TextInput({ placeholder }: PropTypes) {
  return (
    <input
      type="text"
      style={{ padding: 10, margin: 10, border: 1, borderBlockColor: "black" }}
      placeholder={placeholder}
    />
  );
}
