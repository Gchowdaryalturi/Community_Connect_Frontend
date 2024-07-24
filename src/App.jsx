import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import publicRoutes from "@/publicRoutes";
import protectedRoutes from "@/protectedRoutes";
import ProtectedRoute from "./protectedRoute";
import useAuthStore from './useAuthStore';

function App() {
  const { pathname } = useLocation();
  const { isAuthenticated } = useAuthStore();


  return (
    <>
      {!(pathname === '/sign-in' || pathname === '/sign-up') && (
        <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
          <Navbar routes={{public:publicRoutes,protected:protectedRoutes}} isAuthenticated={isAuthenticated} />
        </div>
      )}
      <Routes>
        {
          !isAuthenticated?
        publicRoutes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        ):
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
        )}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

export default App;
