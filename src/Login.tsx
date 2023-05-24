import APIKeyInput from "./APIKeyInput";
import footballIcon from "./assets/football.svg";

interface LoginProps {
  handleKeySubmit: (key: string) => void;
  isKeyInvalid: boolean;
}

const Login = ({ handleKeySubmit, isKeyInvalid }: LoginProps) => {
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <div className="text-center">
        <h1 className="display-3">
          API-Football
          <img src={footballIcon} alt="football" className="rotating-football" />
        </h1>
        <div className="mt-5">
          <APIKeyInput handleSubmit={handleKeySubmit} isKeyInvalid={isKeyInvalid} />
        </div>
      </div>
    </div>
  );
};

export default Login;
