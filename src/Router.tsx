import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Experiencia } from "./pages/Experiencia";
import { DefaultLayout } from "./layouts/DefaltLayout";

export function Router() {
  return (
    <Routes >
      <Route path="/" element={<DefaultLayout/>}>
      <Route path="/" element={<Home />} />
      <Route path="/experiencia" element={<Experiencia />} />
      </Route>
    </Routes>
  );
}
