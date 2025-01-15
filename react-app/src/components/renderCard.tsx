import { type Container } from "react-dom/client";
import baseMount from "../utils/bootstrap";
import Card from "./Card";

export const mount = (rootElement: Container, props = {}) =>
  baseMount(Card, rootElement, props);
