const getCsrfToken = () => {
    const tokenString = document.cookie.split(';').find(cookie => cookie.includes('csrftoken='));
    return tokenString ? tokenString.trim().substring(10) : '';
};

const csrfToken = { 'X-CSRFToken': getCsrfToken() };

export default csrfToken;
