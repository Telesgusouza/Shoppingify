import actionType from "../../actions";
import { useRef, useState } from "react";
import * as Styled from "./style";

import qrcodeImg from "../../assets/qrcode.png";
import { clearCart } from "../../firebase/Firestore";
import { useDispatch, useSelector } from "react-redux";

import { IPropsRootReducer } from "../../interfaces";

import xmark from "../../assets/icons/xmark.svg";
import { toast } from "react-toastify";

interface IPropsPaymentMethod {
  totalValue: string;
}

export default function PaymentMethod({ totalValue }: IPropsPaymentMethod) {
  const [togglePaymentMethod, setTogglePaymentMethod] =
    useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const { togglePayment } = useSelector(
    (rootReducer: IPropsRootReducer) => rootReducer.togglePaymentMethod
  );
  const dispatch = useDispatch();

  async function handleCopy() {
    navigator.clipboard.writeText(
      "dfg26hbn635yt9j6535nh5vgdfg26hbn635yt9j6535nh5vg"
    );

    const data = await clearCart();
    handleTogglePaymentMethod(data);
  }

  function handleTogglePaymentMethod(togglePay: boolean) {
    dispatch({
      type: actionType.togglwBoxPayment,
      payload: togglePay,
    });

    setTimeout(() => {
      window.location.reload();
    }, 400);
  }

  function handleToggleMethod(toggleMt: boolean) {
    setTimeout(() => {
      setTogglePaymentMethod(toggleMt);
    }, 180);
  }

  async function handleTicket(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (name && email && address) {
      const data = await clearCart();
      handleTogglePaymentMethod(data);

      setName("");
      setEmail("");
      setAddress("");
    } else {
      toast.error("Preencha todos os campos", { theme: "light" });
    }
  }

  return (
    <Styled.Container toggle={togglePayment}>
      <Styled.ContainerContent>
        <img
          src={xmark}
          alt="voltar"
          onClick={() => handleTogglePaymentMethod(false)}
        />

        <h1>Finalise sua compra</h1>

        <Styled.PaymentMethodBtn>
          <button onClick={() => handleToggleMethod(false)}>Boleto</button>
          <button onClick={() => handleToggleMethod(true)}>PIX</button>
        </Styled.PaymentMethodBtn>

        <Styled.ValueCart>R$ {totalValue}</Styled.ValueCart>

        {togglePaymentMethod ? (
          <Styled.PaymentPix>
            <h2>PIX</h2>
            <p>Pague com pix <br />   </p>
            <strong> as compras não são reais, <br />nada sera cobrado</strong> 
            <img src={qrcodeImg} alt="qrcode" />

            <div>Ou</div>

            <Styled.PixBox>
              <p>dfg26hbn635yt9j6535nh5vgdfg26hbn635yt9j6535nh5vg</p>
              <button onClick={handleCopy}>Copiar</button>
            </Styled.PixBox>
          </Styled.PaymentPix>
        ) : (
          <Styled.BankSlip  >
            <h2>Boleto</h2>
            <p>Pague suas compras com boleto <br /> </p>
            <strong> as compras não são reais, <br />nada sera cobrado</strong> 

            <form onSubmit={(e) => handleTicket(e)}>
              <label htmlFor="name">
                <p>Nome </p>
                <input
                  type="text"
                  placeholder="Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              <label htmlFor="email">
                <p>Email</p>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <label htmlFor="endereço">
                <p>Endereço</p>
                <input
                  type="text"
                  placeholder="Endereço"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </label>

              <button type="submit">gerar boleto</button>
            </form>
          </Styled.BankSlip>
        )}
      </Styled.ContainerContent>
    </Styled.Container>
  );
}
