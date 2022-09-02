import { useState } from 'react';
import phrasesList from './phrases.json'

const QuoteBox = () => {

    let colors = ['120B02','2E3830', '916827', 'F0D02D', '251704', '44CFCB', '4EA5D9', '2A4494', '224870', '122C34']
    const randomColor =  () => { 
        return Math.floor( Math.random() * colors.length ) 
    }
    
    const [colorIn, setColorIn] = useState(randomColor)
    document.body.style.backgroundColor = '#' + colors[colorIn]

    const nextColor = () => {
        setColorIn(randomColor)
    }

    const randomPhrase = () => {
        return Math.floor(Math.random() * phrasesList.length) 
    } 
    const [phrase, setPhrase] = useState(randomPhrase)

    const changePhrase = () => {
        setPhrase(randomPhrase)
    }

    function values() {
        nextColor();
        changePhrase();
    }
    console.log(phrasesList)
    return (
        <div className='box-container' style={{background: "white"}}>
             <div className="icon-container" style={{color: `#${colors[colorIn]}`}}>
                <i className="fa-sharp fa-solid fa-quote-left"></i>
                <p>{phrasesList[phrase].quote}</p>
             </div>

             <div className="author-container" style={{color: `#${colors[colorIn]}`}}>
                <h3>{phrasesList[phrase].author}</h3>
                <i onClick={values} style={{color: `#${colors[colorIn]}`}} class="fa-solid fa-circle-arrow-right"></i>
             </div>
        </div>
    )
}

export default QuoteBox;