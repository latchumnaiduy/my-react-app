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
import { Breadcrumbs } from "./components/BreadCrumbs";
import "./addCar.css";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/Locations.css";
import "./theme/Cars.css";
import CustomHeader from "./components/CustomHeader";

import { formItems } from "./utils/sample-data.js";
import { FormInputItems } from "./components/FormInputItems";
import { formItemsType } from "./utils/addCarType";

const AddCar: React.FC = () => {
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
      <IonHeader class="location-tool-bar">
        <CustomHeader title="Add Car 1"></CustomHeader>
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
          <button className="btn-save" disabled>Save and Add Repairs</button>
          <button className="btn-save">Save and Add Next Car</button>
        </div>
        <div className="footer-btns">
          <button className="btn-save btn-cancel">Cancel</button>
          <button className="btn-save">Save </button>
        </div>
      </IonFooter>
    </IonPage>
  );
};

export default AddCar;