// const square = function(x){
//     return x*x
// }
// console.log(square(2))

// const square = (x) => {
//     return x*x
// }

// const square = (x) => x*x
// console.log(square(5))

const event = {
    name : 'Birthday Party',
    guestList : ['samrat','sayan','soumik'],
    printGuestList(){

        //const that = this
        //console.log('Guest list for : '+this.name)

        this.guestList.forEach((Guest) => {
            console.log(Guest + " is attending " + this.name)
        })
        
    }
}
event.printGuestList()