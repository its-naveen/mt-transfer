import IconClickable from "../../components/IconClickable/IconClickable";
import { DashboardContainer, ServicesWrapper, ServiceCard, BeneficiaryWrapper, BeneficiaryList, BeneficiaryCard, BeneficiaryDetails, BeneficiaryActions, RateInput, RateCalcWrapper, RateInputWrapper, RateValue } from "./DashboardStyles";

export default function Dashboard() {
  return (
    <DashboardContainer>
      <ServicesWrapper>
        <ServiceCard>Make Transfer</ServiceCard>
        <ServiceCard>FX Booking</ServiceCard>
        <ServiceCard>Bill Pay</ServiceCard>
      </ServicesWrapper>
      <BeneficiaryWrapper>
        <BeneficiaryList>
          <h5>Favourite Beneficiaries</h5>
          {[0, 1, 2, 3, 4].map(() => <BeneficiaryCard>
            <BeneficiaryDetails>
              <IconClickable label="Bank" hideLabel />
              <div>
                <h5>John F Duo</h5>
                <span>100.00 USD</span>
              </div>
            </BeneficiaryDetails>
            <BeneficiaryActions>
              {/* <IconClickable label="Star" hideLabel /> */}
              <IconClickable label="Edit" hideLabel />
              <IconClickable label="ThreeDots" hideLabel />
            </BeneficiaryActions>
          </BeneficiaryCard>)}
        </BeneficiaryList>
        <BeneficiaryList>
          <h5>Recent Transactions</h5>
          {[0, 1, 2, 3, 4].map(() => <BeneficiaryCard>
            <BeneficiaryDetails>
              <IconClickable label="Visa" hideLabel />
              <div>
                <h5>John F Duo</h5>
                <span>100.00 USD</span>
              </div>
            </BeneficiaryDetails>
            <BeneficiaryActions>
              <IconClickable label="Repeat" hideLabel />
              <IconClickable label="View" hideLabel />
            </BeneficiaryActions>
          </BeneficiaryCard>)}
        </BeneficiaryList>
        <BeneficiaryList>
          <h5>Rate Calculator</h5>
          <RateCalcWrapper>
            <RateInputWrapper>
              <label htmlFor="">Send Amount</label>
              <RateInput type="text" />
            </RateInputWrapper>
          </RateCalcWrapper>
          <RateCalcWrapper>
            <RateInputWrapper>
              <label htmlFor="">Receive Amount</label>
              <RateInput type="text" />
            </RateInputWrapper>
          </RateCalcWrapper>
          <RateValue>1 USD = 0.85 EUR</RateValue>
        </BeneficiaryList>
      </BeneficiaryWrapper>
    </DashboardContainer>
  );
};
