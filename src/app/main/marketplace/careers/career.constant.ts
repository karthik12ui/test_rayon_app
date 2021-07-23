export const SearchProfileConstant = {
    searchList: [
        {
            type: 'usa',
            displayText: 'USA',
            selected: true,
            inputLabel: 'Search for Openings in USA',
            inputPlaceholder: 'Search for Openings in USA',
            inputMinLength: 2,
            inputMaxLength: 15,
        },
        {
            type: 'india',
            displayText: 'INDIA',
            selected: false,
            inputLabel: 'Search for Openings in INDIA',
            inputPlaceholder: 'Search for Openings in INDIA',
            inputMinLength: 2,
            inputMaxLength: 20,
        }
    ],
    ReturedFiltersList: [
        {
            title: 'Job Type',
            filterID: 'jobType',
            list: [ ]
        },
        {
            title: 'Category',
            filterID: 'category',
            list: [ ]
        },
        {
            title: 'State',
            filterID: 'state',
            list: [ ]
        },
        {
            title: 'City',
            filterID: 'city',
            list: [ ]
        }
    ]
};
