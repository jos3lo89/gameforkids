import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../stores/auth.store";

type Props = PropsWithChildren;

const AuthGuard = ({ children }: Props) => {
  const { isAuth, token } = useAuthStore();

  if (!isAuth && !token) {
    return <Navigate to={"/"} replace />;
  }

  return <>{children}</>;
};
export default AuthGuard;
