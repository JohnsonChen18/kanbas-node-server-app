import model from "./model.js";
export const createQuiz = (quiz) => {
    delete quiz._id
    return model.create(quiz);
}
export const findAllQuizzes = () => model.find();
export const findQuizByCourse = (courseId) => model.find({course: courseId});
export const updateQuiz = (quiz) =>  model.updateOne({ _id: quiz._id }, { $set: quiz });
export const deleteQuiz = (quizId) => model.deleteOne({ _id: quizId });