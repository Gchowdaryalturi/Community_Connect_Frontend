import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import publicRoutes from "@/publicRoutes";
import adminRoutes from "@/adminRoutes"
import protectedRoutes from "@/protectedRoutes";
import ProtectedRoute from "./protectedRoute";
import useAuthStore from './useAuthStore';
import CampaignDetails from "./pages/details";

function App() {
  const { pathname } = useLocation();
  const { isAuthenticated, role } = useAuthStore();
  return (
    <>
      {!(pathname === '/sign-in' || pathname === '/sign-up' || pathname === '/create-campaign' || pathname.includes('/details')) && (
        <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
          <Navbar routes={{ public: publicRoutes, protected: protectedRoutes, admin: adminRoutes }} isAuthenticated={isAuthenticated} role={role} />
        </div>
      )}
      <Routes>
        {
          !isAuthenticated ?
            publicRoutes.map(
              ({ path, element }, key) =>
                element && <Route key={key} exact path={path} element={element} />
            ) :
            isAuthenticated && role == "admin" ?
              adminRoutes.map(
                ({ path, element }, key) =>
                  element && (
                    <Route
                      key={key}
                      exact
                      path={path}
                      element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                          {element}
                        </ProtectedRoute>
                      }
                    />
                  )
              ) :
              protectedRoutes.map(
                ({ path, element }, key) =>
                  element && (
                    <Route
                      key={key}
                      exact
                      path={path}
                      element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                          {element}
                        </ProtectedRoute>
                      }
                    />
                  )
              )
        }
        <Route path="/details/:id" element={<CampaignDetails />} /> {/* New Route */}


        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

export default App;
