import { useEffect, useState } from "react";
import createQuiz from "./ListRanItems";
import CSVReader from "react-csv-reader";

const questionsArray = [
  [3.2, 3.3, 3.4],
  [4, 4.1, 4.2],
  [5, 5.1, 5.2],
  [6, 6.1, 6.2],
  [7, 7.1, 7.2],
  [8, 8.1, 8.2],
  [9, 9.1, 9.2],
  [10, 10.1, 10.2],
];

const CreateTest = () => {
  useEffect(() => {
    // createQuiz();
  }, []);

  const [CSVFile, setCSVFile] = useState([]);
  const handleCSVFile = (data) => {
    console.log(data);
    setCSVFile(data);
  };
  const handleFile = () => {
    const items = createQuiz(CSVFile);
    console.log(items);
    localStorage.setItem("CSVFile", JSON.stringify(items));
  };
  const generate = () => {
    const data = JSON.parse(localStorage.getItem("CSVFile"));
    data.map((item, i) => {
      console.log(item);
    });
  };

  return (
    <div>
      <div className="text-center mt-32 ">
        <CSVReader onFileLoaded={handleCSVFile} cssClass="" />
        <button onClick={handleFile} className="btn btn-success w-48 mt-10">
          Send
        </button>
        <button onClick={generate}>gen</button>
      </div>
    </div>
  );
};

export default CreateTest;
