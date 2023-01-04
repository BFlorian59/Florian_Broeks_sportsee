/**
* Allows to connect to a database
* @author Florian
* @version 1.0
*/


/* eslint-disable eqeqeq */
import user from '../mock/user18/user'
import user12 from '../mock/user12/user'
import user_18_sessions from '../mock/user18/session'
import user_12_sessions from '../mock/user12/session'
import user_18_activity from '../mock/user18/activity'
import user_12_activity from '../mock/user12/activity'
import user_18_performance from '../mock/user18/performance'
import user_12_performance from '../mock/user12/performance'
import '../styles/activity.css'



//get data
export default class Service {

     /**
     * Call .env.
     * @property {string} this.env - The .env value.
     */
   constructor(){
      this.env = process.env.REACT_APP_TEST;
   }
   
   
   /**
   * Get user's information.
   * @param {string} userId The users's id.
   * @return {object} The of the data users.
   */
   getuserInfo(userId){
      console.log(this.env);
      if (this.env) {
         if (userId == 18) {
            console.log(user)
            return user
         }
         else if(userId == 12){
            console.log(user12)
            return user12
         }
      }else{
         fetch(`http://localhost:3000/user/${userId}`)
         .then((response) => { if (response.ok) {
            return response.json();
          }
          throw new Error('Something went wrong');
         })
         .then((info) => {
            console.log(info);
            return info;
         })
         .catch((err) => {
            console.log(err.message);
         });
      }  
   }

   /**
   * Get user's activity.
   * @param {string} userId The users's id.
   * @return {object} Data of the users's activity.
   */
   getuserActivity(userId){

      if (this.env) {
         if (userId == 18) {
            console.log(user_18_activity)
            return user_18_activity
         }
         else if(userId == 12){
            console.log(user_12_activity)
            return user_12_activity
         }
      }else{
         fetch(`http://localhost:3000/user/${userId}/activity`)
         .then((response) => { if (response.ok) {
            return response.json();
          }
          throw new Error('Something went wrong');
         })
         .then((activity) => {
            console.log(activity);
            return activity;
         })
         .catch((err) => {
            console.log(err.message);
         });
      }  
   }

   /**
   * Get user's session.
   * @param {string} userId The users's id.
   * @return {object} Data of the users's session of the week.
   */
   getuserSession(userId){

      if (this.env) {
         if (userId == 18) {
            console.log(user_18_sessions)
            return user_18_sessions
         }
         else if(userId == 12){
            console.log(user_12_sessions)
            return user_12_sessions
         }
      }else{
         fetch(`http://localhost:3000/user/${userId}/average-sessions`)
         .then((response) => { if (response.ok) {
            return response.json();
          }
          throw new Error('Something went wrong');
         })
         .then((session) => {
            console.log(session);
            return session;
         })
         .catch((err) => {
            console.log(err.message);
         });
      }  
   }

   /**
   * Get user's performance.
   * @param {string} userId The users's id.
   * @return {object} Data of the users's performance.
   */
   getuserPerformance(userId){

      if (this.env) {
         if (userId == 18) {
            console.log(user_18_performance)
            return user_18_performance
         }
         else if(userId == 12){
            console.log(user_12_performance)
            return user_12_performance
         }
      }else{
         fetch(`http://localhost:3000/user/${userId}/performance`)
         .then((response) => { if (response.ok) {
            return response.json();
          }
          throw new Error('Something went wrong');
         })
         .then((performance) => {
            console.log(performance);
            return performance;
         })
         .catch((err) => {
            console.log(err.message);
         });
      }  
   }
}
