import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import Home from "../pages/Home";
import PostDetail from "../pages/PostDetail";
import WorkDetail from "../pages/WorkDetail";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login";
import AdminLayout from "../layout/AdminLayout";
import AdminPage from "../pages/Admin";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/work/:id" element={<WorkDetail />} />
      </Route>
      <Route path="/login" element={<LoginLayout />}>
        <Route index element={<Login />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminPage />} />
      </Route>
    </>
  )
);
