import { BE_Error_Interface } from 'src/app/layout-shared/types/be_error.interface';
import { Logged_In_User_Interface } from './../../layout-shared/types/logged_user.interface';
export class AccountLoginModel {
    userName: string;
    password: string;
}

export interface AccountLoginRequestInterface {
    user: {
        userName: string
        password: string
    }
  }
  
  export interface AuthStateInterface {
    isSubmitting: boolean
    currentUser: Logged_In_User_Interface | null
    isLoggedIn: boolean | null
    validationErrors: BE_Error_Interface | null
  }
  