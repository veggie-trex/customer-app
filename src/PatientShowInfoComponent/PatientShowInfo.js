import React from 'react'
import ShareButton from '../ShareButtonComponent/ShareButton'
import Patient from '../PatientComponent/Patient'
import Viewrecord from '../ViewRecordComponent/ViewRecord' 
const patientShowInfo = () => {

    return (<div>
        <Viewrecord/>
        <Patient />
        <ShareButton />
    </div>)

}

export default patientShowInfo;