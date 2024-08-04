import model from "./model.js";

export const createQuizRecord = (quizRecord) => {
    delete quizRecord._id
    return model.create(quizRecord);
};
export const findOneQuizRecord = (recordId) => {
    return model.findOne({_id: recordId});
}
export const findQuizRecords =  (userId, quizId) => model.find({quizId: quizId, userId: userId});