import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonFooter,
  IonItem,
  IonButton,
} from "@ionic/react";
import { Breadcrumbs } from "../components/BreadCrumbs";
import "./Tab1.scss";
import { formItems } from "../utils/sample-data.js";
import { FormInputItems } from "../components/FormInputItems";
import { formItemsType } from "../utils/addCarType";

const Tab1: React.FC = () => {
  const breadCrumbItems = [
    {
      name: "Location",
      value: "QUEST1",
      path: "/location",
    },
    {
      name: "Track1",
      value: "Track",
      path: "/track1",
    },
  ];
  const formItemsClone: formItemsType[] = [...formItems];
  return (
    <IonPage>
      <IonHeader className="ion-header">
        <IonToolbar className="ion-header-toolbar">
          <IonTitle>Add Car 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonHeader className="ion-breadcrumb-header">
        <Breadcrumbs breadCrumbItems={breadCrumbItems}></Breadcrumbs>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            {formItemsClone &&
              formItemsClone.map((item, i) => {
                return (
                  <IonCol
                    size="12"
                    className="ion-col-item"
                    key={`form-items-${i}`}
                  >
                    <FormInputItems formItems={item}></FormInputItems>
                  </IonCol>
                );
              })}
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter className="ion-footer">
        <div className="footer-btns">
          <button  className="btn-save">Save and Add Repairs</button>
          <button  className="btn-save">Save and Add Next Car</button>
        </div>
        <div className="footer-btns">
          <button   className="btn-save btn-cancel">Cancel</button>
          <button  className="btn-save">Save </button>
        </div>
      </IonFooter>
    </IonPage>
  );
};

export default Tab1;
