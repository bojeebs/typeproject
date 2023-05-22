import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary alert-dismissible">{children}</div>;
  <button type="button" className="btn-close "data-bs-dismiss
};

export default Alert;
