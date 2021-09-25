console.log('It works!')



document.addEventListener('DOMContentLoaded', () => {
    
    const textArea = document.querySelector('#text-area')
    const btn = document.querySelector('#btn')
    const panel = document.querySelector('.panel')
    
    let words = []
    let word = ''
    let textPanel = ''
    let wordsTextArea = ''

    function getWords(array){
        array.forEach(el => {
            if(el !== ' ' && el !== '.' && word.length === 0) {
                //console.log(`${el} b1`)
                // word started
                word += el
            }else if(word.length > 0 && el !== ' ' && el !== '.'){
                //console.log(`${el} b2`)
                word += el
            } else if(word.length > 0 && el === ' ' || el === '.'){
                //console.log(`${el} b3`)
                //word finished
                words.push(word)
                word = ''
            }
        });
    }

    btn.addEventListener('click', (e) => {
        console.log('click')
        e.preventDefault()
        wordsTextArea = Array.from(textArea.value)
        getWords(wordsTextArea)
        textPanel = ''
        textPanel = words.length
        panel.innerHTML = `Count: ${textPanel}`
        console.log(words)
        words = []
    })
    
})