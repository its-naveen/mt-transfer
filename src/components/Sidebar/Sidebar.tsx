import { SidebarContainer, SidebarMenu } from "./SidebarStyles";
import DashboardIcon from "../../assets/icons/dashboard.svg";
import BeneficiaryIcon from "../../assets/icons/beneficiary.svg";
import BillpayIcon from "../../assets/icons/billpay.svg";
import IconClickable from "../IconClickable/IconClickable";

export default function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarMenu>
        <IconClickable src={DashboardIcon} alt="Dashboard Icon" label="Dashboard" />
      </SidebarMenu>
      <SidebarMenu>
        <IconClickable src={BeneficiaryIcon} alt="Beneficiary Icon" label="Beneficiary" />
      </SidebarMenu>
      <SidebarMenu>
        <IconClickable src={BillpayIcon} alt="Billpay Icon" label="Bill Pay" />
      </SidebarMenu>
    </SidebarContainer>
  );
}
