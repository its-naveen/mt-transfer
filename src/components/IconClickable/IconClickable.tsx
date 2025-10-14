import type { JSX } from "react";
import { IconClickableContainer, IconLabel } from "./IconClickableStyles";
import { DashboardIcon } from "../Icons/DashboardIcon";
import { BeneficiaryIcon } from "../Icons/BeneficiaryIcon";
import { BillpayIcon } from "../Icons/BillpayIcon";
import { ProfileIcon } from "../Icons/ProfileIcon";
import { BellIcon } from "../Icons/BellIcon";
import { FxIcon } from "../Icons/FxIcon";
import { RepeatIcon } from "../Icons/RepeatIcon";
import { StarIcon } from "../Icons/StarIcon";
import { ThreeDotsIcon } from "../Icons/ThreeDotsIcon";
import { EditIcon } from "../Icons/EditIcon";
import { ViewIcon } from "../Icons/ViewIcon";
import { BankIcon } from "../Icons/BankIcon";
import { VisaIcon } from "../Icons/VisaIcon";
import { TxnHistoryIcon } from "../Icons/TxnHistoryIcon";

type IconClickableProps = {
  label: string;
  active?: boolean;
  hideLabel?: boolean;
};

export default function IconClickable({ label, active = false, hideLabel = false }: IconClickableProps) {
  const iconColor = active ? "royalblue" : "#393E46";

  const icons: Record<string, JSX.Element> = {
    Dashboard: <DashboardIcon color={iconColor} />,
    Beneficiary: <BeneficiaryIcon color={iconColor} />,
    Billpay: <BillpayIcon color={iconColor} />,
    Profile: <ProfileIcon color={iconColor} />,
    Notifications: <BellIcon color={iconColor} />,
    FX: <FxIcon color={iconColor} />,
    Repeat: <RepeatIcon color={iconColor} />,
    Star: <StarIcon color={iconColor} />,
    ThreeDots: <ThreeDotsIcon color={iconColor} />,
    Edit: <EditIcon color={iconColor} />,
    View: <ViewIcon color={iconColor} />,
    Bank: <BankIcon color={iconColor} />,
    Visa: <VisaIcon color={iconColor} />,
    TxnHistory: <TxnHistoryIcon color={iconColor} />,
  };

  return (
    <IconClickableContainer>
      {icons[label]}
      {!hideLabel && <IconLabel $active={active}>{label}</IconLabel>}
    </IconClickableContainer>
  );
}
