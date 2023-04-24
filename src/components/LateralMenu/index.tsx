import { useSelector } from "react-redux";
import ListItemsMenu from "../ListItemsMenu";
import * as Styled from "./style";

import actionsType from "../../actions";
import SeeItemMenu from "../SeeItemMenu";
import { IPropsRootReducer } from "../../interfaces";

import imgClosed from "../../assets/icons/menu/closed.svg";
import imgBar from "../../assets/icons/menu/bar.svg";
import { useState } from "react";

export default function LateralMenu() {
  const [toggle, setToggleMenu] = useState<boolean>(false);
  const { toggleMenu, getKey } = useSelector(
    (rootReducer: IPropsRootReducer) => rootReducer.useToggleLateralMenu
  );

  function handleToggleMenu() {
    setTimeout(() => {
      setToggleMenu((p) => !p);
    }, 200);
  }

  return (
    <>
      <Styled.MenuMobile>
        <Styled.btnToggle onClick={handleToggleMenu}>
          <img src={toggle ? imgClosed : imgBar} alt="abrir menu" />
        </Styled.btnToggle>

        <Styled.ContentMobile toggle={toggle}>
          {toggleMenu === actionsType.seeListMenu && <ListItemsMenu />}
          {toggleMenu === actionsType.seeProductMenu && <SeeItemMenu />}
        </Styled.ContentMobile>
      </Styled.MenuMobile>

      <Styled.Container>
        {toggleMenu === actionsType.seeListMenu && <ListItemsMenu />}
        {toggleMenu === actionsType.seeProductMenu && <SeeItemMenu />}
      </Styled.Container>
    </>
  );
}
