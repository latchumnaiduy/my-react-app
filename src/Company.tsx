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
  IonSegment,
  IonSegmentButton,
  IonBackButton,

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
// import "./theme/Track.css";
import "./theme/Company.css";



const Company: React.FC = () => {
  const [text, setText] = useState<string>();
  return (
    <IonPage >
      <IonHeader class="header">
        <IonToolbar class="tool-bar">

          <IonTitle class="companytitle">Company ID</IonTitle>

        </IonToolbar>
      </IonHeader>



      <IonContent class="content">


        <IonList lines="full">
        <IonItem>
            <IonLabel> QUEST 1</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel> QUEST 2</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel> QUEST 3</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel> QUEST 4</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel> QUEST 5</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel> QUEST 6</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel> QUEST 7</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel> QUEST 8</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel> QUEST 9</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel> QUEST 10</IonLabel>
          </IonItem>
        

        </IonList>



      </IonContent>


    </IonPage>
  );
};

export default Company;



