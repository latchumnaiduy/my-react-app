import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import "./global.css";

/* Theme variables */
import './theme/variables.css';
import Locations from './Location/Locations';
import Cars from './carsList/Cars';

import Auth from './Authentication/Auth';
import Pin from './Login/Pin'
import AddCar from './AddCar/AddCar';
import AddRepair from './AddRepair';
import Cardetails from './CarDetails/Cardetails';



setupIonicReact();


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
    {/* <Cardetails/> */}
        {/* <Cars/> */}
        {/* <Locations/> */}
        {/* <AddCar/> */}
        <Route path="/detail-car" component={Cardetails} exact={true}/> 
        <Route path="/add-car" component={AddCar} exact={true}/> 
          <Route path="/Locations" component={Locations} exact={true}/>
        <Route path="/Cars" component={Cars} exact={true}/>
       {/* <Route path="/Cars" component={Cars} exact={true}/> */}
       <Route path="/add-repair" component={AddRepair} exact={true}/>

        <Redirect path="" to="/add-car"  />
      </IonRouterOutlet> 
    </IonReactRouter>
  </IonApp>

);

export default App;
