import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import FullWidthImage from "../components/FullWidthImage";
import { getImage } from "gatsby-plugin-image";

// eslint-disable-next-line
export const AboutPageTemplate = ({ image, title, content, contentComponent, }) => {
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
{/*                 <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2> */}
                    <div className="columns">
                        <div className="column is-one-third">
                           { <img src="/img/matej.jpeg" alt="Matej Borovsky" style={{borderRadius: "3%"}}/>}
                        </div>
                        <div className="column is-offset-1">
                            <p>Som psychológ a frekventant <a href="https://www.psychoterapie-integrace.cz" target="_blank"> Výcviku integrace v psychoterapii</a>. Psychológiu som vyštudoval v Brne na Masarykovej univerzite. V súčasnosti žijem v Nitre, kde mám aj svoje pracovisko. Okrem psychológie a terapie sa venujem svojej manželke, Bohu, hudbe a priateľom.</p>
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

AboutPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        image={post.frontmatter.image}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

/* AboutPage.propTypes = {
   data: PropTypes.object,
}; */
AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
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
