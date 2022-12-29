/**
 * Represents a User.
 * @param {string} firstname - The firstname of the user.
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
    firstname: PropTypes.string,
}

export default User