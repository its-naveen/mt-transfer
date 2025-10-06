import { useState } from "react";
import { IconClickableContainer, Icon, IconLabel } from "./IconClickableStyles";

interface IconClickableProps {
  src?: string;
  alt?: string;
  label?: string;
}

export default function IconClickable({ src = '', alt = '', label = '' }: IconClickableProps) {
  const [selected, setSelected] = useState('');

  const handleSelect = (label: string) => {
    setSelected(label);
  };

  return (
    <IconClickableContainer onClick={() => handleSelect(label)} isSelected={label === selected}>
      <Icon src={src} alt={alt} />
      <IconLabel isSelected={label === selected}>{label}</IconLabel>
    </IconClickableContainer>
  );
}
