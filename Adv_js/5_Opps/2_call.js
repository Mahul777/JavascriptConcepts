function SetUserName(username)
{
    this.username = username;
}

function createUserName(username,email,password)
{
    // SetUserName(username); //this function is not calling u just have given reference 
    // SetUserName.call(username); //Now it is holding the refernec using call 
    SetUserName.call(this,username); //Calls the SetUsername function with the current context (this) and the provided username
    this.email = email;
    this.password = password;
    // this.username = username;
}

const UserDetails = new createUserName("Apoorv","abc.gmail.com","123");
console.log(UserDetails); createUserName 
// Output: 
// {
//     username: 'Apoorv',
//     email: 'abc.gmail.com',
//     password: '123'
//   }