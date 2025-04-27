export const setStorage = (key, value) => {
    chrome.storage.sync.set({ [key]: value }, () => {
        console.log(`${key} set to ${value}`);
    });
};
export const getStorage = (key) => {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get([key], (result) => {
            if (chrome.runtime.lastError) {
                reject(`Error retrieving ${key}: ${chrome.runtime.lastError}`);
            }
            else {
                resolve(result[key] || false);
            }
        });
    });
};
export const removeStorage = (key) => {
    chrome.storage.sync.remove([key], () => {
        console.log(`${key} removed`);
    });
};
