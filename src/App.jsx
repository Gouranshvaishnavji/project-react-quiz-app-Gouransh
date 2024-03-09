import HomeComponent from "./components/HomeComponent";
import QuizComponent from "./components/QuizComponent";
import ResultComponent from "./components/ResultComponent";
import { useRoutes, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  // I am using React Router userouter heree 
  const routing = useRoutes([
    { path: "/", element: <HomeComponent /> },
    { path: "/play-quiz", element: <QuizComponent /> },
    { path: "/finish-quiz", element: <ResultComponent /> },
  ]);

  return (
    <Router>
      {routing}
    </Router>
  );
}

export default App;
