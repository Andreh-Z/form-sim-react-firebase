import { createBrowserRouter } from "react-router-dom";
import EncuestaForm from "../Components/EncuestaForm";
import ResultsForm from "../Components/ResultsForm";
import Done from "../Components/Done";
import Landing from "../Components/Landing";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <EncuestaForm />,
  },
  { path: "/results", element: <ResultsForm /> },
  {
    path: "/done",
    element: <Done />,
  },
  {
    path: "/",
    element: <Landing />,
  },
]);

export default router;
