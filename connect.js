const mongoose = require('mongoose');
let connect = async () => {
    try {
        console.log('connected');
        await mongoose.connect('mongodb+srv://kalsariyabhargav187:master123@cluster0.jaycstc.mongodb.net/?retryWrites=true&w=majority')
    } catch (error) {
        console.log(error);
    }
}
module.exports = connect;