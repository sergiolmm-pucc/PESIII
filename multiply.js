
function multiply(numbers){
    return numbers  
        .split(',')
        .map( x => parseInt(x))
        .reduce( (a,b) => a * b )
}

exports.multiply = multiply