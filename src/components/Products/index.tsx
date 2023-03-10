import  searchImg from '../../assets/icons/search.svg';
import xmarkImg from '../../assets/icons/xmark.svg';

import * as Styled from './style';

export default function Products() {

    return (
        <Styled.Container>
            <Styled.Header>
                <h1> <strong> Shoppingify </strong> permite que você leve sua lista de compras aonde quer que você vá</h1>
                <form>
                    <button>
                        <img src={searchImg} alt="imagem de search" />
                    </button>
                    <input type="text" name="inputSearch" id="inputSearch" placeholder='Pesquisar' />
                </form>
            </Styled.Header>

            <Styled.ContainerOptionsMerchandise>

                <article>
                    <h2>Frutas e vegetais</h2>
                    <ul>
                        <li><p>Avocado</p> <img src={xmarkImg} alt="Option" /></li>
                        <li><p>Banana</p> <img src={xmarkImg} alt="Option" /></li>
                        <li><p>Bunch of carrots 5pcs</p> <img src={xmarkImg} alt="Option" /></li>
                        <li><p>Chicken 1kg</p> <img src={xmarkImg} alt="Option" /></li>
                        <li><p>Avocado</p> <img src={xmarkImg} alt="Option" /></li>
                        <li><p>Banana</p> <img src={xmarkImg} alt="Option" /></li>
                        <li><p>Bunch of carrots 5pcs</p> <img src={xmarkImg} alt="Option" /></li>
                        <li><p>Chicken 1kg</p> <img src={xmarkImg} alt="Option" /></li>
                    </ul>
                </article>

                <article>
                    <h2>Frutas e vegetais</h2>
                    <ul>
                        <li><p>Avocado</p> <img src={xmarkImg} alt="Option" /></li>
                        <li><p>Banana</p> <img src={xmarkImg} alt="Option" /></li>
                        <li><p>Bunch of carrots 5pcs</p> <img src={xmarkImg} alt="Option" /></li>
                        <li><p>Chicken 1kg</p> <img src={xmarkImg} alt="Option" /></li>
                        <li><p>Avocado</p> <img src={xmarkImg} alt="Option" /></li>
                        <li><p>Banana</p> <img src={xmarkImg} alt="Option" /></li>
                        <li><p>Bunch of carrots 5pcs</p> <img src={xmarkImg} alt="Option" /></li>
                        <li><p>Chicken 1kg</p> <img src={xmarkImg} alt="Option" /></li>
                    </ul>
                </article>

                <article>
                    <h2>Frutas e vegetais</h2>
                    <ul>
                        <li><p>Avocado</p> <img src={xmarkImg} alt="Option" /></li>
                        <li><p>Banana</p> <img src={xmarkImg} alt="Option" /></li>
                        <li><p>Bunch of carrots 5pcs</p> <img src={xmarkImg} alt="Option" /></li>
                        <li><p>Chicken 1kg</p> <img src={xmarkImg} alt="Option" /></li>
                        <li><p>Avocado</p> <img src={xmarkImg} alt="Option" /></li>
                        <li><p>Banana</p> <img src={xmarkImg} alt="Option" /></li>
                        <li><p>Bunch of carrots 5pcs</p> <img src={xmarkImg} alt="Option" /></li>
                        <li><p>Chicken 1kg</p> <img src={xmarkImg} alt="Option" /></li>
                    </ul>
                </article>

                {/* <Styled.ListMerchandise>
                    
                </Styled.ListMerchandise> */}

            </Styled.ContainerOptionsMerchandise>


        </Styled.Container>
    )
}