import IconClickable from "../../components/IconClickable/IconClickable";
import { BeneficiaryContainer, ServiceCard, ServicesWrapper, BeneficiaryListWrapper, BeneficiaryCard, BeneficiaryActions } from "./BeneficiaryStyles";

export default function Beneficiary() {
  return (
    <BeneficiaryContainer>
      <ServicesWrapper>
        <ServiceCard>Bank Transfer</ServiceCard>
        <ServiceCard>Cash Pickup</ServiceCard>
        <ServiceCard>Western Union</ServiceCard>
        <ServiceCard>VISA</ServiceCard>
      </ServicesWrapper>
      <BeneficiaryListWrapper>
        {[0, 1, 2, 3, 4, 5, 6, 7].map(() => <BeneficiaryCard>
          <BeneficiaryActions>
            <IconClickable label="Star" hideLabel />
            <IconClickable label="ThreeDots" hideLabel />
          </BeneficiaryActions>
          <h5>John V Due</h5>
          <p>344455678865</p>
          <span>Bank Transfer</span>
        </BeneficiaryCard>)}
      </BeneficiaryListWrapper>
    </BeneficiaryContainer>
  );
};