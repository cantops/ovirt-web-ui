import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'patternfly-react'

import style from './style.css'

/*
 * Standard "No Data" component to display when a VM cannot provide the data
 * necessary to render one of the charts. The VM can be down, have no guest agent,
 * or the API may not return parts of the statistics data needed.
 */
const NoLiveData = ({ title, message, id }) => (
  <div className={style['no-data-card-body']} id={id}>
    <div className={style['no-data-icon']}>
      <Icon type='fa' name='bar-chart' />
    </div>
    <div className={style['no-data-title']}>
      { title || 'No Data Available' }
    </div>
    <div className={style['no-data-message']}>
      { message || 'Utilization data is only available when the VM is running.' }
    </div>
  </div>
)
NoLiveData.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  message: PropTypes.string,
}

export default NoLiveData
