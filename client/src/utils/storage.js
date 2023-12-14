export function getStorageData(keyName, defaultValue) {
    try {
        const value = window.localStorage.getItem(keyName);
        if (value) {
            return JSON.parse(value);
        } else {
            window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
            return defaultValue;
        }
    } catch (err) {
        return defaultValue;
    }
}
