

export const format3Numbers = (num: number) => {
    if(!num) return
    if((num).toString().length < 2) return `00${num}`
    if((num).toString().length < 3) return `0${num}`
    return num
}

export const firstCharToUP = (value: string) => {
    if(value) return value.charAt(0).toLocaleUpperCase() + value.slice(1);
}