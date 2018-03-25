import React from "react";
import { FormattedMessage } from "react-intl";

const navData = [
  {
    text: <FormattedMessage id="nav.home" defaultMessage="Ana səhifə" />,
    link: "#home"
  },
  {
    text: <FormattedMessage id="nav.about" defaultMessage="Haqqımızda" />,
    link: "#about"
  },
  {
    text: <FormattedMessage id="nav.services" defaultMessage="Xidmətlər" />,
    link: "#services"
  },
  {
    text: <FormattedMessage id="nav.tariffs" defaultMessage="Tariflər" />,
    link: "#tariffs"
  },
  {
    text: <FormattedMessage id="nav.partners" defaultMessage="Partnyorlar" />,
    link: "#partners"
  },
  {
    text: <FormattedMessage id="nav.contact" defaultMessage="Əlaqə" />,
    link: "#contact"
  }
];

export default navData;
