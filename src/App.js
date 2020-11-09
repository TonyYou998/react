import logo from './logo.svg';
import './App.css';
// import Baitap1 from "./baitap1";
import Baitap2 from "./baitap2";
import RenderingElement from "./rendering element";
import HandlingEvent from "./handling-event";
import ExampleHandlingEvent from './handling-event/example';
import State from "./state";
// import ExampleCar from "./state/example";
import ListKey from "./list/index";
import ExampleListKey from "./list/example";
import ExampleMovie from "./list/examplemovie";
// import Index from "./ontap/state";
// import ExampleCar from "./ontap/state/examplecar";
// import Example from "./ontap/example/exampleList";
import ListPeople from "./ontap/example/listpeople";
import ListMovie from "./ontap/example/listmovie";
import Index from "./ontap/prop/index";
// import Index from "./ontap/lifting-sate-up/index";

import DemoProps from './ontap/prop/demoProps';
import BaiTapGioHang from "./baitapgiohang/BaiTapGioHang";
import Home from "./usermanagement_redux";
function App() {

  return (
    <div>

      {/* <Baitap2 /> */}
      {/* <RenderingElement /> */}
      {/* <HandlingEvent /> */}
      <hr />
      {/* <ExampleHandlingEvent /> */}
      {/* <State /> */}
      {/* <ExampleCar /> */}
      {/* <ListKey /> */}
      {/* <ExampleListKey /> */}
      {/* <ExampleMovie /> */}
      {/* <Index /> */}
      {/* <ExampleCar /> */}
      {/* < Example /> */}
      {/* <ListPeople /> */}
      {/* <ListMovie /> */}
      {/* <Index /> */}
      {/* <Index /> */}
      {/* <DemoProps hello={"bell"} /> */}
      {/* <DemoProps hello={"tan"} /> */}
      <BaiTapGioHang />
      <hr />
      <Home />
    </div>


  );
}

export default App;
