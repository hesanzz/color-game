import { useState } from "react";

const ModeSelection = ({setnumSquare, reset}) => {
    const [isEasyMode, setIsEasyMode] = useState(true);
    const [isHardMode, setIsHardMode] = useState(false);
    
  const toggleEasyMode = () => {
    setIsEasyMode(true);
    setIsHardMode(false); 
    setnumSquare(3);
  }

  const toggleHardMode = () => {
    setIsHardMode(true);
    setIsEasyMode(false); 
    setnumSquare(6);
  }
  return (
    <div className="button-section">
        <div className="right">
        <button onClick={reset}>RESET</button>
        </div>
        <div className="left">
        <button className={`${isEasyMode ? 'selected' : ''}`} onClick={toggleEasyMode}>EASY</button>
        <button className={`${isHardMode ? 'selected' : ''}`} onClick={toggleHardMode}>HARD</button>
        </div>
    </div>
  );
}


const QuestionSection = ({pickedColor}) => {
    return (
        <div className="que-box">
        <p>CHOOSE THE COLOR</p>
        <h1>{pickedColor}</h1>
        </div>
    )
}

const MessageSection = ({isSuccess, selectedColor}) => {
    return (
        <div className="comments">
            {selectedColor !== '' ? 
            isSuccess ? <h2 className="success">SUCCESS</h2> : <h2 className="retry">TRY AGAIN</h2>
            : <h2 className="play">PLAY</h2>}
        </div>
    )
}

const ButtonSection = ({setnumSquare, reset}) => {
    return (
        <ModeSelection  setnumSquare={setnumSquare} reset={reset}/>
    )
}


const DataContainer = ({pickedColor, isSuccess, selectedColor, setnumSquare, reset}) => {
    return (
        <div className="data-container">
                        <QuestionSection pickedColor={pickedColor}/>
            <ButtonSection setnumSquare={setnumSquare} reset={reset} />
            <MessageSection isSuccess={isSuccess} selectedColor={selectedColor} />

        </div>
    )
}

export default DataContainer;
