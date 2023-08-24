export default function createQuiz(questionsArray) {
  let quizWithOptions = questionsArray.map((question) => {
    const incorrectAnswers = questionsArray
      .filter((q) => q !== question)
      .map((q) => q[1]);

    const uniqueIncorrectAnswers = Array.from(new Set(incorrectAnswers));

    const options = [question[1], ...uniqueIncorrectAnswers].slice(0, 3);

    options.sort(() => Math.random() - 0.5);

    return {
      question: question,
      options: options,
      section: question[2],
      image: question[3],
      // Add the "section" property
    };
  });

  quizWithOptions = quizWithOptions.sort(() => Math.random() - 0.5);
  return quizWithOptions;
}

// const questionsArray = [
//   ["q1", "r1", "p1", "m1"],
//   ["q2", "r2", "p2", "m2"],
//   ["q3", "r3", "p3", "m3"],
//   ["q4", "r4", "p4", "m4"],
//   ["q5", "r5", "p5", "m5"],
// ];

// const quizWithOptions = createQuiz(questionsArray);
// console.log(quizWithOptions);
