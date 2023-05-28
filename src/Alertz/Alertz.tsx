import React, { useEffect, useState } from 'react';
import { propsTypes } from './types';
import {
  ButtonA,
  ButtonB,
  ButtonContainer,
  Container,
  Section,
  Title,
} from './style';

const Alertz = (props: propsTypes) => {
  const [dp, setDp] = useState('none');
  const [bgMode, setBgMode] = useState<string>();
  const [colorMode, setColorMode] = useState<string>();
  useEffect(() => {
    if (props.show) {
      setDp('flex');
    } else {
      setDp('none');
    }
    if (props.mode === 'light') {
      setBgMode('#f8f9fa');
      setColorMode('#212529');
    } else if (props.mode === 'dark') {
      setBgMode('#212529');
      setColorMode('#f8f9fa');
    }
  }, [props.show, props.mode]);
  const handleClick = () => {
    alert('Please add Function');
  };

  //
  //   RETURN
  //
  return (
    <Container style={{ display: dp }}>
      <Section
        style={{
          backgroundColor: bgMode,
        }}
        $inputColor={props.bgColor}
      >
        <Title style={{ color: colorMode }} $textColor={props.titleColor}>
          {props.title || 'Title'}
        </Title>
        <ButtonContainer style={{ flexDirection: props.buttonsDirection }}>
          {props.type === 'confirm' && (
            <ButtonA
              style={{
                backgroundColor: props.buttonA?.bgColor,
                color: props.buttonA?.textColor,
              }}
              onClick={props.buttonA?.onClick || handleClick}
            >
              {props.buttonA?.title || 'Button A'}
            </ButtonA>
          )}
          <ButtonB
            style={{
              backgroundColor: props.buttonB?.bgColor,
              color: props.buttonB?.textColor,
            }}
            onClick={props.buttonB?.onClick || handleClick}
          >
            {props.buttonB?.title || 'Button B'}
          </ButtonB>
        </ButtonContainer>
      </Section>
    </Container>
  );
};

export default Alertz;
