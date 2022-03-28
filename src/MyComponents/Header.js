//creating a react functional component

import React from 'react'
//importing , PropTypes so that we can define TYPES for PROPS
import PropTypes from 'prop-types'
//this import is for links using react router ... we also replace all href= by to= , in the code.
import {Link} from "react-router-dom";

export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className='m-auto'>
                <Link className="navbar-brand" to="/">{props.title}</Link>
                </div>
            </div>
        </nav>
    )
}

//propTypes are used to give TYPE to props
Header.propTypes = {
    title: PropTypes.string
}

//default props ... if no props are passed, default props are rendered
Header.defaultProps = {
    title: "Your Title Here"
}
