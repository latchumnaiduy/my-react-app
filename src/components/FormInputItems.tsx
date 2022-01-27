import React from "react";
// import { DatePicker } from "./DatePicker";
import {SearchBar} from "./SearchBar";
import { formItemsType } from "../utils/addCarType";
import { Form, Input, DatePicker, Select, Switch, Checkbox, Radio } from 'antd';
import {
  IonCard,
  IonCheckbox,
  IonInput,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonToggle,
  IonImg
} from "@ionic/react";
interface IProps {
  formItems: formItemsType;
  onChange: (e:any) => void
}

export const FormInputItems: React.FC<IProps> = ({ formItems, onChange }) => {
  const { Option } = Select;
  const CheckboxGroup = Checkbox.Group;

  return formItems.inputType === "date" ? (
    <Form.Item
    label={<IonLabel className="ion-cars-label">
    {formItems?.label} {formItems?.isRequired && <span className="required">(Required)</span>}
  </IonLabel>}
    name={formItems.keyName}
    className={`${formItems.keyName}`}
    rules={[{ required: true, message: 'Please input the field!' }]}>
      
      <DatePicker suffixIcon={<IonImg className="ion-datepicker-inner-btn-icon" src="assets/calendar.svg"></IonImg>}></DatePicker>
    </Form.Item>
  ) : formItems.inputType === "number" || formItems.inputType === "text" ? (
   <Form.Item
    label={<IonLabel className="ion-cars-label">
    {formItems?.label} {formItems?.isRequired && <span className="required">(Required)</span>}
  </IonLabel>}
    name={formItems.keyName}
    rules={[{ required: true, message: 'Please input the field!' }]}
  >
      <Input
        type={formItems.inputType}
        className="ion-datepicker-btn"
      ></Input>
    </Form.Item>
  ):
   (formItems.inputType === "select" || formItems.inputType === "searchBar") ? (
    <Form.Item
    label={ <IonLabel className="ion-cars-label">
    {formItems?.label} {formItems?.isRequired && <span className="required">(Required)</span>}
  </IonLabel>}
    name={formItems.keyName}
    rules={[{ required: true, message: 'Please input the field!' }]}>
      <Select
        showSearch={formItems.inputType === "searchBar" ? true : false}
        optionFilterProp="children"
        filterOption={(input, option:any) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        filterSort={(optionA, optionB) =>
          optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
        }
      >
        {formItems?.options &&
          formItems?.options.map((item, i) => {
            return (
              <Option value={item?.id} key={`${item?.label}-${i}`}>
                {item?.label}
              </Option>
            );
          })}
      </Select>
    </Form.Item>
  ) : formItems.inputType === "toggle" ? (
    <Form.Item 
    label=""
    name={formItems.keyName}>
    <IonLabel className="ion-item-btn ion-item-toggle-btn">
      <IonLabel className="ion-cars-label">
      {formItems?.label} {formItems?.isRequired && <span className="required">(Required)</span>}
    </IonLabel>
        <IonLabel className="ion-item-btn-label">
        <Switch className="add-car-toggle"  checked={formItems?.value}/>
        <IonLabel className="ml-8">{formItems?.secondary_label}</IonLabel>
        </IonLabel>
      </IonLabel>
    </Form.Item>
  ) : formItems.inputType === "checkbox" ? (
    <Form.Item
    label={<IonLabel className="ion-cars-label">{formItems?.label}</IonLabel>}
    name={formItems.keyName}
    rules={[{ required: true, message: 'Please input the field!' }]}>
      <IonCard className="add-car-statusCard">
          <Radio.Group className="add-car-checkbox" options={formItems?.checkboxOptions}
            >
            </Radio.Group>
        </IonCard>
    </Form.Item>
  ) : (
    <></>
  );
};