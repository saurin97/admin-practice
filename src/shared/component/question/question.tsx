import React from 'react';
import {Formik,Form} from 'formik';
// import * as Yup from 'yup';
import FormInput from '../../../shared/component/input/input';

interface Question {
    id: number,
    name: string,
    options: string[],
    selectedAns: string,
    correctAns: string
    answered : boolean
}
interface Props {
    question : Question,
    lastQuestion : number
    checkAnswer : (anwser:string,id:number) => void
    showResult: (anwser:string) => void
}

const question = (props:Props) => {
    const isAnswered = props.question.answered ? 'question mt-5 answered-question' : 'question mt-5';
    return(
        <div className={isAnswered}>
            <p>
                <span>{props.question.id + 1})</span>
                <span>{props.question.name}</span>
            </p>
            <Formik
                initialValues={{
                    options : ''
                }}
                onSubmit={(values,{resetForm}) => {                    
                    if (props.lastQuestion === props.question.id) {
                        props.showResult(values.options)
                    } else {
                        props.checkAnswer(values.options,props.question.id);
                    }
                    // resetForm();
                }}
            >
                {formik => (
                    <Form onSubmit={formik.handleSubmit}>
                        <FormInput name='options' type='radio' autoCompleted='off' selectList={props.question.options} placeholder='' />
                        <div className='mt-3 mb-2'>
                            {
                                (props.lastQuestion - 1 === props.question.id) && <button type='submit' disabled={props.question.answered}>Submit & Show Result</button>
                            }
                            {
                                (props.lastQuestion - 1 !== props.question.id) && <button type='submit' disabled={props.question.answered}>Submit & goto next</button>
                            }
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default question;