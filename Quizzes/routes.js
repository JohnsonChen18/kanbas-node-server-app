import * as dao from "./dao.js";
export default function QuizRoutes(app){
    const createQuiz = async (req, res) => {
        const quiz = await dao.createQuiz(req.body);
        res.json(quiz);
    };
    const findOneQuiz = async (req, res) => {
        const {quizId} = req.params;
        const quiz = await dao.findOneQuiz(quizId);
        res.json(quiz);
    }
    const findAllQuizzes= async (req, res) => {
        const quizzes = await dao.findAllQuizzes();
        res.json(quizzes);
    };
    const findQuizByCourse= async (req, res) => {
        const {courseId} = req.params;
        const quizzes = await dao.findQuizByCourse(courseId);
        res.json(quizzes);
    };
    const updateQuiz = async (req, res) => {
        const status = await dao.updateQuiz(req.body);
        res.json(status);
    }
    const deleteQuiz = async (req, res) => {
        const status = await dao.deleteQuiz(req.params.quizId);
        res.json(status);
    };


    app.post("/api/quizzes", createQuiz);
    app.get("/api/quizzes", findAllQuizzes);
    app.get("/api/quizzes/:quizId", findOneQuiz);
    app.get("/api/quizzes/course/:courseId", findQuizByCourse);
    app.put("/api/quizzes", updateQuiz);
    app.delete("/api/quizzes/:quizId", deleteQuiz);
}