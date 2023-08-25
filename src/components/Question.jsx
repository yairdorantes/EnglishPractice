import { useEffect, useState } from "react";
import crossIcon from "../media/cross.png";
import checkIcon from "../media/check.png";
import { Button } from "@nextui-org/react";
import { useBearStore } from "../context/Global";

const Question = ({ data }) => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [answerSelected, setAnsweSelected] = useState("");
  const { swiper } = useBearStore();
  const handleSelection = (option) => {
    if (!isAnswered) {
      setAnsweSelected(option);
      setIsAnswered(true);
      option === data.question[1] ? setIsCorrect(true) : setIsCorrect(false);
    }
  };
  return (
    <>
      <div className="flex flex-col h-screen items-center pt-10">
        <div className="bg-[#323232] text-center  font-bold  text-white rounded-md w-[90%] md:w-[32rem] p-3 ">
          {data.question[0]}
        </div>
        {data.options.map((option, i) => (
          <div
            key={i}
            onClick={() => {
              handleSelection(option);
            }}
            className={`text-white   
            border-[#555555]
            ${isAnswered && option === data.question[1] && "border-[#5EDD60]"}
            ${isCorrect && answerSelected === option && "border-[#5EDD60]"} 
            ${!isCorrect && answerSelected === option && "border-[#F44336]"}
            
            border-2  flex mt-3 items-center justify-between bg-[#1C1C1C]  rounded-2xl py-4 px-5 w-[90%] md:w-[32rem]`}
          >
            <div>{option}</div>
            <div className="relative">
              {/* {!isAnswered && (
              <div className="w-5 h-5 absolute   border-2 border-[#555555]  rounded-full"></div>
            )} */}

              <div className="absolut">
                <img
                  src={
                    isCorrect || option === data.question[1]
                      ? checkIcon
                      : crossIcon
                  }
                  className={`${
                    answerSelected === option || option === data.question[1]
                      ? "opacity-100"
                      : "opacity-0"
                  } ${isAnswered ? "w-5" : "w-0 "} transition-all`}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
        <div
          className={`fixed ${
            isAnswered ? "-bottom-0" : "-bottom-full"
          }   p-1 max-w-lg transition-all duration-1000 `}
        >
          <div className="relative">
            {/* <div className="bg-white w-"></div> */}
            <img
              className="rounded-lg max-w-xs"
              // src="https://images.idgesg.net/images/article/2017/09/speedometer-fast-drive-100735078-large.jpg?auto=webp&quality=85,70"
              src={data.question[3]}
              alt="meaning"
            />
            <div className="absolute backdrop-blur-sm rounded-b-lg  bg-black bottom-0 w-full bg-opacity-70 py-4 text-center text-white font-bold capitalize">
              {data.question[0]}
            </div>
          </div>
          <div className="mt-3 text-center">
            <Button
              onClick={() => swiper.slideNext()}
              className="w-3/4 h-10 font-bold"
              color="primary"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1em"
                width="1em"
                className="w-7 h-7"
              >
                <path d="M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
