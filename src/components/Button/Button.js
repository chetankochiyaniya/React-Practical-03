// Stateful component
import { useEffect, useState } from "react";
import './Button.css'

const Button = () => {
    const [showInput, setShowInput] = useState(false);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [showInput]);

    const addTask = () => {
        setShowInput(!showInput);
    }

    const handleKeyPress = (event) => {
        console.log("enter handlekey funcation", event.key)
        if (event.key === 'Escape') {
            setShowInput(false);
        }
    };

    return <>
        {showInput ? (<div>
            <input type='text' className='input-size' placeholder=' Press "Esc" to exit' />
        </div>) : (
            <div className='add-todo-btn-container' >
                <button className='add-todo-button' onClick={() => addTask()}>
                    +
                </button>
            </div>)}
    </>
}
export default Button