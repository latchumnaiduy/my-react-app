

export const setEditData = (editedData, formItems) => {
    let formValuesClone = {...data};
    let formItemsClone = [...formItems];
    formItemsClone.map(x => x['value'] = formValuesClone[x.keyName]);
    return formItemsClone;
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