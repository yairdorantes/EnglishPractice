import { useEffect, useState } from "react";
import CSVReader from "react-csv-reader";
import { Link } from "react-router-dom";

const CreateTest = () => {
  useEffect(() => {
    // createQuiz();
  }, []);

  const handleCSVFile = (data) => {
    console.log(data);
    localStorage.setItem("CSVFile", JSON.stringify(data));
  };

  return (
    <div>
      <div className="text-center mt-32 ">
        <CSVReader onFileLoaded={handleCSVFile} cssClass="" />
        <Link to={"/quiz"}>
          <button className="btn btn-success w-48 mt-10">Quiz</button>
        </Link>
      </div>
    </div>
  );
};

export default CreateTest;
