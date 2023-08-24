import { Route, Routes } from "react-router-dom";
import CreateTest from "../components/CreateTest";
import Quiz from "../components/Quiz";

const MyRouter = () => {
  return (
    <Routes>
      <Route path="main" element={<CreateTest />} />
      <Route path="quiz" element={<Quiz />} />
    </Routes>
  );
};

export default MyRouter;
