import PropTypes from 'prop-types';
import calories from '../../assets/calories-icon.png'
import proteines from '../../assets/protein-icon.png'
import carbs from '../../assets/carbs-icon.png'
import fat from '../../assets/fat-icon.png'

function Stat({calorieCount, carbohydrateCount, lipidCount, proteinCount}) {
    return (    
        <div className='keyData'>
            <div className='calories'>
                <img src={calories} alt='calories'></img>
                <p> {calorieCount}KCal calories</p>
            </div>
            <div className='proteines'>
                <img src={proteines} alt='proteines'></img>
                <p> {proteinCount}g proteines</p>
            </div>
            <div className='gluicides'>
                <img src={carbs} alt=''></img>
                <p> {carbohydrateCount}g carbs</p>
            </div>
            <div className='lipides'>
                <img src={fat} alt=''></img>
                <p> {lipidCount}g lipides</p>
            </div>
        </div> 
	)    
}

Stat.propTypes = {
    calorieCount: PropTypes.number,
    carbohydrateCount: PropTypes.number,
    lipidCount: PropTypes.number,
    proteinCount: PropTypes.number,
}

export default Stat