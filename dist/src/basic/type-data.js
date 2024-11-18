// primitive data types
export const isEven = (num) => {
    return num % 2 === 0;
};
export const concatStrings = (str1, str2) => {
    return str1 + str2;
};
export const toggleBoolean = (toggle) => {
    return !toggle;
};
// array
export const calculateAverage = (num) => {
    if (num.length === 0)
        return undefined;
    const total = num.reduce((acc, angka) => acc + angka);
    const Average = Math.floor(total / num.length);
    return Average;
};
// any
export const typesData = (value) => {
    if (typeof value === "number") {
        return `${value} adalah Number`;
    }
    else if (typeof value === "string") {
        return `${value} adalah String`;
    }
    else if (typeof value === "boolean") {
        return `${value} adalah Boolean`;
    }
    else
        return "Gak tau ah!";
};
// union type
export const unionType = (value) => {
    if (typeof value === "number") {
        return value + 2;
    }
    else if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        return !value;
    }
    ;
};
