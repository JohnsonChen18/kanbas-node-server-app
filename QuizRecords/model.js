import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("QuizRecordsModel", schema);
export default model;