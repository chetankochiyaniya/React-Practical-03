import { useState } from 'react'
import Button from '../Button/Button'
import './Task.css'

export default function Task() {;
    const [list, setList] = useState([
        { text: "Buy a new product", checked: false },
        { text: "Begin promotional phase", checked: false },
        { text: "Read an article", checked: false },
        { text: "Try not to fall asleep", checked: false },
        { text: "Begin QA with product", checked: false },
        { text: "Go for a walk", checked: false }
    ]);

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
                {list.map((item, index) => (
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
                ))}
            </div>
            <Button />
        </>
    );
}
