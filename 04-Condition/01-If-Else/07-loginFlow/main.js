/* - จงเขียนโค้ดเพื่อรับ input เข้ามา 2 ค่า คือ password และ password
- หาก username หรือ password เป็นค่าว่างให้ โชว์ข้อความ “username is required” หรือ “password is required”
- หาก username = “admin” และ password = “1234” หรือ username = “john” และ password = “qwerty” ให้โชว์ข้อความ “Hello” ตามด้วยชื่อ username
- หาก username และ password ไม่ตรงตามเงื่อนไขที่กล่าวมาให้ โชว์ข้อความ “invalid username or password”
 */

//username == '' ===> username is required
//password == '' ===> password is required


//username == 'admin' && password == '1234' ===> Hello, admin
//username == 'john' && password == 'qwerty' ===> Hello, john


let username=prompt("Username:")
let password = prompt("Password:")

if(username ==null|| username.trim()==''){
    //ไม่ใส่ username มาเข้าอันนี้
    alert("username is required")
    if (password == null || password.trim() ==''){

    }
}else if(password==null||password==''){
    // ใส่ username แต่ไม่ใส่ password
    alert("password is required") 
}else {
    if (username == 'admin' && password == "1234" || username == 'john' && password == 'qwerty'){
        alert(`Hello, ${username}`)
    }else{
        alert('invalid username or password')
    }
}