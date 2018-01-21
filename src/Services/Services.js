import React, { Component } from "react";

import "./Services.css";

class Services extends Component {
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
      <section className="Services-wrapper">
        <div className="container">
          <div className="Services" id="services">
            <h2 className="section-header">Xidmətlər</h2>
            <div
              className={
                this.state.hideExtras ? "Services-grid hide" : "Services-grid"
              }
            >
              <div className="Services-card">
                <h2>Təcili çatdırma</h2>
                <p>
                  Göndərişin göndəricinin ünvanından qəbul edilib mümkün olan ən
                  qısa müddətdə (tarif cədvəlində qeyd olunan müddətdən gec
                  olmayaraq) ünvançıya çatdırılması xidmətidir.
                </p>
              </div>
              <div className="Services-card">
                <h2>Sürətli çatdırma</h2>
                <p>
                  Göndərişin göndəricinin ünvanından qəbul edilib 6-15 (altı-on
                  beş) iş saatı (ərazidən asılı olaraq) ərzində ünvançıya
                  çatdırılması xidmətidir.
                </p>
              </div>
              <div className="Services-card">
                <h2>Express çatdırma</h2>
                <p>
                  Göndərişin göndəricinin ünvanından qəbul edilib 3 (üç) iş günü
                  ərzində ünvançıya çatdırılması xidmətidir.
                </p>
              </div>
              <div className="Services-card">
                <h2>Adi Çatdırma</h2>
                <p>
                  Göndərişin göndəricinin ünvanından qəbul edilib 5 (beş) iş
                  günü ərzində ünvançıya çatdırılması xidmətidir.
                </p>
              </div>
              <div className="Services-card">
                <h2>Kütləvi çatdırma</h2>
                <p>
                  Kütləvi xarakterli göndərişlərin (fakturalar, təbrik
                  məktubları, dəvətnamələr, qəbzlər, açıqcalar, bukletlər, tarif
                  və xidmət cədvəlləri, biletlər, qəzetlər, jurnallar, kitablar
                  və s.) göndəricinin ünvanından qəbul edilib ünvançıya
                  çatdırılması və göndəriciyə hesabat verilməsi xidmətidir.
                </p>
              </div>
            </div>

            <div className="Services-footer">
              <button
                className={
                  this.state.hideExtras
                    ? "icon-btn services-toggle-btn"
                    : "icon-btn services-toggle-btn rotate"
                }
                onClick={this.toggleServices}
                aria-label="Service toggle"
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

export default Services;
