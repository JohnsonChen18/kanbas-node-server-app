import model from "./model.js";
export const createQuiz = (quiz) => {
    delete quiz._id
    return model.create(quiz);
}