import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (key, initialValue) => {
    const [value, setValue] = useLocalStorage(key, initialValue);

    const handleChange  = newValue => {
        setValue(newValue)
    }


    useEffect(( ) => {
        { value === true ? document.querySelector('body').classList.add('dark-mode') : document.querySelector('body').classList.remove('dark-mode')  }
    }, [value])

  return [value, setValue, handleChange] 
} 