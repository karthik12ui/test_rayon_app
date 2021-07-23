export class JobsListModel {
    postionID: string;
    image: string;
    postedOn: string;
    title: string;
    category: string;
    jobType: string;
    state: string;
    city: string;
    country: string;
    jobDetails: JobDetails;
    id?: number;
}

export class JobDetails {
    description: string;
    basicQualification: SectionList[];
    PreferredSkills: SectionList[];
}

export class SectionList {
    list: string;
}

export class SearchDetailsModel {
    searchType: string;
    searchInput: string;
    emittedCount: number;
}

export class SearchJobsDisplayFlag {
    searchResults: boolean;
    searchResultsPlaceholder: boolean;
}

export class FilterValueFlag {
    value: string;
    flag: boolean;
}

