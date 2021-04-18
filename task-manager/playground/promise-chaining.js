require('../src/db/mongoose')
const User = require('../src/models/user')

const updateAgeAndCount = async (id, age) => {
    const user =await User.findByIdAndUpdate(id, { age })
    const count = User.countDocuments({ age })
    return count
}

updateAgeAndCount('607bb80e5bd49c30243f32e4', 2).then(count => {
    console.log(count)
}).catch(e => {
    console.log(e)
})