//1
var a = {
    name:'Kajal',
    age:22,
    skill:'Full Stack Developer'
}


a.mobile = 9135467672
a.email = 'test@gmail.com'


console.log(a)

//2
class User {
    constructor(){
        this.a = 10;
        this.b = 20;
    }


    getAdd(){
        return this.a + this.b
    }
}


var user = new User()

console.log(user.getAdd())
