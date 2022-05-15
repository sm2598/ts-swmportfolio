import { WrapperColumn } from "../../../components/units/main/Main.styles";
import {
  Button,
  ButtonBoard,
  ButtonWrite,
  WrapperTotal,
  WrapperRowBottom,
} from "./Navigation.styles";
import { useContext, useRef } from "react";

const NavigationUI = () => {
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();

  return (
      <WrapperRowBottom>
        <div ref={myRef} />
        <Button onClick={executeScroll}>Home</Button>
        <div ref={myRef} />
        <Button onClick={executeScroll}>About</Button>
      </WrapperRowBottom>
  );
};

export default NavigationUI;
