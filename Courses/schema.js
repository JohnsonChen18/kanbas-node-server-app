import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
        number: { type: String},
        name: { type: String},
        startDate:String,
        endDate:String,
        department: String,
        credits: Number,
        description: String,
        imgName: { type: String },
    },
    { collection: "courses" }
);
export default courseSchema;