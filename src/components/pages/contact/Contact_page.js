import React from 'react'
import ContactLeftSide from 'components/compound/contact/ContactLeftSide_comp';
import ContactRightSide from 'components/compound/contact/ContactRightSide_comp';

function Contact() {
    document.title = "Contact";

    return (
        <div className="container page-content">
            <div className="row">
                <div className="col-12 col-md-6 order-1 order-md-0 mt-5 mt-md-0">
                    <ContactLeftSide />
                </div>
                <div className="col-12 col-md-6">
                    <ContactRightSide />
                </div>
            </div>
        </div>
    )
}

export default Contact
