import mongoose from "mongoose";
const questionRecordSchema = new mongoose.Schema({
    questionId: String,
    grade: Number,
    selectedTrueFalse: { type: Boolean},
    selectedOptionNumber: { type: Number},
    fillInBlankAnswers: { type: [String]},
});


const quizRecordSchema = new mongoose.Schema({
        quizId: String,
        userId: String,
        grade: Number,
        startTime: { type: Date},
        endTime: { type: Date},
        questionRecords: {type:[questionRecordSchema]},
    },
    {collection: "quiz-records"}
);

export default quizRecordSchema;