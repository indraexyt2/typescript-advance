// primitive data types
export const isEven = (num: number): boolean => {
    return num % 2 === 0;
};

export const concatStrings = (str1: string, str2: string): string => {
    return str1 + str2;
};

export const toggleBoolean = (toggle: boolean): boolean => {
    return !toggle;
};

// array
export const calculateAverage = (num: number[]): number | undefined => {
  if(num.length === 0) return undefined; 
  const total = num.reduce((acc, angka) => acc + angka);
  const Average = Math.floor(total / num.length)
  return Average;
};

// any
export const typesData = (value: any): any => {
    if (typeof value === "number") {
        return `${value} adalah Number`;
    } else if (typeof value === "string") {
        return `${value} adalah String`;
    } else if (typeof value === "boolean") {
        return `${value} adalah Boolean`;
    }  else return "Gak tau ah!"
}
