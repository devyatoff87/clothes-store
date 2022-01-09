
import React from 'react'
import { SpinnerContainer, SpinnerOverlay } from './withSpinnerStyles'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "redux/shop/shopSelector";


//withSpinner is function that returns a new component with some new logic
const withSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {

    return isLoading ?
        (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps && { ...otherProps }} />
        )
}




export default withSpinner