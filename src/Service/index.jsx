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
      console.log(process.env.REACT_APP_TEST)
      this.element = document.querySelector('#root');
   }
   
   
   /**
   * Get user's information.
   * @param {string} userId The users's id.
   * @return {object} The of the data users.
   */
    async getuserInfo(userId){
     
      if (this.env == "dev" ) {
         if (userId == 18) {
            console.log(user)
            return user
         }
         else if(userId == 12){
            console.log(user12)
            return user12
         }
      }else{
     
         try{
         const url = await fetch(`http://localhost:3000/user/${userId}`);
         const data = await url.json();
         console.log(data)
         return data;
         }catch(err){
            this.element.parentElement.innerHTML = `Error get InfoUser: ${err}`;
            console.error('There was an error!', err);
         }
      
      }  
   }

   /**
   * Get user's activity.
   * @param {string} userId The users's id.
   * @return {object} Data of the users's activity.
   */
   async getuserActivity(userId){

      if (this.env == "dev") {
         if (userId == 18) {
            console.log(user_18_activity)
            return user_18_activity
         }
         else if(userId == 12){
            console.log(user_12_activity)
            return user_12_activity
         }
      }else{
         try{
            const url = await fetch(`http://localhost:3000/user/${userId}/activity`);
            const activity = await url.json();
            console.log(activity)
            return activity;
            }catch(err){
               this.element.parentElement.innerHTML = `Error get activity: ${err}`;
               console.error('There was an error!', err);
            }
      }  
   }

   /**
   * Get user's session.
   * @param {string} userId The users's id.
   * @return {object} Data of the users's session of the week.
   */
   async getuserSession(userId){

      if (this.env == "dev") {
         if (userId == 18) {
            console.log(user_18_sessions)
            return user_18_sessions
         }
         else if(userId == 12){
            console.log(user_12_sessions)
            return user_12_sessions
         }
      }else{
         try{
            const url = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);
            const sessions = await url.json();
            console.log(sessions)
            return sessions;
            }catch(err){
               this.element.parentElement.innerHTML = `Error get sessions: ${err}`;
               console.error('There was an error!', err);
            }
      }  
   }

   /**
   * Get user's performance.
   * @param {string} userId The users's id.
   * @return {object} Data of the users's performance.
   */
   async getuserPerformance(userId){
     
      if (this.env == "dev") {
         if (userId == 18) {
            console.log(user_18_performance)
            return user_18_performance
         }
         else if(userId == 12){
            console.log(user_12_performance)
            return user_12_performance
         }
      }else{
         try{
            const url = await fetch(`http://localhost:3000/user/${userId}/performance`);
            const performance = await url.json();
            console.log(performance)
            return performance;
            }catch(err){
               this.element.parentElement.innerHTML = `Error get performance: ${err}`;
               console.error('There was an error!', err);
            }
      }  
   }
}
