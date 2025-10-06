import styled from "styled-components";

interface SelectedProps {
  isSelected: boolean;
}

export const IconClickableContainer = styled.div<SelectedProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${props => props.isSelected ? '#000' : '#666'};
`;

export const Icon = styled.img<{color?: string}>`
  width: 1.6em;
  height: 1.6em;
  cursor: pointer;
  color: ${props => props.color || 'blue'};
`;

export const IconLabel = styled.span<SelectedProps>`
  margin-top: 0.5em;
  font-size: 0.75em;
  text-align: center;
  color: ${props => props.isSelected ? '#000' : '#666'};
`;