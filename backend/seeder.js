import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.model.js";
import User from "./models/User.model.js";
import Cart from "./models/Cart.model.js";
import products from "./data/products.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URL);

const seedData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();
    await Cart.deleteMany();

    const createdUser = await User.create({
      name: "Admin User",
      email: "admin@mail.com",
      password: "123456",
      role: "admin",
    });

    // assign the default user id for each product
    const userId = createdUser._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: userId };
    });

    await Product.insertMany(sampleProducts);

    console.log("Product data seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding the data: ", error);
    process.exit(1);
  }
};

seedData();
