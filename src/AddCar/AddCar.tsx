import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonFooter,
  IonItem,
  IonButton,
  IonList,
} from "@ionic/react";
import { Breadcrumbs } from "../components/BreadCrumbs";
import "./addCar.css";
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
import "../theme/variables.css";
import "../theme/Cars.css";
import CustomHeader from "../components/CustomHeader";

import { formItems } from "../utils/sample-data.js";
import { FormInputItems } from "../components/FormInputItems";
import { formItemsType } from "../utils/addCarType";
import { useEffect, useState } from "react";
import { setEditData, editFormValues } from "./dataTransform";
import { useLocation } from "react-router";
import { Col, Form, Row } from "antd";

const AddCar: React.FC = () => {
  const breadCrumbs = [
    {
      name: "Location",
      value: "QUEST1",
      path: "/location",
    },
    {
      name: "Track1",
      value: "Track",
      path: "/track1",
    },
  ];
  const newBreadCrumb =  {
    name: "Track3",
    value: "Track",
    path: "/track1",
  }
  const [breadCrumbItems,setbreadCrumbItems] = useState(breadCrumbs);
  const [formValues, setFormValues] = useState<any>();
  const [formItemsClone , setFormItemsClone] = useState<formItemsType[]>([...formItems]);
  const location = useLocation()
  const [isEditCar, setIsEditCar] = useState<boolean>(false)
  const [addCarForm] = Form.useForm()

useEffect(() => {
  const state_:any = location.state;
  if(state_ && state_?.isFromDetails) {
    setIsEditCar(true);
    let breadCrumbItemsClone = [...breadCrumbItems];
    breadCrumbItemsClone.push(newBreadCrumb);
    setbreadCrumbItems(breadCrumbItemsClone);
    // const formItems_new = [...formItemsClone];
   const editedData = setEditData(editFormValues);
   addCarForm.setFieldsValue(editedData)
   console.log(editedData, "editedData");
  }
},[location])

  const onChange = (e:any) => {
    const keyNmae = typeof(e) === "object" ?  Object.keys(e)[0] : '';
    let formValuesClone = {...formValues};
    let formItems = [...formItemsClone];
    const INDEX = formItems.findIndex(x => x.keyName === keyNmae);
    if (INDEX > -1) {
      formItems[INDEX]['value'] = e[keyNmae];
    }
    // setFormItemsClone(formItems);
    formValuesClone = {...formValuesClone, ...e}
    setFormValues({...formValuesClone});
    console.log(e, 'changes');
  }
  const onSaveCar = () => {
    // console.log(formValues, "formValues")
    addCarForm.submit();
  }
  const onFinish = (values: any) => {
    console.log(values,"form values");
    
  }

  const onFinishFailed = () => {}

  return (
    <IonPage>
      <IonHeader class="location-tool-bar">
        <CustomHeader title={`${isEditCar ? 'Edit' : 'Add'} Car`}></CustomHeader>
      </IonHeader>
      <IonHeader className="ion-breadcrumb-header">
        <Breadcrumbs breadCrumbItems={breadCrumbItems}></Breadcrumbs>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid className="pb-0">
        
         <Form
          name="addCarForm"
          form={addCarForm}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          preserve={true}
          autoComplete="off"
        >
           <Row gutter={[16, 5]} >
            {formItemsClone &&
              formItemsClone.map((item, i) => {
                return (
                  <Col
                    span={24}
                    className="ion-col-item"
                    key={`form-items-${i}`}
                  >
                    <FormInputItems formItems={item} onChange={onChange}></FormInputItems>
                  </Col>
                );
              })}
          </Row>
              </Form>
        </IonGrid>
      </IonContent>
      <IonFooter className="ion-footer">
        {!isEditCar && 
        <div className="footer-btns">
          <button className="btn-save" disabled>Save and Add Repairs</button>
          <button className="btn-save">Save and Add Next Car</button>
        </div>
        }
        <div className="footer-btns">
          <button className="btn-save btn-cancel">Cancel</button>
          <button className="btn-save" onClick={() => onSaveCar()}>Save </button>
        </div>
      </IonFooter>
    </IonPage>
  );
};

export default AddCar;
