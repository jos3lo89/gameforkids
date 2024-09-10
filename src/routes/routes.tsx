import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { HomePage } from "../pages/HomePage";
import AlphabetGame from "../pages/PruebaPage";
import AuthGuard from "../guards/AuthGuard";
import RoleGuard from "../guards/RoleGuard";
import { AdminPage } from "./pages";
import { Roles } from "../enums/role.enum";
import { Suspense } from "react";
import LoadingPage from "../pages/LoadingPage";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/test",
        element: <AlphabetGame />,
      },
    ],
  },
  {
    // juntar auth guard y role guard en uno solo
    path: "/admin",
    element: (
      <AuthGuard>
        <RoleGuard allowedRoles={[Roles.ADMIN]}>
          <Suspense fallback={<LoadingPage />}>
            <AdminPage />
          </Suspense>
        </RoleGuard>
      </AuthGuard>
    ),
  },
]);

export default router;
