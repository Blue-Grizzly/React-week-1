import { useState } from "react";
import "./App.css";
import Propsdemo from "./exercies/propsdemo";
import ListDemo from "./exercies/ListDemo";
import EventDemo from "./exercies/EventsDemo";
import FormUncontrolled from "./exercies/FormUncontrolled";
import StateDemo1 from "./exercies/StateDemo1";
import StateDemo2 from "./exercies/StateDemo2";
import StateDemo3 from "./exercies/StateDemo3";
import UseEffectDemo from "./exercies/UseEffectDemo";
import FetchDemo1 from "./exercies/FetchDemo";
import ContextDemoApp from "./exercies/ContextDemo";
import LiftingState from "./exercies/LiftingState";


export default function App() {
  const [selectedView, setSelectedView] = useState("info");


  function handleSelected(selected: string) {
    setSelectedView(selected);
  }


  return (
    <>
      <div className="outer-div-style">
        <div className="header-style">
          <h2>React Exercises</h2>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: 10 }}>
            <Buttons onSelected={handleSelected} />
          </div>
          <div className="exercise-style">
            {selectedView == "info" ? <p>All exercises for React day-1</p> : null}
            {selectedView == "props1" ? <Propsdemo title="props1"/> : null}
            {selectedView == "ListDemo" ? <ListDemo title="List Demo"/> : null}
            {selectedView == "EventDemo" ? <EventDemo title="Event Demo"/> : null}
            {selectedView == "FormUncontrolled" ? <FormUncontrolled title="Uncontrolled Form Demo"/> : null}
            {selectedView == "StateDemo1" ? <StateDemo1 title="State Demo 1"/> : null}
            {selectedView == "StateDemo2" ? <StateDemo2 title="State Demo 2"/> : null}
            {selectedView == "StateDemo3" ? <StateDemo3 title="State Demo 3"/> : null}
            {selectedView == "UseEffectDemo" ? <UseEffectDemo title="Use Effect Demo "/> : null}
            {selectedView == "FetchDemo" ? <FetchDemo1 title="Fetch Demo "/> : null}
            {selectedView == "ContextDemo" ? <ContextDemoApp title="Context Demo "/> : null}
            {selectedView == "LiftingState" ? <LiftingState title="Lifting State Demo "/> : null}
          </div>
        </div>
      </div>
    </>
  );
}
type ButtonProps = {
  onSelected: (selected: string) => void;
};
const Buttons = (props: ButtonProps) => {
  const { onSelected: handleSelected} = props;
  return (
    <>
      <button className="btn-w100" onClick={() => handleSelected("info")}>
        Info
      </button>
      <button className="btn-w100" onClick={() => handleSelected("props1")}>
        Props demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("ListDemo")}>
        List Demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("EventDemo")}>
        Event Demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("FormUncontrolled")}>
        Uncontrolled Form Demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("StateDemo1")}>
        State Demo 1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("StateDemo2")}>
        State Demo 2
      </button>
      <button className="btn-w100" onClick={() => handleSelected("StateDemo3")}>
        State Demo 3
      </button>
      <button className="btn-w100" onClick={() => handleSelected("UseEffectDemo")}>
        Use Effect Demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("FetchDemo")}>
        Fetch Demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("ContextDemo")}>
        Context Demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("LiftingState")}>
        Lifting State Demo
      </button>
    </>
  );
};
