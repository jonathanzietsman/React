export const useGetUserInfo = () => {
    // If JSON.parse results in null, it falls back to {} so destructuring doesn't crash
    const { name, profilePhoto, userID, isAuth } = JSON.parse(localStorage.getItem('authInfo')) || {};

    return { name, profilePhoto, userID, isAuth: !!isAuth };
}