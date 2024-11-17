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
