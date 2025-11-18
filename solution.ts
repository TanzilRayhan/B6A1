// Problem 1:

type Format = string | number | boolean;

const formatValue = (value: Format) => {
    if (typeof value === "string"){
        return value.toUpperCase();
    } else if (typeof value === "number"){
        return value*10;
    } else if (typeof value === "boolean"){
        if (value === true){
            return false;
        } else {
            return true;
        }
    }
}

console.log(formatValue('hello'));
console.log(formatValue(5));
console.log(formatValue(true));

// Problem 2:

