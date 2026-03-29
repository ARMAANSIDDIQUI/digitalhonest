const mongoose = require('mongoose');
const Admin = require('./models/Admin');
require('dotenv').config();

const createAdmin = async () => {
    try {
        const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/digitalhonest';
        await mongoose.connect(uri);
        console.log('MongoDB Connected...');

        const email = 'digitalhonest@gmail.com';
        const password = 'admin123';

        let admin = await Admin.findOne({ email });

        if (admin) {
            console.log('Admin already exists!');
            process.exit(0);
        }

        admin = new Admin({ email, password });
        await admin.save();
        
        console.log('Admin account created successfully!');
        console.log('Email:', email);
        console.log('Password:', password);
        process.exit(0);
    } catch (err) {
        console.error('Error creating admin:', err.message);
        process.exit(1);
    }
};

createAdmin();
