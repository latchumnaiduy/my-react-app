export interface formItemsType  {
    label:string;
    keyName:string;
    inputType:string;
    isRequired:Boolean,
    validations: Object,
    options?: FormInputOptions[],
    checkboxOptions?:FormInputCheckboxOptions[],
    secondary_label?:string,
    [key:string]:any
}
type FormInputOptions ={
    label: string;
    id:number,
    isChecked?:boolean
}
type FormInputCheckboxOptions ={
    label: string;
    value:string
}
