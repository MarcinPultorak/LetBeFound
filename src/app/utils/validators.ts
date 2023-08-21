import {RegisterOptions} from 'react-hook-form'

export const emailRegex = /^[^@\s]+@[^@\s]+\.[^@.\s]+$/

export const validateRequired = (message: string = "To pole jest wymagane", condition?: boolean): RegisterOptions => {
    return {
        required: {
            value: condition ?? true,
            message: message
        }
    }

}

export const validateEmail = (): RegisterOptions | any => {
    return {
        pattern: {
            value: emailRegex,
            message: "Adres e-mail musi być w prawidłowym formacie, np.: name@example.com"
        }
    } 
}