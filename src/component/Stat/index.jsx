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
                <div className='text'>
                    <h2> {calorieCount}KCal</h2>
                    <p>calories</p>
                </div>
                
            </div>
            <div className='proteines'>
                <img src={proteines} alt='proteines'></img>
                <div className='text'>
                    <h2> {proteinCount}g </h2>
                    <p>proteines</p>
                </div>
            </div>
            <div className='gluicides'>
                <img src={carbs} alt=''></img>
                <div className='text'>
                    <h2>{carbohydrateCount}g</h2>
                    <p>gluicides</p>
                </div>
            </div>
            <div className='lipides'>
                <img src={fat} alt=''></img>
                <div className='text'>
                    <h2> {lipidCount}g</h2>
                    <p>lipides</p>
                </div>
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