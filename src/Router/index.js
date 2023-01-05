import { createBrowserRouter } from "react-router-dom";
import EncuestaForm from "../Components/EncuestaForm";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <EncuestaForm />,
  },
]);

export default router;
