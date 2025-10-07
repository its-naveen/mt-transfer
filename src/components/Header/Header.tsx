import IconClickable from "../IconClickable/IconClickable";
import { HeaderActions, HeaderContainer } from "./HeaderStyles";

export default function Header({ heading }: { heading: string }) {
  return (
    <HeaderContainer>
      <h4>{heading}</h4>
      <HeaderActions>
        <IconClickable label="Notifications" hideLabel />
        <IconClickable label="Profile" hideLabel />
      </HeaderActions>
    </HeaderContainer>
  );
};
