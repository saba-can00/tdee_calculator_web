import "./App.css";
import { AppHeader } from "./AppHeader";
import { MenuBar } from "./MenuBar";
import { InputForm } from "../page/InputForm";

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <MenuBar></MenuBar>
      <InputForm></InputForm>
    </div>
  );
}

export default App;
