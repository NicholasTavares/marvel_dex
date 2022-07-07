import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form, FormButton, SearchField } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";

interface IFormValues {
  characterName: string;
}

type setTextProp = (text: string) => void;

interface IFormProps {
  setText: setTextProp;
}

const FormSearch: React.FunctionComponent<IFormProps> = ({ setText }) => {
  const { register, handleSubmit } = useForm<IFormValues>();
  const onSubmit: SubmitHandler<IFormValues> = ({ characterName }) =>
    setText(characterName);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <SearchField
        {...register("characterName")}
        type="text"
        placeholder="Hulk"
      />

      <FormButton type="submit">
        <AiOutlineSearch />
      </FormButton>
    </Form>
  );
};

export default FormSearch;
