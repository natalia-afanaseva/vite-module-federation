import { type Container, createRoot } from "react-dom/client";

const mount = (
  RenderedElement: (args: any) => JSX.Element,
  rootElement: Container
) => {
  const root = createRoot(rootElement);
  root.render(<RenderedElement />);
};

export default mount;
