interface buttonA {
  bgColor?: string;
  textColor?: string;
  title?: string;
  onClick?: () => void;
}
interface buttonB {
  bgColor?: string;
  textColor?: string;
  title?: string;
  onClick?: () => void;
}

export interface propsTypes {
  bgColor?: string;
  titleColor?: string;
  title?: string;
  buttonA?: buttonA;
  buttonB?: buttonB;
  show?: boolean;
  buttonsDirection?: 'column' | 'row';
  type?: 'alert' | 'confirm';
  mode?: 'dark' | 'light';
}
