const Joi = require('joi');
const express = require('express');

const app = express();

const port = process.env.PORT || 3000;


//for getting or parsing values from body which is in json encoded format

app.use(express.json());

const customers = [{
        id: 1,
        name: 'Rahana'
    },
    {
        id: 2,
        name: 'Rahim'
    },
    {
        id: 3,
        name: 'Raja'
    }
]

// app.get();
// app.post();
// app.put();
// app.delete();


//get requests

app.get('/', (req, res) => {
    res.send("hello world!");
});

app.get('/api/customers', (req, res) => {
    res.send(customers);
})

// get request with parameter
// app.get('/api/customers/:id/:name', (req, res) => {

//     res.send(req.params);
// })


// get with query string parameter

// app.get('/api/customers/:id/:name', (req, res) => {

//     res.send(req.query);
// })

// handling get request

app.get('/api/customers/:id', (req, res) => {
    const customer = customers.find(c => c.id === parseInt(req.params.id));
    if (!customer) return res.status(404).send('no customers found');
    res.send(customer);
})

//handling post request
// input validation in get request 

// never ever trust client

// validation logic



app.post('/api/customers', (req, res) => {

    //joi schema for validation

    const {
        error
    } = validateCustomer(req.body);

    if (error) {
        //400 - bad request
        // res.status(400).send("name is required to create customer");

        return res.status(400).send(error.details[0].message);
        //returning control to user without executing below statements
    }

    const customer = {
        id: customers.length + 1,
        name: req.body.name
    };

    customers.push(customer);
    res.send(customer);
    console.log(customer);
    console.log(customers);
})


// update the customer using the put request

app.put('/api/customers/:id', (req, res) => {
    const id = req.params.id;
    const customer = customers.find(c => c.id === parseInt(id))
    if (!customer) {
        return res.status(404).send('no customers found');
    }

    //validate

    // const validate = validateCustomer(customer);
    const {
        error
    } = validateCustomer(req.body);

    if (error) {
        //400 - bad request
        // res.status(400).send("name is required to create customer");
        return res.status(400).send(error.details[0].message);
        //returning control to user without executing below statements
    }

    //update course
    customer.name = req.body.name;
    res.send(customer)

})

function validateCustomer(customer) {

    const schema = {
        name: Joi.string().min(3).required()
    };

    const validate = Joi.validate(customer, schema);
    console.log(validate)
    return validate;

}

//delete request 

app.delete('/api/customers/:id', (req, res) => {

    const id = req.params.id;
    const customer = customers.find(c => c.id === parseInt(id))
    if (!customer) return res.status(404).send('no customers found');


    //delete
    const index = customers.indexOf(customer);

    customers.splice(index, 1)


    res.send(customer);


})


app.listen(port, () => {
    console.log(`started at port - ${port}`);
});