import { createBrowserRouter } from "react-router-dom";
import EncuestaForm from "../Components/EncuestaForm";
import ResultsForm from "../Components/ResultsForm";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <EncuestaForm />,
  },
  { path: "/results", element: <ResultsForm /> },
]);

export default router;
