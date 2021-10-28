import "./index.scss";
import homeImage from "../../assets/internetImg.svg";
import { FormComponent } from "../Form";

export const InfoSection = () => {
  return (
    <section className="mainSection">
      <h1>Informe seu CEP para consultar as nossas ofertas!</h1>
      <article className="container">
        <div className="leftContent">
          <img src={homeImage} alt="Pagamento" />
        </div>
        <div className="rightContent">
          <FormComponent />
        </div>
      </article>
    </section>
  );
};
