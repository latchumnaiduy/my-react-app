export const formItems = [
  {
    label: "CAR CHECK-IN DATE",
    inputType: "date",
    isRequired: false,
    validations: {},
  },
  {
    label: "CAR REPAIR DATE",
    inputType: "date",
    isRequired: false,
    validations: {},
  },
  {
    label: "CAR INITIAL",
    inputType: "text",
    isRequired: true,
    validations: {},
  },
  {
    label: "CAR NUMBER",
    inputType: "number",
    isRequired: true,
    validations: {},
  },
  {
    label: "CHECK UMLER",
    inputType: "toggle",
    isRequired: false,
    secondary_label: "Yes",
    validations: {},
  },
  {
    label: "CAR KIND",
    inputType: "select",
    isRequired: true,
    validations: {},
    options: [
      {
        label: "SEDAN",
        id: 1,
      },
      {
        label: "COUPE",
        id: 2,
      },
      {
        label: "HATCHBACK",
        id: 3,
      },
    ],
  },
  {
    label: "LOADED",
    inputType: "toggle",
    secondary_label: "Empty",
    isRequired: false,
    validations: {},
  },
  {
    label: "STATUS",
    inputType: "checkbox",
    isRequired: false,
    validations: {},
    options: [
      {
        label: "As Awaiting Shop Space",
        id: 1,
      },
      {
        label: "As Awaiting Owners Material",
        id: 1,
      },
      {
        label: "IP - In Paint",
        id: 1,
      },
      {
        label: "REP - Hold  For Repair",
        id: 1,
      },
    ],
  },
  {
    label: "OWNER",
    inputType: "searchBar",
    isRequired: false,
    validations: {},
    options: [],
  },
  {
    label: "SECONDARY OWNER",
    inputType: "text",
    isRequired: false,
    validations: {},
    options: [],
  },
  {
    label: "BILLING TYPE",
    inputType: "select",
    isRequired: true,
    validations: {},
    options: [
      {
        label: "A - AAR",
        id: 1,
      },
      {
        label: "A - BAR",
        id: 2,
      },
    ],
  },
];

export const carsList = [
  {
    car_name: "ABCEF 3456",
    repairs: 10,
    date: "22/10/2021",
  },
  {
    car_name: "BCXF 1243",
    repairs: 0,
    date: "20/10/2021",
  },
  {
    car_name: "CDMS 6789",
    repairs: 0,
    date: "20/11/2021",
  },
];

export const locations = [
  {active:false,name:"QUEST 1"},
 {active:false,name: "QUEST 2"},
 {active:false,name: "QUEST 3"},
 {active:false,name: "QUEST 4"},
 {active:false,name: "QUEST 5"},
 {active:false,name: "QUEST 6"},
 {active:false,name: "QUEST 7"},
 {active:false,name: "QUEST 8"},
 {active:false,name: "QUEST 9"},
{active:false,name:"QUEST 10"},
{active:false,name:"QUEST1 1"},
{active:false,name:"QUEST 12"},
{active:false,name:"QUEST 13"},
];

export const addRepairItems=[
  {
    label: "Validation Type",
    inputType: "select",
    isRequired: true,
    validations: {},
    options: [
      {
        label: "SEDAN",
        id: 1,
      },
      {
        label: "COUPE",
        id: 2,
      },
      {
        label: "HATCHBACK",
        id: 3,
      },
    ],
  },{
    label: "User Rules",
    inputType: "toggle",
    secondary_label: "Empty",
    isRequired: false,
    validations: {},
  },{
    label: "Pricing",
    inputType: "select",
    isRequired: true,
    validations: {},
    options: [
      {
        label: "SEDAN",
        id: 1,
      },
      {
        label: "COUPE",
        id: 2,
      },
      {
        label: "HATCHBACK",
        id: 3,
      },
    ],
  },
  {
    label: "RP",
    inputType: "select",
    isRequired: true,
    validations: {},
    options: [
      {
        label: "AUTO",
        id: 1,
      },
      {
        label: "AAR",
        id: 2,
      },
      {
        label: "INTL",
        id: 3,
      },
      {
        label: "User",
        id: 4,
      },
      {
        label: "Pool",
        id: 5,
      },
      {
        label: "None",
        id: 6,
      },
    ],
  },
  {
    label: "AJC",
    inputType: "text",
    isRequired: true,
    validations: {},
  },
  {
    label: "LOC",
    inputType: "text",
    isRequired: false,
    validations: {},
  },
  {
    label: "QTY",
    inputType: "text",
    isRequired: true,
    validations: {},
  },
  {
    label: "CC",
    inputType: "text",
    isRequired: true,
    validations: {},
  },
  {
    label: "ACP",
    inputType: "text",
    isRequired: true,
    validations: {},
  },
  {
    label: "AQ",
    inputType: "text",
    isRequired: false,
    validations: {},
  },
  {
    label: "AUQ",
    inputType: "text",
    isRequired: false,
    validations: {},
  },
  {
    label: "WM",
    inputType: "text",
    isRequired: true,
    validations: {},
  },
  {
    label: "DESCRIPTION",
    inputType: "text",
    isRequired: true,
    validations: {},
  },
  {
    label: "RJC",
    inputType: "text",
    isRequired: true,
    validations: {},
  },
  {
    label: "RCP",
    inputType: "text",
    isRequired: true,
    validations: {},
  },
  {
    label: "RQ",
    inputType: "text",
    isRequired: false,
    validations: {},
  },
  {
    label: "RUQ",
    inputType: "text",
    isRequired: false,
    validations: {},
  },
  {
    label: "RESP",
    inputType: "text",
    isRequired: true,
    validations: {},
  },
  {
    label: "CATEOGERY",
    inputType: "text",
    isRequired: false,
    validations: {},
  },
  {
    label: "INSPECTION",
    inputType: "toggle",
    secondary_label: "Empty",
    isRequired: false,
    validations: {},
  },
  {
    label: "HIDDEN",
    inputType: "toggle",
    secondary_label: "Empty",
    isRequired: false,
    validations: {},
  }

]