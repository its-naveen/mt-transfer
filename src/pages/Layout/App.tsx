import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { AppContainer, MainContext } from "./AppStyles";

import Dashboard from "../Dashboard/Dashboard";
import Beneficiary from "../Beneficiary/Beneficiary";
import { Navigate, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../../components/ErrorFallback/ErrorFallback";

export default function Home() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
      <AppContainer>
        <Sidebar />
        <MainContext>
          <Header heading="Welcome Naveen" />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Navigate to="/" replace />} />
            <Route path="/beneficiary" element={<Beneficiary />} />
          </Routes>
        </MainContext>
      </AppContainer>
    </ErrorBoundary>
  );
}
