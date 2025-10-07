import { SidebarContainer, SidebarMenu } from "./SidebarStyles";
import IconClickable from "../IconClickable/IconClickable";
import { useReducer } from "react";

const initialState = {
  activeMenu: "Dashboard",
};

function reducer(state: typeof initialState, action: { type: string, payload?: any }) {
  switch (action.type) {
    case "SET_ACTIVE_MENU":
      return { ...state, activeMenu: action.payload };
    default:
      return state;
  }
}

export default function Sidebar() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleMenuClick = (menu: string) => {
    dispatch({ type: "SET_ACTIVE_MENU", payload: menu });
  };

  return (
    <SidebarContainer>
      <SidebarMenu onClick={() => handleMenuClick("Dashboard")}>
        <IconClickable label="Dashboard" active={state.activeMenu === "Dashboard"} />
      </SidebarMenu>
      <SidebarMenu onClick={() => handleMenuClick("Beneficiary")}>
        <IconClickable label="Beneficiary" active={state.activeMenu === "Beneficiary"} />
      </SidebarMenu>
      <SidebarMenu onClick={() => handleMenuClick("FX")}>
        <IconClickable label="FX" active={state.activeMenu === "FX"} />
      </SidebarMenu>
      <SidebarMenu onClick={() => handleMenuClick("Billpay")}>
        <IconClickable label="Billpay" active={state.activeMenu === "Billpay"} />
      </SidebarMenu>
    </SidebarContainer>
  );
}
