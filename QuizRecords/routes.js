import * as dao from "./dao.js";

export default function QuizRecordsRoutes(app) {
    const createQuizRecord = async (req, res) => {
        const quizRecord = req.body.quizRecord;
        const questions = req.body.questions;
        // console.log(quizRecord);
        const grade = questions.reduce((total, question) => {
            const questionRecord = quizRecord.questionRecords.find((record) => record.questionId === question._id);
            if (question.questionType === "TRUE_FALSE") {
                console.log(questionRecord.selectedTrueFalse);
                console.log(question.is_correct);
                console.log(typeof questionRecord.selectedTrueFalse);
                console.log(typeof question.is_correct);
                if (questionRecord.selectedTrueFalse === undefined) {
                    questionRecord.grade = 0;
                    return total;
                }
                if (questionRecord.selectedTrueFalse === question.is_correct) {
                    questionRecord.grade = question.points;
                    return total + question.points;
                } else {
                    questionRecord.grade = 0;
                    return total;
                }
            }
            if (question.questionType === "MULTIPLE_CHOICE") {
                if (!questionRecord.selectedOptionNumber) {
                    questionRecord.grade = 0;
                    return total;
                }
                if (questionRecord.selectedOptionNumber === question.correctOptionNumber) {
                    questionRecord.grade = question.points;
                    return total + question.points;
                } else {
                    questionRecord.grade = 0;
                    return total;
                }
            }
            if (question.questionType === "FILL_IN_BLANK") {
                const totalBlankNum = question.correct_answers.length;
                const correctBlankNum = question.correct_answers.reduce((acc, blank, currentIndex) => {
                    if (blank === questionRecord.fillInBlankAnswers[currentIndex]) return acc + 1;
                    return acc;
                }, 0);
                questionRecord.grade = question.points * (correctBlankNum / totalBlankNum);
                return total + question.points * (correctBlankNum / totalBlankNum);
            }
        }, 0);
        // console.log(req.body);
        // console.log(quizRecord);
        // console.log(questions);
        const record = await dao.createQuizRecord({...quizRecord, grade: grade});
        res.json(record);
    };
    const findQuizRecordsForOneQuiz = async (req, res) => {
        const {quizId, userId} = req.params;
        const questions = await dao.findQuizRecords(userId, quizId);
        res.json(questions);
    };
    const findOneQuizRecord = async (req, res) => {
        const {quizRecordId} = req.params;
        const record = await dao.findOneQuizRecord(quizRecordId);
        res.json(record);
    }


    app.post("/api/quizRecords", createQuizRecord);
    app.get("/api/quizRecords/:quizRecordId", findOneQuizRecord);
    app.get("/api/quizRecords/:userId/:quizId", findQuizRecordsForOneQuiz);
}