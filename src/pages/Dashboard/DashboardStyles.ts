import styled from "styled-components";

export const DashboardContainer = styled.div`
  flex: 1;
  padding: 1.6em;
  min-height: 92vh;
  background-color: #f5f5f5;
`;

export const ServicesWrapper = styled.div`
  display: flex;
  gap: 1.6em;
`;

export const ServiceCard = styled.div`
  // flex: 1;
  padding: 1.2em;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  font-size: 0.9em;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const BeneficiaryWrapper = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.6em;
`;

export const BeneficiaryList = styled.div`
  padding: 1.6em;
  margin-top: 1.6em;
  background-color: #fff;
  // width: 33%;
  border-radius: 8px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);

  h5 {
    color: royalblue;
  }
`;

export const BeneficiaryCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2em;
  margin-top: 1.2em;
  background-color: #f9f9f9;
  border-radius: 8px;
  cursor: pointer;
`;

export const BeneficiaryDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;

  h5 {
    color: #393E46;
  }

  span {
    font-size: 0.8em;
    color: gray;
  }
`;

export const BeneficiaryActions = styled.div`
  display: flex;
  gap: 1.2em;
`;

export const RateCalcWrapper = styled.div`
  display: flex;
  gap: 1.6em;
  margin-top: 1em;
`;

export const RateInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    margin-bottom: 0.4em;
    font-size: 0.85em;
    color: #555;
  }
`;

export const RateInput = styled.input`
  padding: 0.5em 0;
  // width: 50%;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 1.2em;
  outline: none;
  `;
  
export const CurrencySelect = styled.select`
  padding: 0.4em;
  // width: 50%;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 1em;
`;

export const RateValue = styled.div`
  margin-top: 1.2em;
  font-size: 0.9em;
  color: #333;
  text-align: center;
  background-color: #f9f9f9;
  padding: 0.8em;
  border-radius: 8px;
`;