export const createPageTitle = (title) => {
    let fstLetter = title.charAt(0).toUpperCase();
    return fstLetter + title.slice(1, title.length - 1);
}