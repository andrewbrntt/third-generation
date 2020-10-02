import React from 'react'
import {
  BeautifyExteriorIcon,
  LowerMaintenanceCostsIcon,
  LowerUtilityCostIcon,
  ProtectStructuralIntegrityIcon
} from './SidingInfographicIcon'

const SidingInfographic = () => {

  return (
    <div className='siding-infographic__container background-color-primary color-white padding-x-standard'>
      <div className='siding-infographic__section-container siding-infographic__section-container--icon-left'>
        <h3 className='siding-infographic__section-title-mobile'>Beautify Exterior</h3>
        <BeautifyExteriorIcon/>
        <div>
          <h3 className='siding-infographic__section-title-tablet'>Beautify Exterior</h3>
          <p className='siding-infographic__section-text'>
            Make your homes curb appeal stand out and increase its value.
          </p>
        </div>
      </div>
      <div className='siding-infographic__section-container siding-infographic__section-container--icon-right'>
        <h3
          className='siding-infographic__section-title-mobile siding-infographic__section-title-mobile--margin-top-40'>Lower
          Utility Costs</h3>
        <div className=''>
          <h3 className='siding-infographic__section-title-tablet'>Lower Utility Costs</h3>
          <p className='siding-infographic__section-text'>
            Ensure your home's insulation is fully sealed and increase your efficiency.
          </p>
        </div>
        <LowerUtilityCostIcon/>
      </div>
      <div className='siding-infographic__section-container siding-infographic__section-container--icon-left'>
        <h3
          className='siding-infographic__section-title-mobile siding-infographic__section-title-mobile--margin-top-40'>Lower
          Maintenance Costs</h3>
        <LowerMaintenanceCostsIcon/>
        <div>
          <h3 className='siding-infographic__section-title-tablet'>Lower Maintenance Costs</h3>
          <p className='siding-infographic__section-text'>
            Replace worn siding and reduce the number of repairs your home needs.
          </p>
        </div>
      </div>
      <div className='siding-infographic__section-container siding-infographic__section-container--icon-right'>
        <h3
          className='siding-infographic__section-title-mobile siding-infographic__section-title-mobile--margin-top-40'>Protect
          Structural Integrity</h3>
        <div className='siding-infographic--v-align-center'>
          <h3 className='siding-infographic__section-title-tablet'>Protect Structural Integrity</h3>
          <p className='siding-infographic__section-text'>
            Defend your home from harsh Lake Erie weather and extreme temperatures.
          </p>
        </div>
        <ProtectStructuralIntegrityIcon/>
      </div>
    </div>
  )

}

export default SidingInfographic
