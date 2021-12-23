export const createPageTitle = (title) => {
    let fstLetter = title.charAt(0).toUpperCase();
    return fstLetter + title.slice(1, title.length);
}

export const convertObjToArr = (obj) => {
    let arr = [];

    for (let el in obj) {
        arr.push(obj[el])
    }

    return arr
}