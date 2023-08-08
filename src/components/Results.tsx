import { Question } from "@/types/Questions"

type Props = {
    questions: Question[];
    answers: number[];
}

export const Results = ({questions, answers}: Props) => {
    return (
        <div>
            {questions.map((item, key)=> (
                <div key={key} className="mb-3">
                    <div className="font-bold ">{key + 1}. {item.question}</div>
                    <div>
                        <div>
                        <span >{item.answer === answers[key] ? 'Acertou' : 'Errou!'} -  </span>
                        <span >{'Resposta correta é: '}</span>
                        </div>
                        <span className=" italic underline">
                        {item.options[item.answer]}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}