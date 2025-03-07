import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Layout from "./layouts/Layout";
import Drugs from "./pages/Drugs";
import Employeers from "./pages/Employeers";
import Sucursals from "./pages/Sucursals";
import Purchases from "./pages/Purchases";
import Labs from "./pages/Labs";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="admin" element={<Admin />} />
        <Route path="drugs" element={<Drugs />} />
        <Route path="employeers" element={<Employeers />} />
        <Route path="sucursals" element={<Sucursals />} />
        <Route path="purchases" element={<Purchases />} />
        <Route path="labs" element={<Labs />} />
      </Route>
    </Routes>
  );
};

export default App;
