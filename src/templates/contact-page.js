import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const ContactPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <div className="container content">
                  <div className="columns">
                      <div className="column">
                          <a href="https://www.google.com/maps/place/Fra%C5%88a+Mojtu+1,+949+01+Nitra,+Slovakia/@48.3119326,18.0890001,17z/data=!3m1!4b1!4m5!3m4!1s0x476b3ee0d61f50e3:0x20c50d66bb142a2!8m2!3d48.3119326!4d18.0911888" target="_blank"><img src="/img/map.png" alt="Map" /></a>
                      </div>
                      <div className="column">
                          <dl>
                              <dt>Meno</dt>
                              <dd>Mgr. Matej Borovský</dd>
                              <dt>Adresa</dt>
                              <dd>Fraňa Mojtu 1, Nitra, 949 01</dd>
                              <dt>Info</dt>
                              <dd>Termíny sedení na základe dohody</dd>
                              <dt>Telefon</dt>
                              <dd>+421 914 175 148 </dd>
                              <dt>Email</dt>
                              <dd>psychologborovsky@gmail.com</dd>
                          </dl>
                      </div>
                  </div>
              </div>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ContactPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ContactPage;

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
