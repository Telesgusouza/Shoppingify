import { useSelector } from 'react-redux';
import ListItemsMenu from '../ListItemsMenu';
import * as Styled from './style';

import actionsType from '../../actions';
import SeeItemMenu from '../SeeItemMenu';
import { IPropsRootReducer } from '../../interfaces';

export default function LateralMenu() {

  

  const {toggleMenu, getKey} = useSelector((rootReducer:IPropsRootReducer) => rootReducer.useToggleLateralMenu);


  return (
    <Styled.Container>
      {toggleMenu === actionsType.seeListMenu && <ListItemsMenu />}
      {toggleMenu === actionsType.seeProductMenu && <SeeItemMenu />}
      
    </Styled.Container>
  )
}
