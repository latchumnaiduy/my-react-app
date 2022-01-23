import { Redirect, Route } from "react-router-dom";
import React, { useState } from "react";
import {
  IonButton,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonToolbar,
  IonTabButton,
  
  IonText,
  IonAlert,
  IonModal,
  IonTabs,
  IonTabBar,
  IonImg,
  IonSlides,
  IonSlide,
  IonBackdrop,
} from "@ionic/react";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import { warning, move, navigate, trash, camera, push } from "ionicons/icons";
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


import "./Cardetails.css";
import CustomHeader from "../components/CustomHeader";
import { Breadcrumbs } from "../components/BreadCrumbs";


const Cardetails: React.FC = () => {
  const [text, setText] = useState<string>();
  const [myModal, setMyModal] = useState({isOpen: false});
  const [showAlert1, setShowAlert1] = useState(false);
  const [isRegister, SetisRegister] = useState<boolean>(true);
  const history = useHistory();
  const navigateToCheckout = () => {
    history.push("./Checkout");
    // let history = useHistory();
  };
  const userData = {
    car: "BMX 5989",
    checkdate: "12/01/2022",
    kind: "BCovered Hopper",
    loaded: "Empty ",
    status: "",
    owner: "TEST3-TEST Customer",
    owner2: "Test",
    billing_type: "A-AAR",
  };
  const breadCrumbItems = [
    {
      name: "Location",
      value: "QUEST1",
      path: "./Locations",
    },
    {
      name: "Track",
      value: "Track1",
      path: "./Track",
    },
    {
      name: "Car",
      value: "BMX 8694",
      path: "./Cars",
    },
  ]
  return (
      <IonPage>
         
      <CustomHeader title="Car Details"></CustomHeader>

      <Breadcrumbs breadCrumbItems={breadCrumbItems}></Breadcrumbs>
     
      <IonContent class="cardetail-ion-content">
        <IonItem lines="full" className="cardetail-label-shadow">
          <IonLabel class="ion-label">CAR:</IonLabel>
          {/* <IonLabel class="ion-label">CAR: <text style={{ fontWeight:120, fontFamily:'Robotoregular', color: '#ccc'}}> { userData.car }</text> </IonLabel>  */}
        </IonItem>

        <IonItem lines="full" className="cardetail-label-shadow">
          <IonLabel class="ion-label">CHECK IN DATE:</IonLabel>
          {/* <IonLabel class="ion-label">CHECK IN DATE: <text style={{ fontWeight:120, fontFamily:'Robotoregular', color: '#ccc'}}> 
          { userData.checkdate }</text> </IonLabel>  */}
        </IonItem>
        <IonItem lines="full" className="cardetail-label-shadow">
          <IonLabel class="ion-label">CAR KIND:</IonLabel>
          {/* <IonLabel class="ion-label">CAR KIND: <text style={{ fontWeight:120, fontFamily:'Robotoregular', color: '#ccc'}}> 
          { userData.kind }</text> </IonLabel>  */}
        </IonItem>

        <IonItem lines="full" className="cardetail-label-shadow">
          <IonLabel class="ion-label">LOADED:</IonLabel>
          {/* <IonLabel class="ion-label">LOADED: <text style={{ fontWeight:120, fontFamily:'Robotoregular', color: '#ccc'}}> 
          { userData.loaded }</text> </IonLabel>  */}
        </IonItem>

        <IonItem lines="full" className="cardetail-label-shadow">
          <IonLabel class="ion-label">STATUS:</IonLabel>
          {/* <IonLabel class="ion-label">STATUS: <text style={{ fontWeight:120, fontFamily:'Robotoregular', color: '#ccc'}}> 
          { userData.status }</text> </IonLabel>  */}
        </IonItem>

        <IonItem lines="full" className="cardetail-label-shadow">
          <IonLabel class="ion-label">OWNER:</IonLabel>
          {/* <IonLabel class="ion-label">OWNER: <text style={{ fontWeight:120, fontFamily:'Robotoregular', color: '#ccc'}}> 
          { userData.owner }</text> </IonLabel>  */}
        </IonItem>

        <IonItem lines="full" className="cardetail-label-shadow">
          <IonLabel class="ion-label"> SECONDARY OWNER:</IonLabel>
          {/* <IonLabel class="ion-label">SECONDARY OWNER: <text style={{ fontWeight:120, fontFamily:'Robotoregular', color: '#ccc'}}> 
          { userData.car }</text> </IonLabel>  */}
        </IonItem>

        <IonItem lines="full" className="cardetail-label-shadow-bottom ">
          <IonLabel class="ion-label">BILLING TYPE:</IonLabel>
          {/* <IonLabel class="ion-label">BILLING TYPE: <text style={{ fontWeight:120, fontFamily:'Robotoregular', color: '#ccc'}}> 
          { userData.billing_type }</text> </IonLabel>  */}
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
            <IonGrid className="bg-white">
              <IonRow class="image">
                <IonCol class="image-col"></IonCol>
                <IonCol class="image-col"></IonCol>
                <IonCol class="image-col"></IonCol>
              </IonRow>
              <IonRow className="ion-justify-center">
                {/* <IonCol> */}
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
          </IonToolbar>
        </IonGrid>

        {/* <IonCol class="cardetails-buttons">
        <div className="cardetails-btns-css">
              <IonButton className="cardetial-editcar-btn" onClick={() => history.push("./AddCar")}>Edit Car</IonButton>
            
              <IonButton className="cardetail-viewrepair-btn" onClick={() => history.push('./RepairList')}>View Repair</IonButton>
            
              </div>
      </IonCol> */}
  
          {/* <IonRow>
            <IonCol class="btn-repair">
              <IonButton class="repair-btn">Edit Car</IonButton>
            </IonCol>
            <IonCol>
              <IonButton class="edit-btn"onClick={() => history.push('./RepairList')}>View Repairs</IonButton>
            </IonCol>
          </IonRow> */}
        
      </IonContent>
      

      <IonModal class="modal" isOpen={myModal.isOpen}>
        <div className="modal-body">
              <h4 className="delete-car">Delete Car</h4>
              <h6 className="are-you-sure-text">Are you sure you want to delete the Car 'Car BMX 5689'?</h6>
              <div className="ion-text-end delete-modal-action">
              <button className="delete-modal-close" onClick={()=> setMyModal({isOpen: false})}>Close</button>
              <button className="delete-modal-confirm" onClick={()=> setMyModal({isOpen: false})}>Delete</button>
              </div>
          </div>
      </IonModal>
      <IonFooter className="car-details-footer-main">
      {/* <IonCol class="cardetails-buttons"> */}
        <div className="cardetails-btns-css">
              <button className="cardetial-editcar-btn" onClick={() => history.push("./add-car",{isFromDetails:true})}>Edit Car</button>
            
              <button className="cardetail-viewrepair-btn" onClick={() => history.push('./RepairList')}>View Repair</button>
            
              </div>
      {/* </IonCol> */}
        <div className="footer-btns car-details-footer">
          <div className="car-details-action-btns">
          {"car" in userData ? (
                  <IonImg
                    class="warning"
                    src="assets/alert.svg"
                  />
                ) : (
                  <IonImg
                    class="warning"
                    src="assets/alert.svg"
                  />
                )}
                <IonLabel class="footer-label-size">ALERT</IonLabel>
          </div>
          <div className="car-details-action-btns">
          <IonImg 
                onClick={() => history.push("./Trackbutton")}
                src="assets/move.svg" class="footer-icons" />
                <IonLabel class="footer-label-size">MOVE</IonLabel>
          </div>
          <div className="car-details-action-btns">
          <IonImg
                  src="assets/navigation.svg"
                  onClick={navigateToCheckout}
                  class="footer-icons"
                />
                <IonLabel
                  class="footer-label-size"
                  onClick={navigateToCheckout}
                >
                  CHECKOUT
                </IonLabel>
          </div>
          <div className="car-details-action-btns">
          <IonImg
          // onClick={() => history.push("./Alert")}
          class="footer-icons"
          src="assets/trash.svg"
          onClick={()=> setMyModal({isOpen: true})}
          />
          <IonLabel class="footer-label-size">DELETE</IonLabel>
          </div>
        </div>
      </IonFooter>
    </IonPage>
  );
};

export default Cardetails;
