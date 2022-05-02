import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <AboutPageTemplate
        image={getAsset(data.image)}
        photo={data.photo}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        introduction={data.introduction}
        content={widgetFor('body')}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}


AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default AboutPagePreview
