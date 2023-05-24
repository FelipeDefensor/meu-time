import * as React from "react";

type TeamLogoProps = {
  logoUrl: string;
};

const TeamLogo: React.FC<TeamLogoProps> = ({ logoUrl }) => (
  <div style={{ padding: "20px" }}>
    <img src={logoUrl} width="100" height="100" />
  </div>
);

export default TeamLogo;
