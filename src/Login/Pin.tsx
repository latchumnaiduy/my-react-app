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

import "./Pin.css";
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
      <IonContent className="auth-ion-content">
        <IonGrid>
          <IonRow>
            <IonCol size="12" class="ion-justify-content-end">
              <IonButton class="settings-icon deactivate">
                {" "}
                Deactivate
              </IonButton>
            </IonCol>
            <IonCol size="12" class="ion-justify-content-center">
              <IonImg src="/assets/wabtec-logo 1.png" class="logo"></IonImg>
            </IonCol>
            <IonCol size="12">
              <IonInput
                class="input pin-input"
                style={{ background: "#fff" }}
                placeholder="Enter Pin"
                type="text"
              ></IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <div className="footer-btns pin-footer-btn input">
              <button className="btn-save" onClick={handleLogin}>
                Login
              </button>
            </div>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter class="cars-footer">
        <div className="footer-btns auth-footer">
          <div className="footer-btns-contact">
            <p>
              <IonIcon icon={call} />
            </p>
            <p>CALL</p>
          </div>
          <div className="footer-btns-contact">
            <p>
              <IonIcon icon={mail} />
            </p>
            <p>EMAIL</p>
          </div>
          <div className="footer-btns-contact">
            <p>
              <IonIcon icon={earth} />
            </p>
            <p>VISIT US</p>
          </div>
        </div>
      </IonFooter>
    </IonPage>
  );
};

export default Pin;
