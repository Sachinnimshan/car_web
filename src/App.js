import { AppContainer } from "./app.styled";
import "./App.css";
import MainLayout from "./sections/MainLayout";
import useResponsive from "./hooks/useResponsive";

function App() {
  const mobile = useResponsive();
  return (
    <AppContainer>
      <MainLayout mobile={mobile} />
    </AppContainer>
  );
}

export default App;
