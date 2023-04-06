const express = require('express');
let app = express();
app.use(express.json());
const connect = require('./connect');
connect();
const bookstore = require('./schema');
app.get('/', (req, res) => {
    console.log('get called');
    res.send('hi ! your get request is acquired');
})
app.post('/post', async(req, res) => {
    await bookstore.create(req.body);
    console.log(req.body);
    console.log('post called');
    res.send('hey ! your post request is acquired')
})
app.patch('/patch/:id',async (req, res) => {
    let {id} = req.params;
    await bookstore.findByIdAndUpdate(id,req.body);
    let updatedstore = await bookstore.find();
    res.send(updatedstore);
    console.log('patch called');
    res.send('hi ! your patch request is acquired')
})
app.delete('/delete/:id', async(req, res) => {
    let {id} = req.params;
    await bookstore.findByIdAndDelete(id);
    let afterdeletestore = await bookstore.find();
    res.send(afterdeletestore);
    console.log('delete called');
    res.send('hey ! your delete request is acquired')
})
app.listen(7777, () => {
    console.log('listening on port 7777');
})