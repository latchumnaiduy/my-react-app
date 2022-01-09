export const formItems = [
    {
      label: "CAR CHECK-IN DATE",
      inputType: "date",
      isRequired:false,
      validations: {}
    },
    {
        label: "CAR REPAIR DATE",
        inputType: "date",
        isRequired:false,
        validations: {}
      },
      {
        label: "CAR INITIAL",
        inputType: "number",
        isRequired:true,
        validations: {}
      },
      {
        label: "CAR NUMBER",
        inputType: "number",
        isRequired:true,
        validations: {}
      },
      {
        label: "CHECK UMLER",
        inputType: "toggle",
        isRequired:false,
        secondary_label: "Yes",
        validations: {}
      },
      {
        label: "CAR KIND",
        inputType: "select",
        isRequired:true,
        validations: {},
        options: [
            {
                label: "SEDAN",
                id:1
            },
            {
                label: 'COUPE',
                id:2
            },
            {
                label: 'HATCHBACK',
                id:3
            }
        ]
      },
      {
        label: "LOADED",
        inputType: "toggle",
        secondary_label: "Empty",
        isRequired:false,
        validations: {}
      },
      {
        label: "STATUS",
        inputType: "checkbox",
        isRequired:false,
        validations: {},
        options: [
            {
                label: 'As Awaiting Shop Space',
                id:1
            },
            {
                label: 'As Awaiting Owners Material',
                id:1
            },
            {
                label: 'IP - In Paint',
                id:1
            },
            {
                label: 'REP - Hold  For Repair',
                id:1
            }
        ]
      },
      {
        label: "OWNER",
        inputType: "text",
        isRequired:false,
        validations: {},
        options:[]
      },
      {
        label: "SECONDARY OWNER",
        inputType: "text",
        isRequired:false,
        validations: {},
        options:[]
      },
      {
        label: "BILLING TYPE",
        inputType: "select",
        isRequired:true,
        validations: {},
        options: [
            {
                label: 'A - AAR',
                id: 1
            },
            {
                label: 'A - BAR',
                id: 2
            }
        ]
      },
  ]