// const num = prompt('Please write a number')
// console.log(parseFloat(num) + 200)



const userReply = confirm('Please show your location')

if(userReply === true){
    console.log(location.href)
}
else {
    console.log('Sorry')
}