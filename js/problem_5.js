const wordInput = document.querySelector('#problem-5 #rhyme-with-input');
const showRhymesButton = document.querySelector('#problem-5 #show-rhymes-button');
const clearButton = document.querySelector('#problem-5 #clear-rhymes-button');
const rhymesOutput = document.querySelector('#problem-5 #rhymes');

function getRhymes(rel_rhy, callback) {
    fetch(`https://api.datamuse.com/words?${(new URLSearchParams({rel_rhy})).toString()}`)
        .then((response) => response.json())
        .then((data) => {
            callback(data);
        }, (err) => {
            console.error(err);
        });
}

// Write your code here
function clearOutput() {
    rhymesOutput.textContent = "";
}
showRhymesButton.addEventListener("click", () => {
    let word = wordInput.value;
    //have to reset list after
    clearOutput();
    getRhymes(word, (result) => {
        if(result.length === 0) {
            const newListElement = document.createElement('li');
            newListElement.classList.add("list-group-item");
            newListElement.textContent = "(no rhymes)";
            rhymesOutput.append(newListElement);
        }
        else {
            for(const key in result) {
                const newListElement = document.createElement('li');
                newListElement.classList.add("list-group-item");
                newListElement.textContent = result[key].word;
                rhymesOutput.append(newListElement);
            }
        }
    });
});

clearButton.addEventListener("click", () =>{
    clearOutput();
    wordInput.value = "";
});