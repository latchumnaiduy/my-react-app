import React from "react";
import { DatePicker } from "./DatePicker";
import { formItemsType } from "../utils/addCarType";
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
}

export const FormInputItems: React.FC<IProps> = ({ formItems }) => {
  return formItems.inputType === "date" ? (
    <>
      <IonLabel className="ion-cars-label">
        {formItems?.label} {formItems?.isRequired && <span className="required">(Required)</span>}
      </IonLabel>
      <DatePicker></DatePicker>
    </>
  ) : formItems.inputType === "number" || formItems.inputType === "text" ? (
    <>
      <IonLabel className="ion-cars-label">
        {formItems?.label} {formItems?.isRequired && <span className="required">(Required)</span>}
      </IonLabel>
      <IonInput
        type={formItems.inputType}
        className="ion-datepicker-btn"
      ></IonInput>
    </>
  ) : formItems.inputType === "select" ? (
    <>
      <IonLabel className="ion-cars-label">
        {formItems?.label} {formItems?.isRequired && <span className="required">(Required)</span>}
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
      <IonLabel className="ion-cars-label">
        {formItems?.label} {formItems?.isRequired && <span className="required">(Required)</span>}
      </IonLabel>
      <IonItem type="button" lines="none" className="ion-item-btn">
      <IonToggle className="add-car-toggle"/>
      <IonLabel>{formItems?.secondary_label}</IonLabel>
      </IonItem>
    </IonItem>
  ) : formItems.inputType === "checkbox" ? (
    <>
      <IonLabel className="ion-cars-label">{formItems?.label}</IonLabel>
      <IonCard className="add-car-statusCard">
      {formItems?.options &&
        formItems.options.map((item, i) => {
          return (
            <IonItem
              type="button"
              lines="none"
              key={`${formItems?.label}-${i}`}
              className="ion-item-btn"
            >
              <IonCheckbox className="add-car-checkbox" />
              <IonLabel className="add-car-statusCard-label">{item?.label}</IonLabel>
            </IonItem>
          )
        })}
        </IonCard>
    </>
  ) : (
    <></>
  );
};