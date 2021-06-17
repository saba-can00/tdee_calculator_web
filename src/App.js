import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { AppHeader } from "./components/AppHeader";
import { MenuBar } from "./components/MenuBar";
import { CalculatedResultPage } from "./page/CalculatedResultPage";
import { InputForm } from "./page/InputForm";
import { FaqPage } from "./page/FaqPage";
import { TermsOfService } from "./page/TermsOfService";
import { Footer } from "./components/Footer";
import styled from "styled-components";

function App() {
  const history = useHistory();
  const location = useLocation();
  return (
    <AppContainer>
      <AppHeader></AppHeader>
      <MenuBar></MenuBar>
      <Switch>
        <Route path="/terms">
          <TermsOfService />
        </Route>
        <Route path="/faq">
          <FaqPage />
        </Route>
        <Route path="/result">
          <CalculatedResultPage location={location} />
        </Route>
        <Route path="/">
          <InputForm history={history} />
        </Route>
      </Switch>
      <Footer />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  margin: 0 auto;
  font-family: "M PLUS 1p", sans-serif;
  font-weight: 100;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default App;
