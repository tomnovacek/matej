import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import FullWidthImage from "../components/FullWidthImage";
import { getImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLocationDot, faCircleInfo, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
//import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used


// eslint-disable-next-line
export const ContactPageTemplate = ({ image, title, name, address, info, phone, email, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  const heroImage = getImage(image) || image;

  return (
    <div>
    <FullWidthImage img={heroImage} title={title} />
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              {/* <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2> */}
              <div className="container content">
                  <div className="columns">
                      <div className="column">
                          <a href="https://www.google.com/maps/place/Fra%C5%88a+Mojtu+1,+949+01+Nitra,+Slovakia/@48.3119326,18.0890001,17z/data=!3m1!4b1!4m5!3m4!1s0x476b3ee0d61f50e3:0x20c50d66bb142a2!8m2!3d48.3119326!4d18.0911888" target="_blank" rel="noreferrer"><img src="/img/map.png" alt="Map" /></a>
                      </div>
                      <div className="column">
                          <ul className="no-bullets">
                              <li><FontAwesomeIcon icon={faUser}/> {name}</li>
                              <li><FontAwesomeIcon icon={faLocationDot}/> {address}</li>
                              <li><FontAwesomeIcon icon={faCircleInfo}/> {info}</li>
                              <li><FontAwesomeIcon icon={faPhone}/> {phone} </li>
                              <li><FontAwesomeIcon icon={faEnvelope}/> {email}</li>
                          </ul>
                      </div>
                  </div>
              </div>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

ContactPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string.isRequired,
  name: PropTypes.string,
  address: PropTypes.string,
  info: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ContactPageTemplate
        image={post.frontmatter.image}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        name={post.frontmatter.name}
        address={post.frontmatter.address}
        info={post.frontmatter.info}
        phone={post.frontmatter.phone}
        email={post.frontmatter.email}
        content={post.html}
      />
    </Layout>
  );
};

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ContactPage;

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        name
        address
        info
        phone
        email
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
      html
    }
  }
`;
