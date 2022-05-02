import React from 'react'
import PropTypes from 'prop-types'
import { PricingPageTemplate } from '../../templates/pricing-page'

const PricingPagePreview = ({ getAsset, entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <PricingPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        content={widgetFor('body')}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

PricingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default PricingPagePreview
