import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { AppContainer, MainContext } from "./AppStyles";

export default function Home() {
  return (
    <AppContainer>
      <Sidebar />
      <MainContext>
        <Header heading="Welcome Naveen" />
        
      </MainContext>
    </AppContainer>
  );
}
