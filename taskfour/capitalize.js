function capitalize(string){
    if(typeof(string) !== 'string'){
        return 'input a string'
    }
    return string.charAt(0).toUpperCase() + string.slice(1);

}

module.exports = capitalize;