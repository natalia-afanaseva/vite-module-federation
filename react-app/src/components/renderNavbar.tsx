import { type Container } from "react-dom/client";
import baseMount from "../utils/bootstrap";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router";

const NavbarWithRouter = () => (
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>
);

export const mount = (rootElement: Container) =>
  baseMount(NavbarWithRouter, rootElement);
