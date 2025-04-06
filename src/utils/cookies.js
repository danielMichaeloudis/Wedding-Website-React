//Adapted from https://www.geeksforgeeks.org/how-to-set-cookie-in-reactjs/
// Function to set a cookie
export const setCookieFunction = (name, value, days, domain, secure) => {
    let expires = "";
    let cDomain = "";
    let cSecure = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    if (domain) {
        cDomain = "; domain=" + domain;
    }
    if (secure) {
        cSecure = "; Secure";
    }
    document.cookie =
        name + "=" + value + expires + cDomain + cSecure + "; path=/";
};

// Function to get a cookie by name
export const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
};
