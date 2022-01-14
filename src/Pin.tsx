import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonButton,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonNav,
  IonPage,
  IonAlert,
  IonRadio,
  IonRow,
  IonToolbar,
  IonTabButton,
} from "@ionic/react";
import { earth, mail, call } from "ionicons/icons";
import React, { useState } from "react";

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
import "./theme/Cardetails.css";
import "./theme/Pin.css";
const Pin: React.FC = () => {
  const [Pin, setPin] = useState<string>("");
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleLogin = () => {
    if (!Pin || Pin.length < 4) {
      setMessage(" Enter Correct PIN");
      setIserror(true);
      return;
    }
  };
  return (
    <IonPage>
      <IonContent>
        <IonRow>
          <IonCol>
            <IonAlert
              isOpen={iserror}
              onDidDismiss={() => setIserror(false)}
              cssClass="my-custom-class"
              header={"Error!"}
              message={message}
              buttons={["Dismiss"]}
            />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonButton class="deactivate"> Deactivate</IonButton>
        </IonRow>
        <IonImg src="/assets/wabtec-logo 1.png" class="logo"></IonImg>
        <IonInput
          class="pin-input"
          placeholder="Enter PIN"
          type="text"
          value={Pin}
          onIonChange={(e) => setPin(e.detail.value!)}
        ></IonInput>
        {Pin ? (
          <IonButton class="login-btn" onClick={handleLogin}>
            Login
          </IonButton>
        ) : (
          <IonButton class="disabled-btn" disabled>
            Login
          </IonButton>
        )}
        <IonFooter>
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonTabButton tab="alert">
                  <IonIcon icon={call} />
                  <IonLabel>CALL</IonLabel>
                </IonTabButton>
              </IonCol>
              <IonCol>
                <IonTabButton tab="alert">
                  <IonIcon icon={mail} />
                  <IonLabel>EMAIL</IonLabel>
                </IonTabButton>
              </IonCol>
              <IonCol>
                <IonTabButton tab="alert">
                  <IonIcon icon={earth} />
                  <IonLabel>VISIT US</IonLabel>
                </IonTabButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonFooter>
      </IonContent>
      
      
    </IonPage>
  );
};

export default Pin;
