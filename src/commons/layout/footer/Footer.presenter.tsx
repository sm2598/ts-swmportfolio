import { Wrapper, WrapperColumn } from "./Footer.styles";
import { useContext, useRef } from "react";

const FooterUI = () => {
  return (
    <Wrapper>
      <WrapperColumn>
        <div>© 2021 Sung Woo Min | Created with Love</div>
      </WrapperColumn>
    </Wrapper>
  );
};

export default FooterUI;
