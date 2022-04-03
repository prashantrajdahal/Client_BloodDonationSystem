import React from 'react'
import { Helmet } from 'react-helmet'

const MetaData = ({ title }) => {
    return (
        <Helmet>
            <title>{`${title} - Blood Donation Management System`}</title>
        </Helmet>
    )
}

export default MetaData