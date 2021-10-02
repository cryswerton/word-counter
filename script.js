console.log('It works!')



document.addEventListener('DOMContentLoaded', () => {
    
    const textArea = document.querySelector('#text-area')
    const btn = document.querySelector('#btn')
    const panel = document.querySelector('.panel')
    
    let words = []
    let word = ''
    let textPanel = ''
    let wordsTextArea = ''

    // Need to be fixed: the last word isn't being saved when the text is big
    function getWords(array){
        array.forEach(el => {
            if(el !== ' ' && el !== '.' && word.length === 0) {
                console.log(`${el} b1`)
                // word started
                word += el
            }else if(word.length > 0 && el !== ' ' && el !== '.' && el !== '?' && el !== ',' && el !== '"' && el !== '!' && el !== '-'){
                // continue to build the current word already started 
                console.log(`${el} b2`)
                word += el
            } else if(word.length > 0 && el === ' ' || el === '.' || el === '?' || el === ',' || el === '"' || el === '!' || el === '-'){
                console.log(`${el} b3`)
                //word finished
                words.push(word)
                console.log(`words: ${words}`)
                word = ''
                
            }
        });
    }

    btn.addEventListener('click', (e) => {
        console.log('click')
        e.preventDefault()
        wordsTextArea = Array.from(textArea.value)
        console.log(`text value: ${textArea.value}`)
        getWords(wordsTextArea)
        textPanel = ''
        textPanel = words.length
        panel.innerHTML = `Count: ${textPanel}`
        console.log(words)
        words = []
    })
    
})