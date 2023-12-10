export const storeDataInSession = (key, value) => {
    return sessionStorage.setItem(key, JSON.stringify(value));
}
export const getDataFromSession = (key) => {
    if (key && sessionStorage) {
        return JSON.parse(sessionStorage.getItem(key));
    }
    return null;
}
export const removeDataFromSession = (key) => {
    if (key && sessionStorage) {
        return sessionStorage.removeItem(key);
    }
    return null;
}
export const clearAllDataFromSession = () => {
    return sessionStorage.clear();
}