import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/route";
import { createContext, useContext, useReducer } from "react";
import LoginReducer from "./reducer/LoginReducer";
import cookie from "react-cookies";
export const LoginContext = createContext();
function App() {
  const [user, dispatch] = useReducer(
    LoginReducer,
    cookie.load("user") || null
  );
  return (
    <LoginContext.Provider value={[user, dispatch]}>
      <RouterProvider router={router} />
    </LoginContext.Provider>
  );
}

export default App;
