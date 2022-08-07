// ชื่อคลาสเป็นตัวพิมพ์ใหญ่ 


class User{
    name;
    password;   
    role;


    constructor(name,password,role){
        console.log('constructor')
        this.name = name // this is object be structed in this clases.
        this.password = password // this is object be structed in this clases.
        this.role = role || 'normal-user' // undefined == false =>pass to 'normal-user'

    }

    login(password){
        console.log('Login ' + password)
    }


    changePassword(newPassword){
        console.log('Change Password')
    }
}

 const a = new User('a', '1234' , 'admin')
//  const b = new User()
//  const c = new User()


 console.log(a)

 const aa ={
    name: 'a',
    password: undefined,
    role: undefined,

    login(password){
        console.log('Login')
    },


    changePassword(newPassword){
        console.log('Change')
    },


    loggingName(){
        console.log(this.name)
    },

 }
 const bb ={
    name: 'b',
    password: undefined,
    role: undefined,

    login(password){
        console.log('Login')
    },


    changePassword(newPassword){
        console.log('Change')
    }
 }

 console.log(aa)

//Inheritance Admin similar to User 

// Use extends จาก class User
class Admin extends User{
    updateProduct(product){
        console.log('Update Product')
    }
}

// ประกาศแยกเพราะว่าอาจมี Method ที่ไม่เหมือนกัน
class Customer extends User{
    // constructor(...args){  //['Cust','12,'customer'] ==> ส่่งเข้าไปใน User
    //     super(...args)
    // }

    // If create constructor byself, it should use super

    // constructor(...args){
    //     super(...args)
    //     this.rank = rank; // structor i
    // }


    createOrder(cart){
        console.log('Create Order')
    }

    login(phoneNumber){
    console.log('Customer Login')
    }
    logCustName(){
        super.loggingName()
    }

}

// const admin= new Admin()
// console.log(admin)
// console.log(admin.login())

const cust = new Customer('Cust','12', 'customer')
cust.login()


const arr =[1,2,3];
console.log(arr)
arr.values();






const num = 5;
num.toFixed(2)



Array.prototype.sum = function(){

    console.log('Array sum')
}


arr.sum()
arr.map()