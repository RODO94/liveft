import { Link } from "@tanstack/react-router";

export const Index = () => {
  return (
    <div className="p-2">
      <Link to="/password" className="[&.active]:font-bold">
        Enter password
      </Link>
    </div>
  );
};
