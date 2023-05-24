import * as React from "react";

type APIKeyInputProps = {
  handleSubmit: (key: string) => void;
  isKeyInvalid: boolean;
};

const APIKeyInput = ({ handleSubmit, isKeyInvalid }: APIKeyInputProps) => {
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
    <form onSubmit={onSubmit} className="mt-5 form-control my-3 d-flex flex-column">
      <label htmlFor="apiKey" className="p-3">
        Chave da API-Football
      </label>
      <input type="text" name="apiKey" />
      {isKeyInvalid && <p className="text-danger mb-0 mt-2">Chave inválida.</p>}
      <button type="submit" className="btn btn-primary btn-block mt-3">
        Entrar
      </button>
    </form>
  );
};

export default APIKeyInput;
