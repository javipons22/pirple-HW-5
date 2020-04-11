var lib = {};

// Sample for testing that simply returns a number
lib.getANumber = function(){
    return 1;
};

lib.isUppercase = function(string) {
    var strings = string;
    var i=0;
    var character='';
    while (i <= strings.length){
        character = strings.charAt(i);
        if (!isNaN(character * 1)){
            return true;
        }else{
            if (character == character.toLowerCase()){
                return false;
            }
        }
        i++;
    }
    return true;
}

lib.isSorted = function(array) {
    for(var j = 0 ; j < array.length - 1 ; j++){
        if(array[j] > array[j+1]) {
            // is not sorted
            return false;
        }
    }
    return true;
}

module.exports = lib;