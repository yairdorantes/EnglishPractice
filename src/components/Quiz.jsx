import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Question from "./Question";
import { useBearStore } from "../context/Global";
import createQuiz from "./ListRanItems";
const Quiz = () => {
  const { setSwiper } = useBearStore();
  let [quizData, setQuizData] = useState([]);
  useEffect(() => {
    const storagedData = localStorage.getItem("CSVFile");
    if (storagedData) {
      const quiz = createQuiz(JSON.parse(storagedData));
      setQuizData(quiz);
      console.log(quiz);
    }
  }, []);

  return (
    <div className="">
      <Swiper onSwiper={(e) => setSwiper(e)} allowTouchMove={false}>
        {quizData &&
          quizData.map((item, i) => (
            <SwiperSlide key={i}>
              <Question data={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Quiz;
