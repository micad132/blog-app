
export const isPasswordTheSame =
    (password: string, confirmPassword: string) => password === confirmPassword;

export const isUsernameValid = (username: string) => username.length > 5 && username.length < 20;

export const isCityValid = (city: string) => city.length > 5 && city.length < 15;

export const registerValidation = (username: string, password: string, confirmPassword: string,
                                   city: string): { isInvalid: boolean, errorMessage: string} => {
    if(!isUsernameValid(username)) {
        return {
            isInvalid: true,
            errorMessage: 'Username is invalid!'
        }
    }
    if(!isPasswordTheSame(password, confirmPassword)) {
        return {
            isInvalid: true,
            errorMessage: 'Passwords must be the same!'
        }
    }
    if(!isCityValid(city)) {
        return {
            isInvalid: true,
            errorMessage: 'City must be valid!'
        }
    }
    return {
        isInvalid: false,
        errorMessage: '',
    }
}
