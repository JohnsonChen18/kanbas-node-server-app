import * as dao from "./dao.js";
export default function QuestionRoutes(app){
    const createQuestion = async (req, res) => {
        const question = await dao.createQuestion(req.body);
        res.json(question);
    };
    const findQuestionByQuiz= async (req, res) => {
        const {quizId} = req.params;
        const questions = await dao.findQuestionsByQuiz(quizId);
        res.json(questions);
    };
    const updateQuestions = async (req, res) => {
        const status = await dao.updateQuestions(req.body);
        res.json(status);
    }
    const updateOneQuestion = async (req, res) => {
        console.log("called");
        const {questionId} = req.params;
        const status = await dao.updateOneQuestion(questionId, req.body);
        res.json(status);
    }



    app.post("/api/questions", createQuestion);
    app.get("/api/questions/quiz/:quizId", findQuestionByQuiz);
    app.put("/api/questions", updateQuestions);
    app.put("/api/questions/:questionId", updateOneQuestion);
}