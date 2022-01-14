import { Redirect, Route } from "react-router-dom";
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
  IonText,
} from "@ionic/react";
import Breadcrumbs from '@mui/material/Breadcrumbs';
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

import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  return {
    height: theme.spacing(5),
    color: "white",
    fontWeight: theme.typography.fontWeightRegular,
    backgroundColor: "#027dba",
    borderRadius: 0,
    
  };
}); 

const Cardetails: React.FC = () => {
  return (
    <IonPage>
      <IonHeader class="header">
        <IonToolbar class="tool-bar">
          <IonButtons>
            <IonButton>
              <IonIcon slot="start" src="assets/arrow_back.svg" />
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
      <IonHeader>
        <IonToolbar class="sub-header">
          <IonGrid>
            <IonRow>
            <Breadcrumbs separator=" "  aria-label="breadcrumb">
              <StyledBreadcrumb label="Home"/>
              <StyledBreadcrumb label="Catalog" />
              <StyledBreadcrumb label="Accessories" />
            </Breadcrumbs>
              {/* <IonCol>
                <IonBreadcrumb href="https://ionicframework.com/docs/api/grid">
                  Electronics
                </IonBreadcrumb>
                <IonImg src="assets/Breadcrumb.svg"></IonImg>
                <h4>hihih</h4>
              </IonCol>
              <IonCol>
                <IonImg src="assets/Breadcrumb1.svg"></IonImg>
              </IonCol>
              <IonCol>
                <IonImg src="assets/Breadcrumb1.svg"></IonImg>
              </IonCol> */}
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid fixed={true}>
          <IonItem lines="full" color="rgba(0, 0, 0, 0.54)">
            <IonLabel>CAR:</IonLabel>
          </IonItem>

          <IonItem lines="full" color="rgba(0, 0, 0, 0.54)">
            <IonLabel>CHECK IN DATE:</IonLabel>
          </IonItem>

          <IonItem lines="full" color="rgba(0, 0, 0, 0.54)">
            <IonLabel>CAR KIND:</IonLabel>
          </IonItem>

          <IonItem lines="full" color="rgba(0, 0, 0, 0.54)">
            <IonLabel>LOADED:</IonLabel>
          </IonItem>

          <IonItem lines="full" color="rgba(0, 0, 0, 0.54)">
            <IonLabel>STATUS:</IonLabel>
          </IonItem>

          <IonItem lines="full" color="rgba(0, 0, 0, 0.54)">
            <IonLabel>OWNER:</IonLabel>
          </IonItem>

          <IonItem lines="full" color="rgba(0, 0, 0, 0.54)">
            <IonLabel>SECONDARY OWNER:</IonLabel>
          </IonItem>

          <IonItem lines="full" color="rgba(0, 0, 0, 0.54)">
            <IonLabel>BILLING TYPE:</IonLabel>
          </IonItem>

          <IonGrid>
            <IonRow>
              <IonCol>
                <IonTabButton tab="alert">
                  <IonIcon class="camera" src="assets/add_a_photo_24px.svg" />
                </IonTabButton>
              </IonCol>
            </IonRow>

            <IonGrid>
              <IonRow class="image">
                <IonCol class="image-col"></IonCol>
                <IonCol class="image-col"></IonCol>
                <IonCol class="image-col"></IonCol>
              </IonRow>
              <IonRow>
                <IonIcon
                  class="swiper-pagination-bullet"
                  src="assets/Ellipse 1.svg"
                />
                <IonIcon
                  class="swiper-pagination-bullet"
                  src="assets/Ellipse 2.svg"
                />
                <IonIcon
                  class="swiper-pagination-bullet"
                  src="assets/Ellipse 2.svg"
                />
              </IonRow>
            </IonGrid>
          </IonGrid>

          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton class="repair-btn">View Repairs</IonButton>
              </IonCol>
              <IonCol>
                <IonButton class="edit-btn">Edit Car</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonGrid>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonTabButton tab="alert">
                  <IonIcon icon={warning} class="warning" />
                  <IonLabel>ALERT</IonLabel>
                </IonTabButton>
              </IonCol>
              <IonCol>
                <IonTabButton tab="alert">
                  <IonIcon icon={move} />
                  <IonLabel>MOVE</IonLabel>
                </IonTabButton>
              </IonCol>
              <IonCol>
                <IonTabButton tab="alert">
                  <IonIcon icon={navigate} />
                  <IonLabel>CHECKOUT</IonLabel>
                </IonTabButton>
              </IonCol>
              <IonCol>
                <IonTabButton tab="alert">
                  <IonIcon icon={trash} />
                  <IonLabel>DELETE</IonLabel>
                </IonTabButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Cardetails;
