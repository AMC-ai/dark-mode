import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';



export const useDarkMode = (key, initialValues, cb) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValues);

    cb(toggleMode);

    useEffect(() => {
        const body = document.querySelector(body);
        console.log(11111111)
        if (darkMode === true) {
            body.classList.add('dark-mode');

        } else {
            body.classList.remove('dark-mode')
        }

    }), [key]
    return [darkMode, setDarkMode, handleChanges];
}
