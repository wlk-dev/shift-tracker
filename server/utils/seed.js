const connection = require('../config/connection');
const { User, Shift } = require('../models');
const { getRandomName } = require('./data');
const bcrypt = require("bcrypt")

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    await User.deleteMany({});
    await Shift.deleteMany({});

    const users = [];

    const password = await bcrypt.hash("password1234", 10)

    for (let i = 0; i < 20; i++) {
        const fullName = getRandomName();
        const fname = fullName.split(' ')[0];
        const lname = fullName.split(' ')[1];
        const email = `${fname}.${lname}@email.com`;
        const contactNum = '(763)-569-8000';
        const mgr = false;

        users.push({
            fname,
            lname,
            mgr,
            email,
            contactNum,
            password
        });
    }

    await User.collection.insertMany(users);

    console.info('Seeding complete! 🌱');
    process.exit(0);
});
