import { Formik, Field, Form } from "formik";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import DataContext from "../../context";

export const FormComponent = () => {
  const { getUsersAdress } = useContext(DataContext);

  const history = useHistory();

  const onSubmit = () => {
    history.push("/ofertas");
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={{
        name: "",
      }}
      render={({ setFieldValue }) => (
        <Form>
          <label>CEP</label>
          <Field
            value={undefined}
            name="cep"
            type="text"
            onBlur={(e) => getUsersAdress(e, setFieldValue)}
          />
          <label>Logradouro</label>
          <Field name="logradouro" type="text" />
          <label>Bairro</label>
          <Field name="bairro" type="text" />
          <label>Cidade</label>
          <Field name="cidade" type="text" />
          <label>Estado</label>
          <Field name="uf" type="text" />
          <button type="submit">Consultar</button>
        </Form>
      )}
    />
  );
};
