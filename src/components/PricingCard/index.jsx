import "./index.scss";
import { MdOutlineLocalOffer } from "react-icons/md";
import { BsCheckLg } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import offersData from "../../data/offers.json";
import DataContext from "../../context";

export const PricingCard = () => {
  const { usersAdress, deleteAdress } = useContext(DataContext);

  const [data, setData] = useState(offersData);
  const [offers, setOffers] = useState();

  useEffect(() => {
    setOffers(data.userData.offers);
  }, []);

  const renderAdress = (a, index) => {
    return (
      <article key={a.ibge}>
        <h2>Visualizando ofertas para o endereço:</h2>
        <p>
          <span>CEP:</span> {a.cep}
        </p>
        <p>
          <span>Rua:</span> {a.logradouro}
        </p>
        <p>
          <span>Bairro:</span> {a.bairro}
        </p>
        <p>
          <span>Cidade:</span> {a.localidade}
        </p>
        <p>
          <span>Estado:</span> {a.uf}
        </p>
      </article>
    );
  };

  const renderOffers = (item, index) => {
    return (
      <article className="wrapper" key={item.id}>
        <div className="cardHeading">Ofertas</div>
        <div className="offerIcon">
          <MdOutlineLocalOffer />
        </div>
        <div className="offerInfo">
          <p className="name">{item.name}</p>
          <p className="price">$ {item.price / 100}</p>
        </div>
        <hr />
        <div className="offerFeatures">
          <p>
            <BsCheckLg />
            Pagamento Mensal
          </p>
          <p>
            <BsCheckLg />
            Suporte 24/7
          </p>
          <p>
            <BsCheckLg />
            Instalação Gratuita
          </p>
        </div>
      </article>
    );
  };

  const ofertasRenderizadas = (
    <>
      <article className="currentAdress">
        {usersAdress?.map(renderAdress)}
      </article>
      <section className="cardContainer" id="offers">
        {offers?.map(renderOffers)}

        <Link to="/" onClick={deleteAdress} className="button">
          Ops, errei meu CEP!
        </Link>
      </section>
    </>
  );

  return (
    <>
      {usersAdress?.length > 0 ? (
        ofertasRenderizadas
      ) : (
        <article className="noOffers">
          <h1>Nenhuma oferta disponível no momento...</h1>
        </article>
      )}
    </>
  );
};
