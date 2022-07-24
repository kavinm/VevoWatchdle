import React from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import './index.css';
import * as Styled from "./index.styled";
import mlogo from "./mlogo.png";
interface Props {
  openInfoPopUp: () => void;
}

export function Header({ openInfoPopUp }: Props) {
  return (
    <Styled.Container className="head">
      <Styled.Content>
        <IoInformationCircleOutline
          onClick={openInfoPopUp}
          size={30}
          width={30}
          height={30}
        />
       <img className="mlogo" src ={mlogo} />
        <Styled.Logo> 
          
        Music Viddle
        </Styled.Logo>

        <a href="#"></a>
      </Styled.Content>
    </Styled.Container>
  );
}
