import { useEffect, useState } from 'react'
import emptyListImg from '../../assets/empty-list.png'
import './Task.css'

export default function Task() {

    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [list, setList] = useState(JSON.parse(localStorage.getItem('todo-list')));

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [inputValue, showInput]);

    const addTask = () => {
        setShowInput(!showInput);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Escape' && showInput === true) {
            setShowInput(false);
        }
        if (event.key === 'Enter' && showInput === true) {
            if (inputValue === '') {
                alert('Please enter a value');
            } else {

                if (localStorage.getItem("expiry-date") === null) {
                    localStorage.setItem("expiry-date", new Date().toLocaleDateString().toString())
                }
                const todoList = JSON.parse(localStorage.getItem('todo-list')) || [];
                const duplicate = todoList.find((item) => item.text === inputValue);
                if (duplicate) {
                    alert('This task already exists');
                } else {
                    const newTodoList = [...todoList, { text: inputValue, checked: false }];
                    localStorage.setItem('todo-list', JSON.stringify(newTodoList));
                    setList([...todoList, { text: inputValue, checked: false }])
                    setInputValue('');
                }
            }
        }
    };

    const handleCheckboxChange = (index, checked) => {
        const newList = [...list];
        newList[index] = {
            text: newList[index].text,
            checked: checked
        };
        setList(newList);
    };

    return (
        <>
            <div className="task-list-container">
                {list !== null ? (list.map((item, index) => (
                    <div className='task' key={index}>
                        <div className={`task-msg ${item.checked ? 'checked' : ''}`}>
                            {item.text}
                        </div>
                        <input
                            type='checkbox'
                            onChange={(event) => handleCheckboxChange(index, event.target.checked)}
                            checked={item.checked}
                        />
                    </div>
                ))
                ) : (<div className='empty-list-img'>
                    <img src={emptyListImg} alt='Empty list' />
                    <div className='empty-text'>A fresh start</div>
                    <div className='empty-sub-text'>Anything to add ?</div>
                </div>)}
            </div>
            {showInput ? (
                <div>
                    <input
                        type="text"
                        className="input-size"
                        placeholder='Press "Esc" to exit'
                        autoFocus
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </div>
            ) : (
                <div className="add-todo-btn-container">
                    <button className="add-todo-button" onClick={() => addTask()}>
                        +
                    </button>
                </div>
            )}
        </>
    );
}
