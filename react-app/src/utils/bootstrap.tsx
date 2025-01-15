import { type Container, createRoot } from "react-dom/client";

const mount = (
  RenderedElement: (args: any) => JSX.Element,
  rootElement: Container,
  props = {}
) => {
  const root = createRoot(rootElement);
  root.render(<RenderedElement {...props} />);
};

export default mount;
