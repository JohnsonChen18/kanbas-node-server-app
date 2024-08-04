import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
        course: String,
        name: String,
        quizType: {type: String, enum: ["GRADED_QUIZ", "PRACTICE_QUIZ", "GRADED_SURVEY", "UNGRADED_SURVEY"], default: "GRADED_QUIZ",},
        points: {type: Number, default: 0,},
        assignmentGroup: {type: String, enum: ["QUIZZES", "EXAMS", "ASSIGNMENTS", "PROJECTS"], default: "QUIZZES",},
        shuffleAnswers: {type: Boolean, default: true,},
        timeLimit: {type: Number, default: 20,},
        multipleAttempts: {type: Boolean, default: false,},
        maxAttempts: {type: Number, default:1},
        showCorrectAnswers: {type: String, enum: ["NEVER","RIGHT_AFTER", "SET_TIME"], default: "NEVER",},
        whenToShowAnswers: {type: Date},
        accessCode: {type: String, default: "",},
        oneQuestionLimit: {type: Boolean, default: true,},
        webCam: {type: Boolean, default: false,},
        lockQuestion: {type: Boolean, default: false,},
        dueDate: {type: Date,},
        availableDate: {type: Date,},
        untilDate: {type: Date,},
        published:{type: Boolean,default:false},
        questionCount:{type:Number, default:0},
        description:{type:String,default:""},
    },
    {collection: "quizzes"}
);
export default quizSchema;