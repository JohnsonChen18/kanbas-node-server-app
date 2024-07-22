import * as dao from "./dao.js";
export default function AssignmentRoutes(app){
    const findAssignmentsByCourseId = async (req, res) => {
        const {cid} = req.params;
        const assignments = await dao.findAssignmentsByCourseId(cid);
        res.json(assignments);
    };
    const createAssignment = async (req, res) => {
        const {cid} = req.params;
        const assignment = {
            ...req.body,
            course: cid,
        };
        const newAssignment = await dao.createAssignment(assignment);
        res.json(newAssignment);
    };
    const deleteAssignment = async (req, res) => {
        const { aid } = req.params;
        const status = await dao.deleteAssignment(aid);
        res.json(status);
    }
    const updateAssignment = async (req, res) => {
        const {aid} = req.params;
        const status = await dao.updateAssignment(aid, req.body);
        res.json(status);
    }

    app.put("/api/assignments/:aid", updateAssignment);
    app.delete("/api/assignments/:aid", deleteAssignment);
    app.post("/api/assignments/:cid", createAssignment);
    app.get("/api/assignments/:cid", findAssignmentsByCourseId);
}