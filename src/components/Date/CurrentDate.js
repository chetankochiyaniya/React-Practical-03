import './CurrentDate.css'

// Stateless Component
const CurrentDate = () => {

    const options = { year: 'numeric', month: 'short', day: 'numeric', weekday: 'long' };
    const formattedDate = new Date().toLocaleDateString('en-US', options);
    // destructuring 
    const [weekday, month, day, year] = formattedDate.toUpperCase().split(/,?\s+/);
    /*The regular expression /,?\s+/ matches any sequence of one or more whitespace 
        characters (\s+) optionally preceded by a comma (,?)*/

    return <>
        <div className='todo-date-container'>
            <div className='date-container'>
                <div className='day'>{day}</div>
                <div className='month-year'>
                    <span><b>{month}</b></span>
                    <span>{year}</span>
                </div>
            </div>
            <div className='weekday'>{weekday}</div>
        </div>
    </>
}
export default CurrentDate