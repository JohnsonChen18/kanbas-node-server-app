import * as dao from "./dao.js";
export default function ModuleRoutes(app) {
    const findModulesForOneCourse = async (req, res) => {
        const {cid} = req.params;
        const modules = await dao.findModulesByCourseId(cid);
        res.json(modules);
    };
    const createModule = async (req, res) => {
        const {cid} = req.params;
        const module = {...req.body, course: cid }
        const newModule = await dao.createModule(module);
        res.json(newModule);
    };

    const deleteModule = async (req, res) => {
        const {mid} = req.params;
        const status = await dao.deleteModule(mid);
        res.json(status);
    }

    const updateModule = async (req, res) => {
        const {mid} = req.params;
        const newModule = req.body;
        const status = await dao.updateModule(mid, newModule);
        res.json(status);
    }

    app.post("/api/courses/:cid/modules", createModule);
    app.get("/api/courses/:cid/modules", findModulesForOneCourse);
    app.delete("/api/modules/:mid", deleteModule);
    app.put("/api/modules/:mid", updateModule);
}
