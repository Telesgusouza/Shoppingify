import LateralMenu from '../../components/LateralMenu';
import Menu from '../../components/Menu';
import * as Styled from './style';

export default function Statistcs() {
    return (
        <Styled.Container>
            <Menu page='statistics' />
            <Styled.ContainerContent>
                <h1>ola mundo</h1>
            </Styled.ContainerContent>
            <LateralMenu />
        </Styled.Container>
    )
}
