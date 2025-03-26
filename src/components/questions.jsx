import { useState } from "react"
import rice from "/src/assets/rice-7176354.jpg"

const Questions = () => {

    const [showQuestionOne, isShowQuestionOne] = useState(false);
    const [showQuestionTwo, isShowQuestionTwo] = useState(false);
    const [showQuestionThree, isShowQuestionThree] = useState(false);

    const toggleQuestionOne = () => {
        isShowQuestionOne(showQuestionOne => !showQuestionOne)
    };

    const toggleQuestionTwo = () => {
        isShowQuestionTwo(showQuestionTwo => !showQuestionTwo)
    };

    const toggleQuestionThree = () => {
        isShowQuestionThree(showQuestionThree => !showQuestionThree)
    };    
    
    return (
    <div className="ask-questions">
        <div className="question-img">
            <img src={rice} alt="rice-farm" id="rice-farm" />
        </div>
        <div className="question-article-container">
            <article className="question-article">
                <h4>ASK SOMETHING</h4>
                <h1>Keep the scene green by taking the lead</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quod rerum illo nesciunt dolorem ipsa earum debitis nisi doloremque voluptas, vel est, et sunt delectus, eaque modi magni laboriosam corporis!</p>
                <div className="questions">
                    <p className="question">What is the purpose of the company</p>
                    <button onClick={toggleQuestionOne}><span className="add">{showQuestionOne ? "-": "+"}</span></button>
                    { showQuestionOne && <div className="questions-answer">
                        <p>Mkulima Green Solutions is committed to transforming Kenya's agricultural sector by providing affordable and efficient solar-powered irrigation systems. Our goal is to help farmers overcome water scarcity, increase crop yields and adopt sustainable farming practices for long-term food security</p>
                    </div>}
                </div>
                <div className="questions">
                    <p className="question">What makes your company unique?</p>
                    <button onClick={toggleQuestionTwo}><span className="add">{showQuestionTwo ? "-": "+"}</span></button>
                    { showQuestionTwo && <div className="questions-answer">
                        <p>Farmer-First Innovation: Designed with input from local farmers to address their specific irrigation challenges</p>
                    </div>}
                </div>
                <div className="questions">
                    <p className="question">How much time do i need to volunteer?</p>
                    <button onClick={toggleQuestionThree}><span className="add">{showQuestionThree ? "-": "+"}</span></button>
                    { showQuestionThree && <div className="questions-answer">
                        <p>5-10 hrs per week for technical, research, or advisory roles.</p>
                    </div>}
                </div>
            </article>
        </div>
    </div>
    

    )
}

export default Questions