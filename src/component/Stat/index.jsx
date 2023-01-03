/**
 * Component stat of the User.
 * @component
 * @param {number} calorieCount - The count of the calorie of the user.
 * @param {number} carbohydrateCount - The count of the carbohydrate of the user.
 * @param {number} lipidCount - The count of the lipid of the user.
 * @param {number} proteinCount - The count of the protein of the user.
 * @example
 * const calorieCount = 180
 * const carbohydrateCount = 60
 * const lipidCount = 24
 * const proteinCount = 69
 * return (
 *   <Stat calorieCount={calorieCount} carbohydrateCount={carbohydrateCount} lipidCount={lipidCount} proteinCount={proteinCount} />
 * )
 */

import PropTypes from 'prop-types';
import calories from '../../assets/calories-icon.png'
import proteines from '../../assets/protein-icon.png'
import carbs from '../../assets/carbs-icon.png'
import fat from '../../assets/fat-icon.png'


//display calorie, carbohydrate, lipid, protein of the user
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
    /**
     * User's calorie count
    */
    calorieCount: PropTypes.number.isRequired,

    /**
    * User's carbohydrate count
   */
    carbohydrateCount: PropTypes.number.isRequired,

    /**
    * User's lipid count
   */
    lipidCount: PropTypes.number.isRequired,

    /**
    * User's protein count
   */
    proteinCount: PropTypes.number.isRequired,
}

export default Stat