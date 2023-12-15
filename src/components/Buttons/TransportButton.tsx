import { type ReactNode } from "react";
import "./button.css";

type Props = {
  children: ReactNode;
  id?: string;
  name?: string;
  title?: string;
  disabled?: boolean;
  className?: string;
  onClick?:
    | ((e: React.FormEvent<HTMLButtonElement>) => void)
    | ((e: React.MouseEvent<HTMLButtonElement>) => void);
};

function TransportButton({ children, ...props }: Props) {
  return (
    <button className="transport-button" {...props}>
      {children}
    </button>
  );
}

export default TransportButton;
