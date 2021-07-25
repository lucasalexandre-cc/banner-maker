import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { CompactPicker } from 'react-color';

type ColorInputPickerProps = {
  label: string,
  onChange: (newColor: string) => void,
  color: string,
}

const ColorInputPicker: React.FC<ColorInputPickerProps> = ({ label, color, onChange }) => {  
  const [open, setOpen] = useState(false);

  const onChooseColor = useCallback((newColor) => {
    setOpen(false);
    onChange(newColor.hex);
  }, [setOpen, onChange]);

  const onClickInput = useCallback((event) => {
    event.stopPropagation();
    setOpen(true)
  }, []);

  return (
    <Container onClick={onClickInput}>
      {label}:
      <PickedColor color={color} />
      {open && <CustomPicker onChangeComplete={onChooseColor} />}
    </Container>
  )
};

const Container = styled.div`
  position: relative;
  text-align: left;
  margin: 10px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const PickedColor = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${({color}) => color};
  margin: 0 10px;
`;

const CustomPicker = styled(CompactPicker)`
  position: absolute;
`;

export default ColorInputPicker;




