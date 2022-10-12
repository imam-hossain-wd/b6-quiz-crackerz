export const saveToDBRightAnswer = () => {
    let getNumber;
    if(localStorage.getItem('right-answer')){
        getNumber = parseInt(localStorage.getItem('right-answer'));
        getNumber++;
        
    }else{
        getNumber = 1
    }
    localStorage.setItem('right-answer', getNumber)
    return getNumber;
}
export const saveToDBWrongAnswer = () => {
    let getNumber;
    if(localStorage.getItem('wrong-answer')){
        getNumber = parseInt(localStorage.getItem('wrong-answer'));
        getNumber++;
        
    }else{
        getNumber = 1
    }
    localStorage.setItem('wrong-answer', getNumber)
    return getNumber;
}