import * as React from "react";

type APIKeyInputProps = {
  handleSubmit: (key: string) => void;
};

const APIKeyInput = ({ handleSubmit }: APIKeyInputProps) => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const input = form.elements.namedItem("apiKey") as HTMLInputElement;
    if (!input) {
      throw new Error("apiKey input not found");
    }
    const value = input.value;
    handleSubmit(value);
  };
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="apiKey">Insira sua chave para a API:</label>
      <input type="text" name="apiKey" />
      <input type="submit" value="Entrar" />
    </form>
  );
};

export default APIKeyInput;
