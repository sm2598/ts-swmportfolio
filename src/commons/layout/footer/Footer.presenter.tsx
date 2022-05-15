import { Wrapper, WrapperColumn } from "./Footer.styles";
import { useContext, useRef } from "react";

const FooterUI = () => {
  return (
    <Wrapper>
      <WrapperColumn>
        <div>© 2022 Sung Woo Min | Created with ❤︎</div>
      </WrapperColumn>
    </Wrapper>
  );
};

export default FooterUI;
