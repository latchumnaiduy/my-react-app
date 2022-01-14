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
  IonImg,
  IonInput,
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
  IonTabButton,
  IonCard,
  IonItemDivider,
  IonText,
} from "@ionic/react";
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
import "./theme/Locations.css";
import "./theme/Cardetails.css";
import { Hidden } from "@mui/material";


const Cardetails: React.FC = () => {
  const [text, setText] = useState<string>();
  return (
    <IonPage>
      <IonHeader mode="ios" >
        <IonToolbar class="toolbar-ios">
          <IonButtons>
            <IonButton>
              <IonIcon class="back-button" slot="start" src="assets/arrow_back.svg" />
            </IonButton>
          </IonButtons>
          <IonTitle class="title">Car Details</IonTitle>
          <IonButtons slot="primary">
            <IonButton>
              <IonIcon slot="end" src="assets/More-Vertical.svg" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      {/* <IonHeader> */}
      <IonToolbar class="sub-header">
        <IonGrid>
          <IonRow>
            <IonCol>
              <ul className="breadcrumb">
                <li>
                  <a href="https://www.quest-global.com/">Quest1</a>
                </li>
                <li>
                  <a href="https://www.wabteccorp.com/digital-electronics/network-logistics/expressyard-car-repair-billing">
                    Track 1
                  </a>
                </li>
                <li>
                  <a href="#">Cars 2 </a>
                </li>
              </ul>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonToolbar>
      {/* </IonHeader> */}
      <IonContent >
        <IonItem lines="full" className="shadow">
          <IonLabel>CAR:</IonLabel> 
        </IonItem>

        <IonItem lines="full" >
          <IonLabel>CHECK IN DATE:</IonLabel>
        </IonItem>
        {/* <IonItem>
            <IonLabel position="fixed"  >CAR KIND:</IonLabel>
            <IonInput value={text}></IonInput>
          </IonItem> */}
        <IonItem lines="full" >
          <IonLabel>CAR KIND:</IonLabel>
        </IonItem>

        <IonItem lines="full" >
          <IonLabel>LOADED:</IonLabel>
        </IonItem>

        <IonItem lines="full">
          <IonLabel>STATUS:</IonLabel>
        </IonItem>

        <IonItem lines="full">
          <IonLabel>OWNER:</IonLabel>
        </IonItem>

        <IonItem lines="full">
          <IonLabel>SECONDARY OWNER:</IonLabel>
        </IonItem>

        <IonItem lines="full" className="shadow-bottom">
          <IonLabel>BILLING TYPE:</IonLabel>
        </IonItem>

        <IonGrid>
          <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonTabButton tab="alert">
                  <IonIcon class="camera" src="assets/add_a_photo_24px.svg" />
                </IonTabButton>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonGrid>
            <IonRow class="image">
              <IonCol class="image-col"></IonCol>
              <IonCol class="image-col"></IonCol>
              <IonCol class="image-col"></IonCol>
            </IonRow>
            <IonRow className="ion-text-start">
              {/* <IonCol> */}
              <IonIcon
                class="swiper-pagination-bullet"
                src="assets/Ellipse 1.svg"
              />
              {/* </IonCol> */}
              {/* <IonCol> */}
              <IonIcon
                class="swiper-pagination-bullet"
                src="assets/Ellipse 2.svg"
              />
              {/* </IonCol> */}
              {/* <IonCol> */}
              <IonIcon
                class="swiper-pagination-bullet"
                src="assets/Ellipse 2.svg"
              />
              {/* </IonCol> */}
            </IonRow>
            
          </IonGrid>
          </IonToolbar>
        </IonGrid>

        <IonGrid>
          <IonRow>
            <IonCol class="btn-repair">
              <IonButton class="repair-btn">View Repairs</IonButton>
            </IonCol>
            <IonCol>
              <IonButton class="edit-btn">Edit Car</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter>
        {/* <IonToolbar class="size"> */}
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonTabButton tab="alert">
                  <IonIcon icon={warning} class="warning" />
                  <IonLabel class="size-ios">ALERT</IonLabel>
                </IonTabButton>
              </IonCol>
              <IonCol>
                <IonTabButton tab="alert">
                  <IonIcon icon={move} class="icons-ios" />
                  <IonLabel class="size-ios">MOVE</IonLabel>
                </IonTabButton>
              </IonCol>
              <IonCol>
                <IonTabButton tab="alert">
                  <IonIcon icon={navigate} class="icons-ios" />
                  <IonLabel class="size-ios">CHECKOUT</IonLabel>
                </IonTabButton>
              </IonCol>
              <IonCol>
                <IonTabButton tab="alert">
                  <IonIcon icon={trash} class="icons-ios" />
                  <IonLabel class="size-ios">DELETE</IonLabel>
                </IonTabButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        {/* </IonToolbar> */}
      </IonFooter>
    </IonPage>
  );
};

export default Cardetails;
