import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
        quizType: {
            type: String,
            enum: ["GRADED_QUIZ", "PRACTICE_QUIZ", "GRADED_SURVEY", "UNGRADED_SURVEY"],
            default: "GRADED_QUIZ",
        },
        points: Number,
        assignmentGroup: {
            type: String,
            enum: ["QUIZZES", "EXAMS", "ASSIGNMENTS", "PROJECTS"],
            default: "QUIZZES",
        },
        shuffleAnswers: {type: Boolean, default: true,},
        timeLimit: {type: Number, default: 20,},
        multipleAttempts: {type: Boolean, default: false,},
        maxAttempts: {type: Number,},
        showCorrectAnswers: {type: Boolean,},
        accessCode: {type: String, default: "",},
        oneQuestionLimit: {type: Boolean, default: true,},
        webCam: {type: Boolean, default: false,},
        lockQuestion: {type: Boolean, default: false,},
        dueDate: {type: Date,},
        availableDate: {type: Date,},
        untilDate: {type: Date,},
    },
    {collection: "quizzes"}
);
export default quizSchema;