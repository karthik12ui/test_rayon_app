import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SearchProfileConstant } from '../../career.constant';
import { SearchJobsValidation } from '../../career.validation';
import { SearchDetailsModel } from '../../careers.model';

@Component({
  selector: 'app-search-jobs',
  templateUrl: './search-jobs.component.html',
  styleUrls: ['./search-jobs.component.scss']
})
export class SearchJobsComponent implements OnInit {
  searchInputForm: any;
  searchInputValidationMessages: any;
  searchList: any;
  searchDetails = new SearchDetailsModel();
  searchDetailsSelected: any;
  customSearchValidation: any;
  @Input() searchType: any;
  @Output() onChangeSearch: EventEmitter<any> = new EventEmitter<any>();
  constructor(public formBuilder: FormBuilder,
    public validationItems: SearchJobsValidation) {
  
  }

  ngOnInit() {
    this.searchDetailsSelected = {};
    this.customSearchValidation = [];
    this.searchList = SearchProfileConstant.searchList;
    this.searchDetails.searchType = this.searchType;
    this.searchDetails.emittedCount = 0;
    this.setForSearchGroupValidation();
    this.searchInputValidationMessages = this.validationItems.getSearchJobValidation();
    this.selectionUpdated();
  }
// ===========================================================================
//  Set Validation group for Teachnical Contact and Search ECPD form
// ==========================================================================
setForSearchGroupValidation() {
  this.searchInputForm = this.formBuilder.group({
    searchType: new FormControl(this.searchDetails.searchType, Validators.compose([
      Validators.required,
    ]
  )),
  searchInput: new FormControl(this.searchDetails.searchInput, Validators.compose([
    ]
  )),
});
}
validateSearchFormFields(): void {
if (!this.searchInputForm.valid) {
  // Mark the form and inputs as touched so the errors messages are shown
  this.searchInputForm.markAsTouched();
  for (const control in this.searchInputForm.controls) {
    if (this.searchInputForm.controls.hasOwnProperty(control)) {
      this.searchInputForm.controls[control].markAsTouched();
      this.searchInputForm.controls[control].markAsDirty();
    }
  }
} else {
  this.searchForDetails();
}
}
selectionUpdated() {
  this.searchDetails.emittedCount = 0;
  const filterBySelection = this.searchList.filter(li => li.type === this.searchDetails.searchType);
  const validationList = this.searchInputValidationMessages.searchInput;
  if (filterBySelection.length > 0) {
    this.searchDetailsSelected = filterBySelection[0];
  }
}

searchForDetails() {
  this.searchDetails.emittedCount = this.searchDetails.emittedCount + 1;
  const data = this.searchDetails;
  this.onChangeSearch.emit(data);
  if(this.searchDetails.searchInput === null || this.searchDetails.searchInput == '') {
    this.searchDetails.emittedCount = 0;
  }
}
}
