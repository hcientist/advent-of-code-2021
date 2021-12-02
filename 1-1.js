fetch('https://adventofcode.com/2021/day/1/input')
    .then(res=>res.text())
    .then(resText=>{
        console.log(resText.split('\n').length)
        let sum = 0;
        resText.split('\n').reduce((prev, curr) => {
            const previous = parseInt(prev, 10)
            const current = parseInt(curr, 10)
            if (current > previous) {
                sum++;
            }
            return curr;
        })
        return sum
    })
    .then(console.log)
    