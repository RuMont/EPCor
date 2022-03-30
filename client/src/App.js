import { Route, Routes } from "react-router-dom";
import ListDisplay from "./views/ListDisplay";
import Selector from "./views/Selector";

export const routes = [
  {
    path: "/",
    element: <Selector />
  },
  {
    path: "/:id",
    element: <ListDisplay />
  }
]


function App() {
  return (
    <Routes>
      {routes.map((r, i) => {
        return <Route key={r.path + r.element} path={r.path} element={r.element} />
      })}
    </Routes>
  );
}

export default App;
