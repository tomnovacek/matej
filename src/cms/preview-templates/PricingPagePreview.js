import React from 'react'
import PropTypes from 'prop-types'
import { PricingPageTemplate } from '../../templates/pricing-page'

const PricingPagePreview = ({ entry, widgetFor }) => (
  <PricingPageTemplate
    title={entry.getIn(['data', 'title'])}
    introduction={entry.getIn(['data', 'introduction'])}
    content={widgetFor('body')}
  />
)

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PricingPagePreview
