import React, { Children } from 'react';
import PropTypes from "prop-types";

alert('Aubrey MBOLO')
const Profil = ({name, bio, job, children}) =>
{
    return(
        <div>
            <p>{name}</p>
            <p>{bio}</p>
            <p>{job}</p>
            <p>{children}</p>
        </div>
        
    )
}
Profil.propTypes = {
    name: PropTypes.string,
    bio: PropTypes.string,
    job: PropTypes.string,
   };

export default Profil