import { Injectable } from '@angular/core';

const searchJobValidation = {
  searchType: [
        { type: 'required', message: 'Select type is required' },
      ],
      searchInput: [
    ]
  };

export interface SearchJobValidationTypes {
  searchInput: ValidationMessage[];
  searchType: ValidationMessage[];
}

export interface ValidationMessage {
  type: string;
  message: string;
}

@Injectable()
export class SearchJobsValidation {
  getSearchJobValidation(): SearchJobValidationTypes {
    return searchJobValidation;
  }

}
