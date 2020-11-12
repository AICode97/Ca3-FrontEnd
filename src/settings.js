const URLs = {
    "Home": "/",
    "Login": "/login",
    
}

function URLSettings() {
    const getURL = (key) => { return URLs[key] }

    return {
        getURL
    }
}
export default URLSettings();


