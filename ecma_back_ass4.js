class User {
    constructor(a,b){
        this.a = a;
        this.b = b;
    }


    getAdd(){
        return this.a + this.b
    }
    getSub(){
        return this.a - this.b
    }
    getMul(){
        return this.a * this.b
    }
    getDiv(){
        return this.a / this.b
    }
}


var user = new User(30,10)


console.log(user.getAdd())
console.log(user.getSub())
console.log(user.getMul())
console.log(user.getDiv())
