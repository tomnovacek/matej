import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import FullWidthImage from "../components/FullWidthImage";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { getImage } from "gatsby-plugin-image";

// eslint-disable-next-line
export const AboutPageTemplate = ({ image, title, photo, introduction, link, content, contentComponent, }) => {
  const PageContent = contentComponent || Content;
  const heroImage = getImage(image) || image;
  const matejImage = getImage(photo) || photo;

  return (
    <div> 
      <FullWidthImage img={heroImage} title={title} />
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                    <div className="columns">
                        <div className="column is-one-third">
                        <PreviewCompatibleImage imageInfo={{image:photo, alt:"Mgr. Matej Borovsky, psychológ, terapeut, Nitra"}}/> {/* TODO: photo or matejImage */}
                        </div>
                        <div className="column is-offset-1">
                          <p>{introduction}</p>
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
  photo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  introduction: PropTypes.string,
  link: PropTypes.string,
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
        photo={post.frontmatter.photo}
        introduction={post.frontmatter.introduction}
        link={post.frontmatter.link}
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
        introduction
        link
        photo {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED)
          }
        }
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
