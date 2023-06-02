const add = (a , b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(a<0 || b<0)
                reject('Number must be non-negative.')
            resolve(a+b)
        }, 2000);
    })
}

const doWork = async () => {
    await add(1,-99)
    const sum2 = await add(2,50)
    const sum3 = await  add(sum2,100)
    return sum3
}

doWork().then((result) => {
    console.log('Result : ',result)
}).catch((error) => {
    console.log('Error : ',error)
})