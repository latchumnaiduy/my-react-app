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
import Locations from './Locations';
import Cars from './carsList/Cars';
import Track from './Track';
import Auth from './Authentication/Auth';
import Pin from './Login/Pin'
import AddCar from './AddCar';

setupIonicReact();


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {/* <Locations/> */}
        <Cars/>
        {/* <Route path="add-car" component={AddCar} exact={true}/>
          <Route path="/Locations" component={Locations} exact={true}/>
        <Route path="/Tracks" component={Track} exact={true}/>
        <Route path="/Cars" component={Cars} exact={true}/>
        <Redirect path="" to="/add-car"  /> */}
      </IonRouterOutlet> 
    </IonReactRouter>
  </IonApp>

);

export default App;