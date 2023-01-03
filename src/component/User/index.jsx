/**
 * Component firstname User.
 * @component
 * @param {string} firstname - The firstname of the user.
 * @example
 * const firstname = Thomas
 * return (
 *   <User firstname={firstname} />
 * )
 */

import PropTypes from 'prop-types';

//display user's firstname 

function User({firstname}) {    
    return (
        <div>
            <div className="Userinfo">
                <h1 className="bonjour"> Bonjour</h1>
                <h1 className="firstname">{firstname} </h1>
            </div>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
       
	)    
}

User.propTypes = {
    /**
     * User's firstname
    */
    firstname: PropTypes.string.isRequired,
}

export default User