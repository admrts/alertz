import styled, { keyframes } from 'styled-components';

const showContainer = keyframes`
    0% {
      opacity: 0;
      transform: translateY(0px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  `;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.516);
  animation: ${showContainer} 0.3s ease-in-out forwards;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const showSection = keyframes`
0% {
  opacity: 0;
  transform: translateY(-50px);
}
100% {
  opacity: 1;
  transform: translateY(0);
}
`;
export const Section = styled.div<{ $inputColor?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  padding: 10px;
  width: 200px;
  min-height: 150px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) px 2px 6px 2px;
  border-radius: 5px;
  background-color: ${props => props.$inputColor || '#1c1c1e'};
  animation: ${showSection} 0.5s ease forwards;
  @media (min-width: 768px) {
    width: 300px;
    height: 250px;
  }
`;

export const Title = styled.p<{ $textColor?: string }>`
  text-align: center;
  color: ${props => props.$textColor || '#f8f9fa'};
  margin-top: 7%;
  white-space: pre-wrap;
  word-break: break-word;
  @media (min-width: 768px) {
    margin-top: 10%;
    font-size: 1.1rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;
export const ButtonA = styled.button`
  border: transparent;
  flex: 1;
  padding: 5px 10px;
  border-radius: 3px;
  background-color: #ff453a;
  color: white;
  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;
export const ButtonB = styled.button`
  border: transparent;
  flex: 1;
  padding: 5px 10px;
  border-radius: 3px;
  background-color: #30d158;
  color: white;
  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;
