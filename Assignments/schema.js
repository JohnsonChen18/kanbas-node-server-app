import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
        title: {type: String, required: true},
        course: {type: String, required: true},
        availableFrom: String,
        availableUntil: String,
        due: String,
        points: Number,
        description: String,
    },
    {collection: "assignments"}
);
export default assignmentSchema;