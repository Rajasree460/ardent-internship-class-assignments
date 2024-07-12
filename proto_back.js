var student = function(){
    this.name = 'This Is Prototype';
    this.age = 22;
    this.mobile = 9135467672;
}


student.prototype = {
    address:'Patna',
    getAdd:function(){
        console.log('Hello Prototype')
    }
}


var std = new student()
console.log(std.name, std.age, std.mobile, std.address, std.getAdd())
