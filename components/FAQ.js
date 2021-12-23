import React, {useState} from 'react'

const FAQ = () => {

    const [showAnswer, setshowAnswer] = useState('')

    let data = [
        {   
            id: 1,
            question: 'How can I buy A Shark?',
            answer: 'You can easily buy with Opensea You can easily buy with Opensea You can easily buy with Opensea'
        },

        {
            id: 2,
            question: 'Just a random question?',
            answer: 'A random answer of a radom question ofcource can be change A random answer of a radom question ofcource can be change'
        },

        {
            id: 3,
            question: 'Just a random question?',
            answer: 'A random answer of a radom question ofcource can be change A random answer of a radom question ofcource can be change'
        },

        {
            id: 4,
            question: 'Just a random question?',
            answer: 'A random answer of a radom question ofcource can be change'
        },

    ]


    let questionClicked = (e) =>{
    }
    return (
        <>
            {
                data.map((singleData) =>{
                    return <div className="singleAccordianCont text-white" key={singleData.id}>
                        <div className="question bg-blue-500 cursor-pointer relative flex items-center justify-between py-5 px-7 h-20 rounded-md mb-2" onClick={questionClicked}>{singleData.question} <span><i class="fas fa-chevron-down text-xl"></i></span>
                        
                        <div className="answer absolute left-5 -bottom-20 maxWidthAnswer  mx-auto rounded rounded-t-none bg-gray-500 mb-5">{singleData.answer}</div>
                        </div>
                        
                    </div>
                })
            }
        </>
    )
}

export default FAQ
