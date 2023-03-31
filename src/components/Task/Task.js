import { useState } from 'react'
import Button from '../Button/Button'
import emptyListImg from '../../assets/empty-list.png'
import './Task.css'

export default function Task() {;
    const [list, setList] = useState([
       
    ]);

    const handleCheckboxChange = (index, checked) => {
        const newList = [...list];
        newList[index] = {
            text: newList[index].text,
            checked: checked
        };
        setList(newList);
    };
    console.log(list.length)
    return (
        <>
            <div className="task-list-container">
                {list.length ? (list.map((item, index) => (
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
                ):(<div className='empty-list-img'>
                    <img src={emptyListImg} alt='Empty list'/> 
                        <div className='empty-text'>A fresh start</div>
                        <div className='empty-sub-text'>Anything to add ?</div>
                        </div>)}
            </div>
            <Button />
        </>
    );
}
