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
import { Breadcrumbs } from "./components/BreadCrumbs";
import "./AddCar/addCar.css";
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
import "./theme/Cars.css";
import CustomHeader from "./components/CustomHeader";

import { addRepairItems, formItems } from "./utils/sample-data.js";
import { FormInputItems } from "./components/FormInputItems";
import { formItemsType } from "./utils/addCarType";
import { Button, Col, Form, Row } from "antd";
import { useState } from "react";

const AddRepair: React.FC = () => {
  const [addRepairForm] = Form.useForm();
  const breadCrumbItems = [
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
    // {
    //   name: "car name",
    //   value: "BMX 5689",
    //   path: "/track1",
    // },
  ];
  const onChange = (e:any) => {
    console.log(e, 'changes');
    
  }

// const isErros = () => {
//   let FIELD_ERRORS = addRepairForm.getFieldsError();
//   let ERRORS = FIELD_ERRORS.filter((field) => field.errors.length > 0);
//   return ERRORS;
// }

  const onFinish = (values: any) => {
    console.log(values,"form values");
    
  }

  const onFinishFailed = () => {}


  const formItemsClone: formItemsType[] = [...addRepairItems];


  return (
    <IonPage>
      <IonHeader class="location-tool-bar">
        <CustomHeader title="Add Repair"></CustomHeader>
      </IonHeader>
      <IonHeader className="ion-breadcrumb-header">
        <Breadcrumbs breadCrumbItems={breadCrumbItems}></Breadcrumbs>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
        <Form
          name="addRepairForm"
          form={addRepairForm}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          preserve={true}
          autoComplete="off"
        >
         <Row gutter={[16, 5]}>
            {formItemsClone &&
              formItemsClone.map((item, i) => {
                return (
                  <Col
                    span={24}
                    className={`ion-col-item ${item.inputType === "toggle" ? 'pb-0' : ''}`}
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
        <div className="footer-btns">
          <button className="btn-save btn-cancel">Cancel</button>
          <button className="btn-save">Save </button>
        </div>
      </IonFooter>
    </IonPage>
  );
};

export default AddRepair;
