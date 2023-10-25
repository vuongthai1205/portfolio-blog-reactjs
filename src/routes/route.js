
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import Home from "../pages/Home";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  element={<DefaultLayout />}>
      <Route index element={<Home />} />
    </Route>
  )
);