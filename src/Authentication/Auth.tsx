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
import {
  earth,
  mail,
  call,
  settings,
  briefcase,
  person,
  key,
} from "ionicons/icons";
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
import { useHistory } from "react-router-dom";

// import "./theme/Pin.css";
import "./Auth.css";
import { PassThrough } from "stream";
const Auth: React.FC = () => {
  const history = useHistory();
  const [Companyname, setCompanyname] = useState<string>("");
  const [Username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleLogin = () => {
    if (!Companyname) {
      setMessage("Please enter a valid Companyname");
      setIserror(true);
      return;
    }
    if (!Username) {
      setMessage("Please enter a valid Username");
      setIserror(true);
      return;
    }

    if (!password || password.length < 6) {
      setMessage("Please enter your password");
      setIserror(true);
      return;
    }
    history.push("/Pin");
  };

  return (
    <IonPage>
      <IonContent className="auth-ion-content">
        {/* <IonRow>
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
        </IonRow> */}

        <IonIcon icon={settings} class="settings-icon" />

        <IonImg src="/assets/wabtec-logo 1.png" class="logo"></IonImg>
        <IonGrid className="mt-35">
          <IonRow>
            <IonCol size="12">
              <IonInput
                class="input"
                style={{ background: "#fff" }}
                placeholder="Company name"
                type="text"
                value={Companyname}
                onIonChange={(e) => setCompanyname(e.detail.value!)}
              >
                <IonIcon class="icon" icon={briefcase}></IonIcon>
              </IonInput>
            </IonCol>
            <IonCol size="12">
              <IonInput
                class="input"
                style={{ background: "#fff" }}
                placeholder="Username"
                type="text"
                value={Username}
                onIonChange={(e) => setUsername(e.detail.value!)}
              >
                <IonIcon class="icon" icon={person}></IonIcon>
              </IonInput>
            </IonCol>
            <IonCol size="12">
              <IonInput
                class="input"
                style={{ background: "#fff" }}
                placeholder="Password"
                type="password"
                value={password}
                onIonChange={(e) => setPassword(e.detail.value!)}
              >
                <IonIcon class="icon" icon={key}></IonIcon>
              </IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <div className="footer-btns input">
              <button className="btn-save reset btn-cancel">Reset</button>
              <button className="btn-save" onClick={handleLogin}>
                Register{" "}
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

export default Auth;
