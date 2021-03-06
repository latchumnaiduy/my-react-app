import React from "react";
import { DatePicker } from "./DatePicker";
import { formItemsType } from "../utils/addCarType";
import {
  IonCheckbox,
  IonInput,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonToggle,
} from "@ionic/react";
interface IProps {
  formItems: formItemsType;
}

export const FormInputItems: React.FC<IProps> = ({ formItems }) => {
  return formItems.inputType === "date" ? (
    <>
      <IonLabel className="ion-label">
        {formItems?.label} {formItems?.isRequired && <span className="required">(REQUIRED)</span>}
      </IonLabel>
      <DatePicker></DatePicker>
    </>
  ) : formItems.inputType === "number" || formItems.inputType === "text" ? (
    <>
      <IonLabel className="ion-label">
        {formItems?.label} {formItems?.isRequired && <span className="required">(REQUIRED)</span>}
      </IonLabel>
      <IonInput
        type={formItems.inputType}
        className="ion-datepicker-btn"
      ></IonInput>
    </>
  ) : formItems.inputType === "select" ? (
    <>
      <IonLabel className="ion-label">
        {formItems?.label} {formItems?.isRequired && <span className="required">(REQUIRED)</span>}
      </IonLabel>
      <IonSelect
        okText="Select"
        cancelText="Cancel"
        className="ion-datepicker-btn"
      >
        {formItems?.options &&
          formItems?.options.map((item, i) => {
            return (
              <IonSelectOption value={item?.id} key={`${item?.label}-${i}`}>
                {item?.label}
              </IonSelectOption>
            );
          })}
      </IonSelect>
    </>
  ) : formItems.inputType === "toggle" ? (
    <IonItem type="button" lines="none" className="ion-item-btn">
      <IonLabel className="ion-label">
        {formItems?.label} {formItems?.isRequired && <span className="required">(REQUIRED)</span>}
      </IonLabel>
      <IonItem type="button" lines="none" className="ion-item-btn">
      <IonToggle />
      <IonLabel>{formItems?.secondary_label}</IonLabel>
      </IonItem>
    </IonItem>
  ) : formItems.inputType === "checkbox" ? (
    <>
      <IonLabel className="ion-label">{formItems?.label}</IonLabel>
      {formItems?.options &&
        formItems.options.map((item, i) => {
          return (
            <IonItem
              type="button"
              lines="none"
              key={`${formItems?.label}-${i}`}
              className="ion-item-btn"
            >
              <IonCheckbox />
              <IonLabel>{item?.label}</IonLabel>
            </IonItem>
          );
        })}
    </>
  ) : (
    <></>
  );
};
