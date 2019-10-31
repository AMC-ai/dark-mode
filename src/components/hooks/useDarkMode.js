import { useLocalStorage } from './useLocalStorage';




export const useDarkMode = (key, initialValues) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValues);

    const updateDarkModeClasss = (() => {
        const body = document.querySelector('body');

        if (darkMode === true) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode')
        }

    });
    console.log(darkMode)
    return [darkMode, setDarkMode, updateDarkModeClasss];
}
