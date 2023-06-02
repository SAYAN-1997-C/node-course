// const doWorkPromise = new Promise((resolve,reject) => {

//     setTimeout(() => {
//         reject('This is your error message ! ')
//         resolve([1,2,2,2,4])
//     }, 3000);
// })

// doWorkPromise.then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log('Error : ',error)
// })

const add = (a , b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(a+b)
        }, 2000);
    })
}

// add(12,25).then((sum) => {
//     console.log(sum)

//     add(sum,78).then((sum2) => {
//         console.log(sum2)
//     }).catch((error) => {
//         console.log(error)
//     })
// }).catch((error) => {
//     console.log(error)
// })

add(2,3).then((sum) => {
    console.log(sum)

    return add(sum,4)
}).then((sum2) => {
    console.log(sum2)

    return add(sum2,45)
    
}).then((sum3) => {
    console.log(sum3)
}).catch((error) => {
    console.log(error)
})