import {createFeatureSelector, createSelector} from '@ngrx/store'
import { AppStateInterface } from 'src/app/layout-shared/types/app_state.interface'
import { AuthStateInterface } from '../account-setup.model'
export const authFeatureSelector = createFeatureSelector<
  AppStateInterface,
  AuthStateInterface
>('auth')

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
)

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.validationErrors
)
