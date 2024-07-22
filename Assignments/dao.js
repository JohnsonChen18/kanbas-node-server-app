import model from "./model.js";
export const createAssignment = (assignment) => {
    delete assignment._id
    return model.create(assignment);
}
export const findAssignmentsByCourseId = (cid) => model.find({course:cid});
export const deleteAssignment = (aid) => model.deleteOne({ _id: aid });
export const updateAssignment = (aid, assignment) =>  model.updateOne({ _id: aid }, { $set: assignment });