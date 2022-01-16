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
    inputType: "number",
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
    inputType: "text",
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
    car_name: "BCXF 3456",
    repairs: 10,
    date: "22/10/2021",
  },
  {
    car_name: "BCXF 124356",
    repairs: 0,
    date: "20/10/2021",
  },
  {
    car_name: "BCXF 6789",
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
