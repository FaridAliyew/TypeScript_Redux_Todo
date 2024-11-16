export const saveToLocalStorage = (key: string, value: any) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error("Local storage-yə yazmaq mümkün olmadı:", error);
    }
};

export const loadFromLocalStorage = (key: string) => {
    try {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : undefined;
    } catch (error) {
        console.error("Local storage-dən oxumaq mümkün olmadı:", error);
        return undefined;
    }
};
