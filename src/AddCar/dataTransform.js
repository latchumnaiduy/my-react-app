import moment from 'moment';

export const setEditData = (formValues) => {
    formValues.CAR_CHECK_IN_DATE = formValues.CAR_CHECK_IN_DATE ? moment(formValues.CAR_CHECK_IN_DATE) : null;
    formValues.CAR_REPAIR_DATE = formValues.CAR_REPAIR_DATE ? moment(formValues.CAR_REPAIR_DATE) : null;
    return formValues;
    // let formValuesClone = {...data};
    // let formItemsClone = [...formItems];
    // formItemsClone.map(x => x['value'] = formValuesClone[x.keyName]);
    // return formItemsClone;
}

const data = {
    "CAR_CHECK_IN_DATE": "01/24/2022",
    "CAR_REPAIR_DATE": "01/24/2022",
    "CAR_INITIAL": "123456cxz",
    "CAR_NUMBER": "1234",
    "CAR_UMLER": 'Yes',
    "CAR_KIND": 3,
    "LOADED": 'Empty',
    "STATUS": "As Awaiting Owners Material",
    "OWNER": "Owner 2",
    "SECONDARY_OWNER": "sod",
    "BILLING_TYPE": 1
}
// sample data for edit car
export const editFormValues = {
    "CAR_CHECK_IN_DATE": "2022-02-01T15:29:21.866Z",
    "CAR_REPAIR_DATE": "2022-02-10T15:29:34.412Z",
    "CAR_INITIAL": "34dhbs",
    "CAR_NUMBER": "2434308",
    "CAR_KIND": 3,
    "STATUS": "As Awaiting Shop Space",
    "OWNER": 2,
    "SECONDARY_OWNER": "ajsbdh",
    "BILLING_TYPE": 2,
    "CAR_UMLER":false,
    "LOADED":true
}