import React from "react";

import img from "./curier.webp";
import "./About.css";

const About = () => {
  return (
    <section className="About-wrapper">
      <div className="container">
        <div className="About" id="about">
          <h2 className="section-header">Haqqımızda</h2>
          <div className="About-grid">
            <div className="About-text">
              <p>
                “Caspian Delivery Service” Məhdud Məsuliyyətli Cəmiyyəti
                Azərbaycan Respublikası Qanunvericiliyə uyğun qaydada təsis
                edilərək 27 yanvar 2012-ci il tarixdə 1601502161 dövlət
                qeydiyyat nömrəsi ilə (VÖEN) Azərbaycan Respublikası Vergilər
                Nazirliyinin Bakı şəhəri Vergilər Departamentinin Kommersiya
                Hüquqi Şəxslərin Dövlət Qeydiyyatı İdarəsi tərəfindən qeydiyyata
                alınmışdır. Şirkət Azərbaycan Respublikası Rabitə və İnformasiya
                Texnologiyaları Nazirliyi tərəfindən 5 (beş) il müddətinə
                verilmiş 065602 saylı, 30 may 2013-cü il tarixli lisenziyaya
                əsasən sürətli poçt rabitə xidmətinin həyata keçirilməsi üzrə
                fəaliyyət göstərir.
              </p>
            </div>

            <div className="About-img">
              <img src={img} alt="curier" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
