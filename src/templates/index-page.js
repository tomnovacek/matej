import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
/* import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll"; */
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  content,
  contentComponent,
  /* intro, */
}) => {
  const PageContent = contentComponent || Content;
  const heroImage = getImage(image) || image;

  return (
    <div>
      <FullWidthImage img={heroImage} title={heading} subheading={subheading} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
/*   intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }), */
};

const IndexPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <IndexPageTemplate
        image={post.frontmatter.image}
        title={post.frontmatter.title}
        contentComponent={HTMLContent}
        heading={post.frontmatter.heading}
        subheading={post.frontmatter.subheading}
        content={post.html}
        /* intro={frontmatter.intro} */
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
      }
      html
    }
  }
`;
