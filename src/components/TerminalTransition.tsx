import { useNavigate } from "react-router-dom";

interface TerminalTransitionProps {
  children: React.ReactNode;
  to: string;
}

export const TerminalTransition = ({ children, to }: TerminalTransitionProps) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Navigate to transition page first
    navigate("/terminal-transition");
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      {children}
    </div>
  );
};

