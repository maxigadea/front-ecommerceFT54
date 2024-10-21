import { ILoginErrors, ILoginProps } from "@/types";

export function validateLoginForm(values: ILoginProps) {
    const errors: ILoginErrors = {}
   
    if(values.email && !/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is not valid"
    } else if (!values.password) {
        errors.password = "The password is required"
    }

    return errors;
}

export function validateRegisterForm(values: ILoginProps) {
    const errors: ILoginErrors = {}

    if(values.email && !/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is not valid"
    }

    return errors;
}