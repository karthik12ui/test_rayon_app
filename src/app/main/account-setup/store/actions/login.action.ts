import {createAction, props} from '@ngrx/store'
import { BE_Error_Interface } from 'src/app/layout-shared/types/be_error.interface'
import { Logged_In_User_Interface } from 'src/app/layout-shared/types/logged_user.interface'
import { AccountLoginRequestInterface } from '../../account-setup.model'
import { ActionTypes } from '../actionTypes'

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{request: AccountLoginRequestInterface}>()
)

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{currentUser: Logged_In_User_Interface}>()
)

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{errors: BE_Error_Interface}>()
)
