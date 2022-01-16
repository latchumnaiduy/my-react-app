import { Redirect, Route } from "react-router-dom";
import React, { useState } from "react";
import {
  IonApp,
  IonButton,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonNav,
  IonPage,
  IonRadio,
  IonRow,
  IonBreadcrumb,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonText,
  IonImg,
  IonReorderGroup,
  IonReorder,
} from "@ionic/react";
import { StatusBar, Style } from "@capacitor/status-bar";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import { warning, move, navigate, trash, camera, pizza, reorderFour } from "ionicons/icons";

/* Basic CSS for apps built with Ionic */
import "../global.css";
import "./cars.css";
import { useHistory } from "react-router-dom";
import CustomHeader from "../components/CustomHeader";
import { Breadcrumbs } from "../components/BreadCrumbs";
import { carsList } from "../utils/sample-data";

const Cars: React.FC = () => {
  let history = useHistory();
  const navigateToCars = () => {
    history.push("/Cars");
  };
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
  const [carslist, setCarsList] = useState([...carsList]);
  const [carsReorder,setCarsReorder] = useState(true);
  return (
    <IonPage>
      <IonHeader>
        <CustomHeader title="Cars"></CustomHeader>
      </IonHeader>
      <IonHeader className="ion-breadcrumb-header">
        <Breadcrumbs breadCrumbItems={breadCrumbItems}></Breadcrumbs>
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonList lines="full"> */}
        <IonReorderGroup disabled={carsReorder} >
          {carslist.map((car, i) => {
            return (
              // <IonReorder  key={`cars-list-${i}`}>
              <IonItem key={`cars-list-${i}`} className="cars-list">
                <div className="cars-list-left">
                  <IonText className="carName">{car.car_name}</IonText>
                  <IonText className="repairs">Repairs: {car.repairs}</IonText>
                </div>
                <div className="cars-list-right">
                  <IonText className="repairs">{car.date}</IonText>
                  <div>
                    <div>
                      <IonImg src="assets/alert.svg"></IonImg>
                    </div>
                    <div>
                      <IonImg src="assets/flag.svg"></IonImg>
                    </div>
                  </div>
                  <IonImg
                    className="add-repair"
                    src="assets/add_repair.svg"
                  ></IonImg>
                </div>
                <IonReorder slot="end">
          <IonIcon icon={reorderFour} />
        </IonReorder>
              </IonItem>
                // </IonReorder>
            );
          })}
          </IonReorderGroup>
        {/* </IonList> */}
      </IonContent>
      <IonFooter class="cars-footer">
        <div className="footer-btns">
          {carsReorder ? 
          <>
          <button className="btn-reorder" onClick={() => {setCarsReorder(false)}}>Reorder</button>
          <button className="btn-addcar">Add Car</button>
          </>
          :
          <>
          <button className="btn-reorder" onClick={() => {setCarsReorder(true)}}>Cancel</button>
          <button className="btn-addcar" onClick={() => {setCarsReorder(true)}}>Save</button>
          </>
          }
        </div>
      </IonFooter>
    </IonPage>
  );
};

export default Cars;
