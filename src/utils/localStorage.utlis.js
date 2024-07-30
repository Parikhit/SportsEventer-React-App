export const getItemFromLocalStorage = (key, defaultValue) => {
    const savedItem = localStorage.getItem(key);
    return savedItem ? JSON.parse(savedItem) : defaultValue;
};

export const setItemToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};
