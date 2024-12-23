// Object : it just a collection of properties and methods
//when we use "new" keyword the empty object is created which is called instance
//Constructor function -> it is called by new keyword and pack all the argument 
//this ->all the argument is placed in a contructor function

const user =
{
    username : "Apoorv",
    logCount : 5,
    signIn : true,

    //Creating methods 
    getUserDetails: function(){
        console.log(`Get user Details from Database`);
        console.log(`UserName:${this.username}`); //this refers to the user object
        console.log(this);
        
        
        
    }
}

console.log(user.username);  //Apoorv
console.log(user.getUserDetails());  //Get user Details from Database
                                     //UserName:Apoorv
                                    //  {
                                    //     username: 'Apoorv',
                                    //     logCount: 5,
                                    //     signIn: true,
                                    //     getUserDetails: [Function: getUserDetails]
                                    //   }
                                      //undefined
console.log(this);                  //{}


// Constructor function to create User objects

function User(username, logCount, isLoggedIn)
{
  this.username = username;
  this.logCount = logCount;
  this.isLoggedIn = isLoggedIn;

//   return this;
}

const user1 = new User("ApoorvSahu","89",true);
const user2 = new User("Mehul","9",true);
console.log(user1);  //User { username: 'ApoorvSahu', logCount: '89', isLoggedIn: true }
console.log(user2); //User { username: 'Mehul', logCount: '9', isLoggedIn: true }

