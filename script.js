console.log('It works!')



document.addEventListener('DOMContentLoaded', () => {
    
    const textArea = document.querySelector('#text-area')
    const btn = document.querySelector('#btn')
    const panel = document.querySelector('.panel')
    const wordsContainer = document.querySelector('.words-container')
    
    let words = []
    let word = ''
    let textPanel = ''
    let wordsTextArea = ''
    let ignored_chars = ['!', '?', ',', '.', ' ', '-', '"', ':', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let allowed_chars = ['!', '?', ',', '.', ' ', '-', '"', ':', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    const testValues = (element, conective, comparison_symbol, values_array) => {
        let return_value = false
        let true_value_counter = 0
        if(conective === '&&'){
            
            if(comparison_symbol === '!=='){

                values_array.forEach(el => {

                    if(element !== el){

                        true_value_counter++
                    }
                })
                if(true_value_counter === values_array.length){
                    // All the values were found different
                    return_value = true
                    // console.log(`All the values were found different, true_value_counter: ${true_value_counter}`)
                }
            }   
        }
        if(conective === '||'){

            if(comparison_symbol === '==='){

                values_array.forEach(el => {
                    
                    if(element === el){

                        true_value_counter++
                    }
                })
                if(true_value_counter > 0){
                    // At least one value was found equal
                    // console.log(`At least one value was found equal, true_value_counter: ${true_value_counter}`)
                    return_value = true
                }
            }
        }
        return return_value
    }

    const render_words = (words) => {
        words.forEach(word => {
            
            wordsContainer.innerHTML += `<span>${word}</span>`
        })
    }

    // Need to be fixed: the last word isn't being saved when the text is big
    function getWords(array){
        array.forEach(el => {
            if(el !== ' ' && el !== '.' && word.length === 0) {
                // console.log(`${el} b1`)
                // word started
                word += el
            }else if(word.length > 0 && testValues(el, '&&', '!==', ignored_chars)){
                // continue to build the current word already started 
                // console.log(`${el} b2`)
                word += el
            } else if(word.length > 0 && testValues(el, '||', '===', allowed_chars)){
                // console.log(`${el} b3`)
                //word finished
                words.push(word)
                // console.log(`words: ${words}`)
                word = ''
                
            }
        });
    }

    btn.addEventListener('click', (e) => {
        // console.log('click')
        e.preventDefault()
        wordsTextArea = Array.from(textArea.value)
        // console.log(`text value: ${textArea.value}`)
        getWords(wordsTextArea)
        textPanel = ''
        textPanel = words.length
        panel.innerHTML = `Count: ${textPanel}`
        console.log(words)
        render_words(words)
        words = []
    })
    
})