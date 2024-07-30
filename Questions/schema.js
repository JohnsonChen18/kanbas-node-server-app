import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
        quiz: String,
        title: String,
        points: {type: Number, default: 0,},
        number: {type: Number, required: true},
        questionType: {type: String, enum: ["TRUE_FALSE", "MULTIPLE_CHOICE", "FILL_IN_BLANK"], default: "MULTIPLE_CHOICE",},
        text: {type: String, required: true},
        options: [{
            number: {type: Number},
            text: { type: String},
            deleted: { type: Boolean},
        }],
        nextOptionNumber: {type: Number, default: 1},
        correctOptionNumber: {type: Number, default: 1},
        is_correct: {type: Boolean},
        correct_answers: [String],
        deleted: {type: Boolean, default:false},
    },
    {collection: "questions"}
);
export default questionSchema;