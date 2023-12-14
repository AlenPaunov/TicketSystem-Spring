import { useState } from "react";
import { getStorageData } from "../utils/storage";

function useLocalStorage(keyName, defaultValue) {
    const [storedValue, setStoredValue] = useState(
        getStorageData(keyName, defaultValue)
    );

    function setValue(newValue) {
        try {
            window.localStorage.setItem(keyName, JSON.stringify(newValue));
        } catch (err) {}

        setStoredValue(newValue);
    }

    return { storedValue, setValue };
}

export { useLocalStorage };
