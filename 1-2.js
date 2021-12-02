fetch('https://adventofcode.com/2021/day/1/input')
    .then(res=>res.text())
    .then(resText=>{
        console.log(resText.split('\n').length)
        let sum = 0;
        const values = resText.split('\n').map(v=>parseInt(v,10))
        for (let i = 0; i < values.length-3; i++) {
            const prevWindow = values[i+0]+values[i+1]+values[i+2]
            console.log('prevWindow = values[i+0]+values[i+1]+values[i+2]')
            console.log(`${prevWindow} = ${values[i+0]}+${values[i+1]}+${values[i+2]}`)
            const currWindow = values[i+1]+values[i+2]+values[i+3]
            console.log('currWindow = values[i+1]+values[i+2]+values[i+3]')
            console.log(`${currWindow} = ${values[i+1]}+${values[i+2]}+${values[i+3]}`)
            if (currWindow > prevWindow) {
                sum++
            }
        }
        return sum
    })
    .then(console.log)
    