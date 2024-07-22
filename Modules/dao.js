import model from "./model.js";
export const findModulesByCourseId = (cid) => model.find({course:cid});
export const createModule = (module) => {
    delete module._id
    return model.create(module);
}
export const deleteModule = (mid) => model.deleteOne({ _id: mid });
export const updateModule = (mid, module) =>  model.updateOne({ _id: mid }, { $set: module });