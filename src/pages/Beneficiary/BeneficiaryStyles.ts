import styled from "styled-components";

export const BeneficiaryContainer = styled.div`
  // flex: 1;
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

export const BeneficiaryListWrapper = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  margin-top: 1.6em;
  gap: 1.6em;
`;

export const BeneficiaryCard = styled.div`
  padding: 1.2em;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-align: center;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  p {
    color: #555;
    margin: 0;
    margin-top: 0.45em;
    font-size: 0.85em;
  }

  span {
    color: #888;
    font-size: 0.8em;
  }
`;

export const BeneficiaryActions = styled.div`
  display: flex;
  justify-content: space-between;
`;