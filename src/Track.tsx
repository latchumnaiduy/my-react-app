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
  IonText,
  IonItemDivider,
} from "@ionic/react";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import { warning, move, navigate, trash, camera } from "ionicons/icons";
import { useHistory } from "react-router-dom";
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
import "./theme/Track.css";

const Track: React.FC = () => {
  const history = useHistory();

  const navigateToCars = () => {
    history.push("/Cars");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="track-tool-bar custom-main-header">
          <IonButtons>
            <IonButton>
              <IonIcon
                class="track-back-btn"
                slot="start"
                src="assets/arrow_back.svg"
                // onClick={() => history.goBack()}
              />
            </IonButton>
          </IonButtons>
          <IonTitle class="track-title" slot="">
            Tracks
          </IonTitle>
          <IonButtons slot="primary">
            <IonButton>
              <IonIcon
                slot="end"
                class="menu-btn"
                src="assets/More-Vertical.svg"
              />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonHeader>
        <IonToolbar class="track-sub-header custom-toolbar">
          {/* <IonGrid> 
           <IonRow>  */}
          {/* <IonCol>  */}
          <ul className="trackbreadcrumb">
            <li>
              <a>Quest 1</a>
            </li>
          </ul>
          {/* </IonCol> */}
          {/* </IonRow> 
         </IonGrid>    */}
        </IonToolbar>
      </IonHeader>
      <IonToolbar>
        <IonSegment value="ActiveTrack" class="trackActive" mode="md">
          <IonSegmentButton class="ionsegmentclass" value="ActiveTrack">
            <IonLabel class="alltrack-btn">Active Tracks</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton class="ionsegmentclass" value="All">
            <IonLabel class="alltrack-btn">All Tracks</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonToolbar>
      <IonContent class="content">
        {/* <IonGrid fixed={true}> */}

        <IonList>
          <IonItem class="tracklist" onClick={navigateToCars}>
            <IonText class="track">Track 1</IonText>
            <IonText class="car">Cars: 4</IonText>

            <IonLabel className="ion-text-end ">
              <IonIcon
                class="icon-railcar"
                src="assets/Add Railcar.svg"
              ></IonIcon>
            </IonLabel>
          </IonItem>

          <IonItem class="tracklist">
            <IonText class="track">Track 2</IonText>
            <IonText class="car">Cars: 3</IonText>

            <IonLabel className="ion-text-end">
              <IonIcon
                class="icon-railcar"
                src="assets/Add Railcar.svg"
              ></IonIcon>
            </IonLabel>
          </IonItem>
          <IonItem class="tracklist">
            <IonText class="track">Track 3</IonText>
            <IonText class="car">Cars: 2</IonText>

            <IonLabel className="ion-text-end ">
              <IonIcon
                class="icon-railcar"
                src="assets/Add Railcar.svg"
              ></IonIcon>
            </IonLabel>
          </IonItem>
          <IonItem class="tracklist">
            <IonText class="track">Track 4</IonText>
            <IonText class="car">Cars: 4</IonText>

            <IonLabel className="ion-text-end ">
              <IonIcon
                class="icon-railcar"
                src="assets/Add Railcar.svg"
              ></IonIcon>
            </IonLabel>
          </IonItem>
          <IonItem class="tracklist">
            <IonText class="track">Track 5</IonText>
            <IonText class="car">Cars: 1</IonText>

            <IonLabel className="ion-text-end ">
              <IonIcon
                class="icon-railcar"
                src="assets/Add Railcar.svg"
              ></IonIcon>
            </IonLabel>
          </IonItem>
          <IonItem class="tracklist">
            <IonText class="track">Track 6</IonText>
            <IonText class="car">Cars: 2</IonText>

            <IonLabel className="ion-text-end ">
              <IonIcon
                class="icon-railcar"
                src="assets/Add Railcar.svg"
              ></IonIcon>
            </IonLabel>
          </IonItem>
          <IonItem class="tracklist">
            <IonText class="track">Track 7</IonText>
            <IonText class="car">Cars: 3</IonText>

            <IonLabel className="ion-text-end ">
              <IonIcon
                class="icon-railcar"
                src="assets/Add Railcar.svg"
              ></IonIcon>
            </IonLabel>
          </IonItem>
          <IonItem class="tracklist">
            <IonText class="track">Track 8</IonText>
            <IonText class="car">Cars: 2</IonText>

            <IonLabel className="ion-text-end ">
              <IonIcon
                class="icon-railcar"
                src="assets/Add Railcar.svg"
              ></IonIcon>
            </IonLabel>
          </IonItem>
          <IonItem class="tracklist">
            <IonText class="track">Track 9</IonText>
            <IonText class="car">Cars: 4</IonText>

            <IonLabel className="ion-text-end ">
              <IonIcon
                class="icon-railcar"
                src="assets/Add Railcar.svg"
              ></IonIcon>
            </IonLabel>
          </IonItem>
          <IonItem class="tracklist">
            <IonText class="track">Track 10</IonText>
            <IonText class="car">Cars: 0</IonText>

            <IonLabel className="ion-text-end ">
              <IonIcon
                class="icon-railcar"
                src="assets/Add Railcar.svg"
              ></IonIcon>
            </IonLabel>
          </IonItem>
        </IonList>

        {/* </IonGrid> */}
      </IonContent>
    </IonPage>
  );
};

export default Track;
