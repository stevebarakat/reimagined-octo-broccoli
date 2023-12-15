import type { ReactNode } from "react";
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

function ChannelButton({ children, ...props }: Props) {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
}

export default ChannelButton;
