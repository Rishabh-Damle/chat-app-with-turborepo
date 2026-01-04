interface ButtonProps {
  messsage: string;
}

export const Button = ({ messsage }: ButtonProps) => {
  return <button style={{ padding: 5, cursor: "pointer" }}>{messsage}</button>;
};
