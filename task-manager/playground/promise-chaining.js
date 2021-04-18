require('../src/db/mongoose')
const User = require('../src/models/user')


User.findByIdAndUpdate('607bb80e5bd49c30243f32e4', {age: 1}).then((user) => {
    console.log(user)
    return User.countDocuments({age: 1})
}).then((result) => {
    console.log(result)
}).catch(e => {
    console.log(e)
})
