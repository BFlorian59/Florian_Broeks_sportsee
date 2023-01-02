/**
* Allows to connect to a database
*
* @param {object} userId id of the user in url
* @return {info} array of infomations of the user
* @return {activity} array of the activity of the user
* @return {session} array of the session of the user
* @return {performance} array of the performance of the user

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

   constructor(){
      this.env = process.env.REACT_APP_TEST;
   }
   
   

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
         .then((response) => response.json())
         .then((info) => {
            console.log(info);
            return info;
         })
         .catch((err) => {
            console.log(err.message);
         });
      }  
   }


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
         fetch(`http://localhost:3000//user/${userId}/activity`)
         .then((response) => response.json())
         .then((activity) => {
            console.log(activity);
            return activity;
         })
         .catch((err) => {
            console.log(err.message);
         });
      }  
   }

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
         .then((response) => response.json())
         .then((session) => {
            console.log(session);
            return session;
         })
         .catch((err) => {
            console.log(err.message);
         });
      }  
   }

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
         .then((response) => response.json())
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
