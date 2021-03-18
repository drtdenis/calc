// showStars.js

const showStars = (nbStars) => {
  for (let i = 1; i <= nbStars; i += 1) {
    console.log('*'.repeat(i))
  }
}
if (process.argv.length !== 3) {
  console.log('usage: node stars.js number')
  process.exit(1)
}
if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number.`)
  process.exit(1)
}

let nbStars = process.argv[2]
nbStars = Number(nbStars)


showStars(nbStars)
