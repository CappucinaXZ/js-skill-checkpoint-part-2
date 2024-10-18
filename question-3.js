// เริ่มเขียนโค้ดตรงนี้
let getUsers = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    //const data = await new Promise(resolve => setTimeout(() => resolve(response.json()), 2500));
    const data = response.json();
    return data
}
async function asynchronousFunction() {
    const users = await getUsers();
    console.log(users)
    console.log(users[0].name.length)
    let result = users.filter(result => result.name.length>17).map(result => result.name)
    console.log(result)

}
  
asynchronousFunction();