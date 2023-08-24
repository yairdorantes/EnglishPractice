import { useEffect, useState } from "react";
import crossIcon from "../media/cross.png";
import checkIcon from "../media/check.png";
import { Button } from "@nextui-org/react";

const Question = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  useEffect(() => {
    // const req = indexedDB.open("notedb", 1);
    // console.log(req);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center mt-5">
        {/* <div
          className="btn"
          onClick={() => {
            setIsAnswered(!isAnswered);
            setIsCorrect(!isCorrect);
          }}
        >
          btn
        </div> */}
        <div className="bg-[#323232] text-center  font-bold  text-white rounded-md w-[90%] md:w-[32rem] p-3 ">
          Hang out
        </div>
        <div
          className={`text-white    ${
            !isAnswered
              ? "border-[#555555]"
              : isCorrect
              ? "border-[#5EDD60]"
              : "border-[#F44336]"
          } border-2  flex mt-3 items-center justify-between bg-[#1C1C1C]  rounded-2xl py-4 px-5 w-[90%] md:w-[32rem]`}
        >
          <div>Meaning</div>
          <div className="relative">
            {/* {!isAnswered && (
              <div className="w-5 h-5 absolute   border-2 border-[#555555]  rounded-full"></div>
            )} */}

            <div className="absolut">
              <img
                src={isCorrect ? checkIcon : crossIcon}
                className={` ${isAnswered ? "w-5" : "w-0 "} transition-all`}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* -72 bottom */}
        <div
          className={`fixed -bottom-0  p-1 max-w-lg transition-all duration-250 `}
        >
          <div className="relative">
            <img
              className="rounded-lg  "
              src="https://sm.ign.com/ign_es/screenshot/default/analisis-halo-infinite_cjdd.jpg"
              alt=""
            />
            <div className="absolute backdrop-blur-sm  bg-black bottom-0 w-full bg-opacity-70 py-4 text-center text-white font-bold capitalize">
              master
            </div>
          </div>
          <div className="mt-3 text-center">
            <Button className="w-3/4 h-10 font-bold" color="primary">
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
