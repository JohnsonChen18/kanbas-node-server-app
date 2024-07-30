import model from "./model.js";

export const createQuestion = (question) => {
    delete question._id
    return model.create(question);
};
export const findQuestionsByQuiz =  (quizId) => model.find({quiz: quizId});
export const updateQuestions = async (questions) => {
    console.log(questions);
    const promises = questions.map(async (question) => {
        try {
            if (question._id) {
                await model.updateOne({ _id: question._id }, { $set: question });
            } else {
                await model.create(question);
            }
        } catch (error) {
            console.error(`Error updating/creating question: ${question._id || 'new question'}`, error);
        }
    });
    await Promise.all(promises);
};
export const deleteQuestion = (questionId) => model.deleteOne({_id: questionId});