import React from "react";
import LogoTim from "../../assets/img/logo-tim-mahadata.png";
import { WrapperMobileLayout } from "./styles";

const MobileLayout = () => {
  return (
    <WrapperMobileLayout>
      <img className="logo-tim" src={LogoTim} alt="Logo Tim Mahadata"></img>
      <h3>
        Mohon maaf, untuk saat ini Peta Pergerakan Masyarakat dan Kasus COVID-19
        Indonesia <span>hanya tersedia melalui akses desktop</span>
      </h3>
      <h5>Tim Sinergi Mahadata UI Tanggap COVID-19</h5>
    </WrapperMobileLayout>
  );
};

export default MobileLayout;
