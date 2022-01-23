import React from "react";
import { DatePicker } from "./DatePicker";
import {SearchBar} from "./SearchBar";
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
  onChange: (e:any) => void
}

export const FormInputItems: React.FC<IProps> = ({ formItems, onChange }) => {



  return formItems.inputType === "date" ? (
    <>
      <IonLabel className="ion-cars-label">
        {formItems?.label} {formItems?.isRequired && <span className="required">(Required)</span>}
      </IonLabel>
      <DatePicker value={formItems?.value} onChange={(e) => onChange({[formItems.keyName] : e})}></DatePicker>
    </>
  ) : formItems.inputType === "number" || formItems.inputType === "text" ? (
    <>
      <IonLabel className="ion-cars-label">
        {formItems?.label} {formItems?.isRequired && <span className="required">(Required)</span>}
      </IonLabel>
      <IonInput
        type={formItems.inputType}
        value={formItems?.value}
        onIonChange={(e) => onChange({[formItems.keyName] : e?.detail?.value!})}
        className="ion-datepicker-btn"
      ></IonInput>
    </>
  ): formItems.inputType === "searchBar" ? (
    <>
      <IonLabel className="ion-cars-label">
        {formItems?.label} {formItems?.isRequired && <span className="required">(Required)</span>}
      </IonLabel>
      <SearchBar value={formItems?.value} onChange={(e) => onChange({[formItems.keyName]:e})}/>
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
        value={formItems?.value}
        onIonChange={(e) => onChange({[formItems.keyName]:e?.detail?.value!})}
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
    <IonLabel className="ion-item-btn ion-item-toggle-btn">
      <IonLabel className="ion-cars-label">
        {formItems?.label} {formItems?.isRequired && <span className="required">(Required)</span>}
      </IonLabel>
      <IonLabel className="ion-item-btn-label">
      <IonToggle className="add-car-toggle" value={formItems?.secondary_label} checked={formItems?.secondary_label == formItems?.value} onIonChange={(e) => onChange({[formItems.keyName]:e?.detail?.value!})}/>
      <IonLabel className="ml-8">{formItems?.secondary_label}</IonLabel>
      </IonLabel>
    </IonLabel>
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
              <IonCheckbox className="add-car-checkbox" value={item?.label} checked={item?.label == formItems?.value } onIonChange={(e) => onChange({[formItems.keyName]:e?.detail?.value!})}/>
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