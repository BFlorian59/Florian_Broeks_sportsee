import user from '../mock/user18/user'
import user_18_sessions from '../mock/user18/session'
import user_18_activity from '../mock/user18/activity'
import user_18_performance from '../mock/user18/performance'
import '../styles/activity.css'
import env from '../.env'

export default class ComponentDidMount {

   constructor(){
      this.env = true;
   }

   getuserID(userId){
      if (env) {
         console.log(user)
         return user
      }else{
         fetch(`http://localhost:3000/user/${userId}`)
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            return data;
         })
         .catch((err) => {
            console.log(err.message);
         });
      }  
   }


   getuserActivity(userId){

      if (env) {
         console.log(user_18_activity)
         return user_18_activity
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

      if (env) {
         console.log(user_18_sessions)
         return user_18_sessions
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

      if (env) {
         console.log(user_18_performance)
         return user_18_performance
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
