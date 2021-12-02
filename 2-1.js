fetch("https://adventofcode.com/2021/day/2/input")
  .then((res) => res.text())
  .then((resText) => {
    return resText.split("\n");
  })
  .then((commands) => {
    console.log('commands.length', commands.length)
    const position = {x:0, y:0}
    commands.forEach((cmd) => {
      const [instruction, param] = cmd.split(' ')
      const value = parseInt(param,10)
      switch (instruction) {
        case 'forward':
          position.x += value
          break
        case 'up':
          position.y -= value
          break
        case 'down':
          position.y += value
          break
      }
    })
    return position.x*position.y
  })
  .then(console.log);
