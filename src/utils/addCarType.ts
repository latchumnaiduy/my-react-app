export interface formItemsType  {
    label:string;
    keyName:string;
    inputType:string;
    isRequired:Boolean,
    validations: Object,
    options?: FormInputOptions[],
    secondary_label?:string,
    [key:string]:any
}
type FormInputOptions ={
    label: string;
    id:number,
    isChecked?:boolean
}
