import React, { Component } from "react";
import "./Tariffs.css";

export class Tariffs extends Component {
  state = {
    hideExtras: true
  };

  toggleServices = () => {
    this.setState({
      hideExtras: !this.state.hideExtras
    });
  };
  render() {
    return (
      <section className="Tariffs-wrapper">
        <div className="container">
          <div className="Tariffs" id="tariffs">
            <h2 className="section-header">Tariflər</h2>
            <div
              className={
                this.state.hideExtras ? "Tariffs-grid hide" : "Tariffs-grid"
              }
            >
              <div className="Tariffs-card">
                <h3>Zona 1.</h3>
                <p>
                  Sahil m/s, İçəri Şəhər m/s, 28 may m/s, Nizami m/s, Elmlər
                  Akademiyası m/s, Gənclik m/s (metro ətrafı), Neftçilər pr-ti,
                  (Dəniz Limanından Bayıl dairəsinə qədər), Azərbaycan pr-ti,
                  Azadlıq pr-ti (Bakıxanov küçəsi ilə kəsişməsiyə qədər),
                  İnşaatçılar pr-ti, N.Nərimanov pr-ti, Parlament pr-ti, H.Cavid
                  pr-ti, Tbilisi pr-ti, (H.Əliyev küçəsi ilə kəsişməyə qədər),
                  Ü.Hacıbəyov küç., Niyazi küç., Z.Əliyeva küç., Bakıxanov küç.
                  (Azadlıq pr-ti ilə kəsişməyə qədər), R.Behbudov küç., S.Vurğun
                  küç. (Bakıxanov ilə kəsişməyə qədər), Ş.Mehdiyev küç.,
                  İ.Qutqaşınlı küç., Qızıl Şərq Hərbi Şəhərcik
                </p>
              </div>
              <div className="Tariffs-card">
                <h3>Zona 2.</h3>
                <p>
                  İnşaatçılar m/s, 20 yanvar m/s, M.Əcəmi m/s, Nəsimi m/s,
                  Azadlır pr-ti m/s, Dərnəgül m/s, N.Nərimanov m/s, Ulduz m/s,
                  Xətai m/s, Koroğlu m/s (metro ətrafı), 1-9 mikrorayonlar,
                  Alatava-1, Alatava-2, Alatava-3, Mətbuat pr-ti, Zərdabi küç.,
                  Xutor, Bayıl qəs., H.Əliyev pr-ti, Nobel pr-ti (AFFA-ya
                  qədər), Xocalı pr-ti, Atatürk pr-ti, Z.Bünyadov pr- ti (20
                  yanvar m/s Çermet korpüsü arası), Azadlıq pr-ti (H.Əliyev
                  küçəsi ilə kəsişmədən Binəqədi RPİ-nə qədər), Babək pr-ti (NZS
                  qədər) , Badamdar (Yasamal r-n məhkəməsinə qədər) A.Cəlilov
                  küç., Y.Səfərov küç.
                </p>
              </div>
              <div className="Tariffs-card">
                <h3>Zona 3.</h3>
                <p>
                  Q.Qarayev m/s, Neftçilər m/s, X.Dostluğu m/s, H.Aslanov m/s
                  Böyük Şor Babək pr-ti, Keşlə, UPD, NZS, Bakıxanov qəs.,
                  Qara-Çuxur, Günəşli, Sabunçu, Dərnəgül, Suraxanı, ., Zabrat-1,
                  Zabrat-2, H.Əliyev adına Hava Limanı, Badamdar, Bibiheybət,
                  Şıxov Salyan şosessi, Əmircan, Bül-Bülə, Balaxanı, Xırdalan
                  ş., Quşçuluq massivi, Saray, Ceyranbatan, Biləcəri, Rəsulzadə
                  qəs, Binəqədi kənd, Masazır, Sulutəpə, Xocahəsən, Novxanı,
                  Fatmai, Goradil, Mehdiabad, Hökməli, Qobu
                </p>
              </div>
              <div className="Tariffs-card">
                <h3>Zona 4.</h3>
                <p>
                  Buzovna, Mərdəkan, Şüvəlan, Albalılı, Qala, Zirə, Türkan,
                  Hövsan, Bilgəh, Xaşaxuna, Ramana, Nardaran, Pirşağı,
                  Kürdəxanı, Məhəmmədi,Pirallahı, Duvannı, Lök-Batan, Güzdək,
                  Sahil qəs.. Sanqacal, Ələt, Atyalı qəs., Corat, Sumqayıt,
                  Müşfiq qəs., Qızıldaş, Korgöz, Umbakı, Maştağa, Z.Tağıyev
                  qəs., Puta, Qobustan qəs.
                </p>
              </div>
              <div className="Tariffs-card">
                <h3>Zona 5.</h3>
                <p>Naxçıvan Muxtar Respublikasının şəhər və rayonları</p>
              </div>
              <div className="Tariffs-card">
                <h3>Zona 6.</h3>
                <p>
                  Neftçala, Salyan, Şirvan, Hacıqabul, Mərəzə, Şamaxı, Qobustan,
                  Xızı, Siyəzən, Şabran, Quba
                </p>
              </div>
              <div className="Tariffs-card">
                <h3>Zona 7.</h3>
                <p>
                  Azərbaycan Respublikasının digər şəhər və rayonları
                  (Ermənistan Silahlı Qüvvələri tərəfindən işğal edilmiş
                  ərazilər istisna olmaqla)
                </p>
              </div>
            </div>
            <div className="Tariffs-footer">
              <button
                className={
                  this.state.hideExtras ? "icon-btn" : "icon-btn rotate"
                }
                onClick={this.toggleServices}
              >
                <svg viewBox="0 0 24 24">
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Tariffs;
