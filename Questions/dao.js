import model from "./model.js";

export const createQuestion = (question) => {
    delete question._id
    return model.create(question);
};
export const findQuestionsByQuiz =  (quizId) => model.find({quiz: quizId});
export const updateQuestions = (questions) => {
    const newQuestions = questions.filter((question) => question._id === undefined);
    const existQuestions = questions.filter((question) => question._id !== undefined);
    newQuestions.forEach((question) => { // creat new questions
        model.create(question);
    })
    existQuestions.forEach((question) => { // update existing ones
        console.log(question);
        model.updateOne({ _id:question._id}, { $set: question});
    })
};
export const updateOneQuestion = async (questionId, question) => {
    // model.updateOne({ _id:questionId}, { $set: question});
    try {
        const result = await model.updateOne({ _id: questionId }, { $set: question });
        console.log(result); // 输出操作结果，检查更新是否成功
    } catch (error) {
        console.error('Update failed:', error); // 处理错误
    }
}
export const deleteQuestion = (questionId) => model.deleteOne({_id: questionId});