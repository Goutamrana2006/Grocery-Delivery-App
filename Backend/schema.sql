CREATE DATABASE freshkart;
USE freshkart;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255)
);

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    price INT,
    image TEXT,
    category VARCHAR(100)
);
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,

    customer_name VARCHAR(100),

    mobile_number VARCHAR(20),

    product_name VARCHAR(100),

    product_price INT,

    address TEXT,

    landmark VARCHAR(100),

    payment_method VARCHAR(50),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);