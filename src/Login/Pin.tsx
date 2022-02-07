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
import React, { useEffect, useMemo, useState } from "react";

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
import moment from "moment";

const Pin: React.FC = () => {
  const [Pin, setPin] = useState<string>("");
  const [iserror, setIserror] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const [noOfAttempts, setNoOfAttempts] = useState<number>(0);
  const [canFreezePageTime, setCanFreezePageTime] = useState<any>();
  const TOTAL_NO_OF_ATTEMPTS = 5;
  const FREEZE_TIME = 30;

  const parseInvalidAttemptTimeStamp = () => {
    try {
      const invalidAttemptTimeStamp =
        localStorage.getItem("invalidAttemptTimeStamp") || "";
      const timeStamp = !isNaN(parseInt(invalidAttemptTimeStamp))
        ? parseInt(invalidAttemptTimeStamp)
        : 0;
      if (timeStamp && moment(timeStamp)) {
        const now = moment(new Date()); //todays date
        const end = moment(timeStamp);
        const duration = moment.duration(now.diff(end));
        const minutes = duration.asMinutes();
        setCanFreezePageTime(minutes);
      } else {
        setCanFreezePageTime(0);
      }
    } catch (error) {
      setCanFreezePageTime(0);
    }
  };

  const parseLocalStoreValue = (): number => {
    try {
      const noOfAttempts = localStorage.getItem("noOfAttempts") || "";
      return !isNaN(parseInt(noOfAttempts)) ? parseInt(noOfAttempts) : 0;
    } catch (error) {
      return 0;
    }
  };

  useEffect(() => {
    setNoOfAttempts(parseLocalStoreValue());
  }, []);

  useEffect(() => {
    var freezePageIntervalClone: any;
    if (noOfAttempts === TOTAL_NO_OF_ATTEMPTS) {
      freezePageIntervalClone = setInterval(() => {
        console.log(canFreezePageTime, "canFreezePage");
        parseInvalidAttemptTimeStamp();
      }, 10000);
    }

    if (noOfAttempts === TOTAL_NO_OF_ATTEMPTS && canFreezePageTime > FREEZE_TIME) {
      clearInterval(freezePageIntervalClone);
      clearValidations();
    }
  }, [noOfAttempts, canFreezePageTime]);

  const clearValidations = () => {
    localStorage.removeItem("invalidAttemptTimeStamp");
    localStorage.removeItem("noOfAttempts");
    setNoOfAttempts(0);
    setCanFreezePageTime(0);
  }

  const handleLogin = () => {
    if (!Pin || Pin.length < 6) {
      const get_noOfAttempts = parseLocalStoreValue();
      const new_noOfAttempts = get_noOfAttempts + 1;
      setNoOfAttempts(new_noOfAttempts);
      localStorage.setItem("noOfAttempts", String(new_noOfAttempts));
      if (new_noOfAttempts === TOTAL_NO_OF_ATTEMPTS) {
        localStorage.setItem(
          "invalidAttemptTimeStamp",
          moment.now().toString()
        );
      }
      parseInvalidAttemptTimeStamp();
    } else {
      clearValidations();
    }
  };

  const canDisableLogin = ():boolean => {
   return  (!Pin || Pin.length < 4) || (canFreezePageTime < FREEZE_TIME && noOfAttempts === TOTAL_NO_OF_ATTEMPTS);
  }

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
                value={Pin}
                onIonChange={(e) => setPin(e.detail.value!)}
              ></IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <div className="footer-btns pin-footer-btn input">
              <button
                className="btn-save"
                disabled={canDisableLogin()}
                onClick={() => handleLogin()}
              >
                Login 
              </button>
            </div>
          </IonRow>
          <IonRow>
            {noOfAttempts > 0 && (
              <div color="red">
                Incorrect PIN. You have { TOTAL_NO_OF_ATTEMPTS - noOfAttempts} remaining attempts before
                your account will be locked out.
              </div>
            )}
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
