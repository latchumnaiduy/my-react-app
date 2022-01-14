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

} from "@ionic/react";
import { StatusBar, Style } from '@capacitor/status-bar';
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import { warning, move, navigate, trash, camera } from "ionicons/icons";

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
import "./theme/Cars.css";
import { useHistory } from "react-router-dom";
import CustomHeader from "./components/customHeader";

const Cars: React.FC = () => {
  let history = useHistory();
  const navigateToCars=()=>{
    history.push('/Cars');
  }  
  return (

    <IonPage>
  <IonHeader>
  <CustomHeader title="Cars"></CustomHeader>
  </IonHeader>
      <IonHeader>
        <IonToolbar class="cars-sub-header" className="shadow-bottom" >
          <IonGrid>
            <IonRow >
              <IonCol>
                <ul className="breadcrumb"> 
                  <li>
                    <a>Quest 1</a>
                  </li>
                  <li>
                    <a>Track 1</a>
                  </li>
                </ul>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
        </IonHeader>
      <IonContent class="content">
        <IonList lines="full" >
          <IonItem class="car-list" onClick={navigateToCars}>
          <div className="footer-btns">
        <div>
            <IonText class="car-name">ABCE 12345</IonText>
            <IonText class="repair">Repairs:0</IonText>
            </div>
            <div className="footer-btns">
            <IonText class="date">22/10/2021</IonText>
              <IonIcon class="add-repair" src="assets/Add Repair.svg"></IonIcon>
            </div>
          </div>
          </IonItem>
          <IonItem class="car-list">
            <IonText class="car-name">BMXF 5689</IonText>
            <IonText class="repair">Repairs:0</IonText>
            <IonText class="date">22/10/2021</IonText>
            <IonLabel>
              <IonIcon class="add-repair" src="assets/Add Repair.svg"></IonIcon>
            </IonLabel>
          </IonItem>
          <IonItem class="car-list">
            <IonText class="car-name">CKX 9643</IonText>
            <IonText class="repair">Repairs:3</IonText>
            <IonText class="date">22/10/2021</IonText>
            <IonLabel>
              <IonIcon class="add-repair" src="assets/Add Repair.svg"></IonIcon>
            </IonLabel>
          </IonItem>
          <IonItem class="car-list">
            <IonText class="car-name">CSX 1234</IonText>
            <IonText class="repair">Repairs:5</IonText>
            <IonText class="date">22/10/2021</IonText>
            <IonLabel>
              <IonIcon class="add-repair" src="assets/Add Repair.svg"></IonIcon>
            </IonLabel>
          </IonItem>
          <IonItem class="car-list">
            <IonText class="car-name">BCXF 3456</IonText>
            <IonText class="repair">Repairs:6</IonText>
            <IonText class="date">22/10/2021</IonText>
            <IonLabel>
              <IonIcon class="add-repair" src="assets/Add Repair.svg"></IonIcon>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
      <IonFooter class="cars-footer">
      <div className="footer-btns">
          <button  className="btn-reorder">Reorder</button>
          <button  className="btn-addcar">Add Car</button>
        </div>
      </IonFooter>
    </IonPage>
  );
};

export default Cars;
