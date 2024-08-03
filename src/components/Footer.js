import * as React from "react";
/* import { Link } from "gatsby"; */


const Footer = class extends React.Component {
  render() {
    return (
        <div className="content has-text-centered has-background-grey has-text-white-ter">
          <div className="container has-background-grey has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-12">
                Mgr. Matej Borovský, Fraňa Mojtu 1, Nitra, 949 01, +421 951 029 162, <br/>IČO: 54429153
              </div>
            </div>
          </div>
        </div>
    );
  }
};

export default Footer;
