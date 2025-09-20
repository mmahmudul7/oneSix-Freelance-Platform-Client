import {Route, Routes} from "react-router";
import Home from "../pages/Home/Home";
import About from "../pages/About";
import MainLayout from "../layouts/MainLayout";
import Job from "../pages/Job/Job";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Job />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
