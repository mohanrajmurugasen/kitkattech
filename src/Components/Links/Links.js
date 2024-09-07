import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AboutPage from "../Pages/About/About";
import CareersPage from "../Pages/Careers/Careers";
import ContactPage from "../Pages/Contacts/Contacts";
import BiometricPage from "../Pages/Products/Biometric";
import EcommercePage from "../Pages/Products/Ecommerce";
import MinibankPage from "../Pages/Products/Minibank";
import OfficeERPPage from "../Pages/Products/Office";
import TravelPage from "../Pages/Products/Travel";
import PosPage from "../Pages/Products/Pos";
import GoldPage from "../Pages/Products/Gold";
import MedicalPage from "../Pages/Products/Medical";
import CustomizedPage from "../Pages/Services/Customized";
import WebdesignPage from "../Pages/Services/Webdesign";
import WebhostPage from "../Pages/Services/Webhost";
import AndroidPage from "../Pages/Services/Android";
import IOSPage from "../Pages/Services/Ios";
import BulksmsPage from "../Pages/Services/Bulksms";
import CRMPage from "../Pages/Services/Crm";
import ERPPage from "../Pages/Services/Erp";
import HRMPage from "../Pages/Services/Hrm";
import TrainingPage from "../TrainingPage/TrainingPage";
import AndroidComponent from "../Training/android";
import AngularComponent from "../Training/angular";
import BigdataComponent from "../Training/Bigdata";
import CorejavaComponent from "../Training/corejava";
import DatascienceComponent from "../Training/datascience";
import DevopsComponent from "../Training/Devops";
import DigitalComponent from "../Training/digital";
import FlutterComponent from "../Training/flutter";
import FullStackComponent from "../Training/fullstack";
import Iostraining from "../Training/Ios";
import MachinelearningComponent from "../Training/machine_learning";
import MeanstackComponent from "../Training/meanstack";
import MernstackComponent from "../Training/mernstack";
import MongodbComponent from "../Training/mongodb";
import NodeJsComponent from "../Training/nodejs";
import PhpComponent from "../Training/php";
import PythonComponent from "../Training/python";
import ReactComponent from "../Training/react";
import ReactnativeComponent from "../Training/Reactnatives";
import SoftwaretestComponent from "../Training/softwaretest";
import WebdesignComponent from "../Training/webdesign";

const MainLink = () => {
  return (
    <Routes>
      {/* navbar link */}
      <Route path="/Home" exact element={<Home />}></Route>
      <Route path="/" exact element={<Home />}></Route>
      <Route path="/AboutPage" exact element={<AboutPage />}></Route>
      <Route path="/ProductPage" exact element={<Home />}></Route>
      <Route path="/ServicePage" exact element={<Home />}></Route>
      <Route path="/CareerPage" exact element={<CareersPage />}></Route>
      <Route path="/TrainingPage" exact element={<TrainingPage />}></Route>
      <Route path="/ContactPage" exact element={<ContactPage />}></Route>

      {/* product drop down link */}

      <Route path="/BiometricPage" exact element={<BiometricPage />}></Route>
      <Route path="/E-CommercePage" exact element={<EcommercePage />}></Route>
      <Route path="/OfficeERPPage" exact element={<OfficeERPPage />}></Route>
      <Route path="/MiniBankingPage" exact element={<MinibankPage />}></Route>
      <Route path="/TravelERPPage" exact element={<TravelPage />}></Route>
      <Route path="/POSPage" exact element={<PosPage />}></Route>
      <Route path="/GoldLoanPage" exact element={<GoldPage />}></Route>
      <Route path="/MedicalPage" exact element={<MedicalPage />}></Route>

      {/* service dropdown */}
      <Route
        path="/CustomizedWebPage"
        exact
        element={<CustomizedPage />}
      ></Route>
      <Route
        path="/WebsiteDesignPage"
        exact
        element={<WebdesignPage />}
      ></Route>
      <Route path="/WebHostingPage" exact element={<WebhostPage />}></Route>
      <Route
        path="/AndroidApplicationPage"
        exact
        element={<AndroidPage />}
      ></Route>
      <Route path="/IOSApplicationPage" exact element={<IOSPage />}></Route>
      <Route path="/BulkSMSPage" exact element={<BulksmsPage />}></Route>
      <Route path="/CRMPage" exact element={<CRMPage />}></Route>
      <Route path="/ERPPage" exact element={<ERPPage />}></Route>
      <Route path="/HRMPage" exact element={<HRMPage />}></Route>

      {/* Training */}
      <Route path="/Android" exact element={<AndroidComponent />}></Route>
      <Route path="/Angular" exact element={<AngularComponent />}></Route>
      <Route path="/Bigdata" exact element={<BigdataComponent />}></Route>
      <Route path="/Corejava" exact element={<CorejavaComponent />}></Route>
      <Route
        path="/Datascience"
        exact
        element={<DatascienceComponent />}
      ></Route>
      <Route path="/Devops" exact element={<DevopsComponent />}></Route>
      <Route path="/Digital" exact element={<DigitalComponent />}></Route>
      <Route path="/Flutter" exact element={<FlutterComponent />}></Route>
      <Route path="/FullStack" exact element={<FullStackComponent />}></Route>
      <Route path="/Iostraining" exact element={<Iostraining />}></Route>
      <Route
        path="/Machinelearning"
        exact
        element={<MachinelearningComponent />}
      ></Route>
      <Route path="/Meanstack" exact element={<MeanstackComponent />}></Route>
      <Route path="/Mernstack" exact element={<MernstackComponent />}></Route>
      <Route path="/Mongodb" exact element={<MongodbComponent />}></Route>
      <Route path="/NodeJs" exact element={<NodeJsComponent />}></Route>
      <Route path="/Php" exact element={<PhpComponent />}></Route>
      <Route path="/Python" exact element={<PythonComponent />}></Route>
      <Route path="/React" exact element={<ReactComponent />}></Route>
      <Route
        path="/Reactnative"
        exact
        element={<ReactnativeComponent />}
      ></Route>
      <Route
        path="/Softwaretest"
        exact
        element={<SoftwaretestComponent />}
      ></Route>
      <Route path="/Webdesign" exact element={<WebdesignComponent />}></Route>
    </Routes>
  );
};
export default MainLink;
