import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

const DataContext = createContext();

function DataContextProvider(props) {
  const [usersAdress, setUsersAdress] = useState();

  const deleteAdress = () => {
    setUsersAdress(null);
  };

  const getUsersAdress = (e, setFieldValue) => {
    const { value } = e.target;

    const cep = value?.replace(/[^0-9]/g, "");

    if (cep?.length !== 8) {
      return;
    }

    axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
      setFieldValue("bairro", response.data.bairro);
      setFieldValue("logradouro", response.data.logradouro);
      setFieldValue("uf", response.data.uf);
      setFieldValue("cidade", response.data.localidade);
      setFieldValue("cep", response.data.cep);

      setUsersAdress([response.data]);

      console.log(response.data);
    });
  };

  useEffect(() => {}, []);

  return (
    <DataContext.Provider value={{ getUsersAdress, usersAdress, deleteAdress }}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContext;
export { DataContextProvider };
