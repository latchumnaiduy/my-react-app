export interface formItemsType  {
    label:string;
    inputType:string;
    isRequired:Boolean,
    validations: Object,
    options?: FormInputOptions[],
    secondary_label?:string
}
type FormInputOptions ={
    label: string;
    id:number
}
