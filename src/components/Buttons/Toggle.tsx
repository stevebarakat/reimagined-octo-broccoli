import { type ReactNode } from "react";
import "./button.css";

type Props = {
  children: ReactNode;
  value: string;
  name?: string;
  type?: string;
  checked: boolean;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
};

function Toggle({ children, value, name, type, checked, onChange }: Props) {
  return (
    <>
      <input
        className="toggle"
        type={type || "checkbox"}
        id={value}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={value}>{children}</label>
    </>
  );
}

export default Toggle;
