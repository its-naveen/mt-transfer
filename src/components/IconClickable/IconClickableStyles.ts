import styled from "styled-components";

export const IconClickableContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 1.6em;
  height: 1.6em;
`;

export const IconLabel = styled.span<{$active?: boolean}>`
  margin-top: 0.5em;
  font-size: 0.75em;
  text-align: center;
  color: ${(props) => (props.$active ? "royalblue" : "#393E46")};
`;
