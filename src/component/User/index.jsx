import PropTypes from 'prop-types';

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
    lastname: PropTypes.string,
    firstname: PropTypes.string,
}

export default User