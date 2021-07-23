import { Injectable } from '@angular/core';

const AccountSetupLoginValidation = {
    userName: [
        {type: 'required', message: 'Please enter user name' },
        {type: 'pattern', message: 'Please enter valid username. e.g. , user@rayonsoft.com ' },
        {type: 'minlength', message: 'User name should be minium of 10 characters.' },
        {type: 'maxlength', message: 'User name can have maximum of 100 characters.' }
    ],
    password: [
        {type: 'required', message: 'Please enter password' },
        {type: 'pattern', message: 'Password must have 1 uppercase, 1 lowercase, i number and one special character. E.g., Password@123' },
        {type: 'minlength', message: 'User name should be minium of 8 characters.' },
        {type: 'maxlength', message: 'User name should have maximum of 80 characters.' }
    ]
}

export interface LoginValidationTypes {
    userName: ValidationMessage[];
    password: ValidationMessage[];
}

export interface ValidationMessage {
    type: string;
    message: string
}

@Injectable()
export class AccountSetupValidation {
    getLoginValidation(): LoginValidationTypes{
        return AccountSetupLoginValidation;
    }
}