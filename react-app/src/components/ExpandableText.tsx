import { ReactNode } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

export const ExpandableText = ({ maxChars = 100, children }: Props) => {
  return (
    <div>
      {children}
      <button>More</button>
    </div>
  );
};

export default ExpandableText;
