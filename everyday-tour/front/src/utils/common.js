const isComma = function(num) {
    let regExp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regExp, ",");
}

export {isComma};