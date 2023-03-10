import * as Styled from "./style";

import bottle from "../../assets/shoppingify-master/source.svg";
import penImg from "../../assets/icons/pen.svg";

import trashImg from "../../assets/icons/trash.svg";
import multiImg from "../../assets/icons/xmarkYe.svg";
import minusImg from "../../assets/icons/minusYe.svg";

export default function LateralMenu() {
  return (
    <Styled.Container>
      <Styled.BtnoptionAddItem>
        <img src={bottle} alt="icone de viho" />
        <div>
          <p>Não encontrou o que precisa?</p>
          <button>Add item</button>
        </div>
      </Styled.BtnoptionAddItem>

      <Styled.HeaderModification>
        <h3> Shopping lista </h3>
        <img src={penImg} alt="icone de um lapis" />
      </Styled.HeaderModification>

      <Styled.ListProducts>
        <span>Frutas e Vegetais</span>

        <li>
          avocado
          <Styled.EditProductCart>
            3pc
            <input type="radio" name="radio" id="radio" />
            <Styled.Edit>
              <button>
                <img src={trashImg} alt="icone de lixeira" />
              </button>

              <div>
                <img src={minusImg} alt="menos" />
                <button>3pc</button>
                <img src={multiImg} alt="mais" />
              </div>
            </Styled.Edit>
          </Styled.EditProductCart>
        </li>

        <li>
          <p>avocado avocado avocado</p>
          <Styled.EditProductCart>
            3pc
            <input type="radio" name="radio" id="radio" />
            <Styled.Edit>
              <button>
                <img src={trashImg} alt="icone de lixeira" />
              </button>

              <div>
                <img src={minusImg} alt="menos" />
                <button>3pc</button>
                <img src={multiImg} alt="mais" />
              </div>
            </Styled.Edit>
          </Styled.EditProductCart>
        </li>
      </Styled.ListProducts>

      <Styled.ListProducts>
        <span>Frutas e Vegetais</span>

        <li>
          avocado
          <Styled.EditProductCart>
            3pc
            <input type="radio" name="radio" id="radio" />
            <Styled.Edit>
              <button>
                <img src={trashImg} alt="icone de lixeira" />
              </button>

              <div>
                <img src={minusImg} alt="menos" />
                <button>3pc</button>
                <img src={multiImg} alt="mais" />
              </div>
            </Styled.Edit>
          </Styled.EditProductCart>
        </li>
      </Styled.ListProducts>

      <Styled.ContainerSave>
        <div>
          <input type="text" placeholder="Pesquise" />
          <button>Save</button>
        </div>
      </Styled.ContainerSave>
    </Styled.Container>
  );
}
