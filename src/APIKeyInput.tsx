import * as React from "react";
import eye from "./assets/eye.svg";
import eyeSlash from "./assets/eye-slash.svg";

type APIKeyInputProps = {
  handleSubmit: (key: string) => void;
  isKeyInvalid: boolean;
};

const APIKeyInput = ({ handleSubmit, isKeyInvalid }: APIKeyInputProps) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

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
      <div className="input-group">
        <input
          type={showPassword ? "text" : "password"}
          className="form-control"
          name="apiKey"
          aria-label="API key"
        />
        <div className="input-group-append">
          <button onClick={togglePasswordVisibility} className="btn" type="button">
            {showPassword ? (
              <img src={eyeSlash} alt="Hide password" />
            ) : (
              <img src={eye} alt="Show password" />
            )}
          </button>
        </div>
      </div>
      {isKeyInvalid && <p className="text-danger mb-0 mt-2">Chave inválida.</p>}
      <button type="submit" className="btn btn-primary btn-block mt-3">
        Entrar
      </button>
    </form>
  );
};

export default APIKeyInput;
