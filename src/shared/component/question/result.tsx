import React from 'react';
import CorrectIcon from '../icons/trueIcon/correct';
import WrongIcon from '../icons/wrongIcon/wrong';

interface Question {
    id: number,
    name: string,
    options: string[],
    selectedAns: string,
    correctAns: string
}
interface Props {
    questions : Question[],
}

const result = (props: Props) => {
    return (
        <div className='result mt-5'>
            <h4 className='text-capitalize'>Result</h4>

            <table>
                <thead>
                    <tr>
                        <th>Question no.</th>
                        <th>Result</th>
                        <th>Your Ans.</th>
                        <th>Correct Ans.</th>
                    </tr>
                </thead>
                <tbody>
                {
                props.questions.map((question:Question) => {
                    return <tr key={question.id}>
                        <td>{question.id + 1}</td>
                        <td>
                            {
                                (question.selectedAns === question.correctAns) && <CorrectIcon className='correct-icon' />
                            }
                            {
                                (question.selectedAns !== question.correctAns) && <WrongIcon className='wrong-icon' />
                            }
                        </td>
                        <td>
                            {question.selectedAns === '' && 'not attempted'}
                            {question.selectedAns !== '' && question.selectedAns}
                        </td>
                        <td>{question.correctAns}</td>
                    </tr>
                })
            }
                </tbody>
            </table>
        </div>
    )
} 

export default result;