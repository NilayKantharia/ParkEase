
-- User Table
CREATE TABLE user(
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    mail_id VARCHAR(255) UNIQUE NOT NULL,
    phone_no VARCHAR(10) UNIQUE NOT NULL,
    role ENUM('admin', 'customer', 'hr', 'stallexecutive'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE INDEX idx_user_mail_id ON user (mail_id);
CREATE INDEX idx_user_phone_no ON user (phone_no);

-- Ticket Types Table
CREATE TABLE ticket_type (
    ticket_type_id INT AUTO_INCREMENT PRIMARY KEY,
    ticket_type_name VARCHAR(20) NOT NULL,
    ticket_type_price DECIMAL(10, 2) NOT NULL,
    ticket_type_short_description VARCHAR(255) NOT NULL,
    ticket_type_description TEXT NOT NULL
);
CREATE INDEX idx_ticket_type_name ON ticket_type (ticket_type_name);

-- Ticket Table
CREATE TABLE ticket (
    ticket_id INT AUTO_INCREMENT PRIMARY KEY,
    ticket_type_id INT,
    ticket_price DECIMAL(10,2) NOT NULL,
    no_of_members INT NOT NULL DEFAULT 1,
    user_id INT,
    generated_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    booked_for DATE,
    ticket_scanned_at TIMESTAMP,
    no_of_members_scanned INT,
    FOREIGN KEY (user_id) REFERENCES user(user_id), 
    FOREIGN KEY (ticket_type_id) REFERENCES ticket_type(ticket_type_id)
);
CREATE INDEX idx_ticket_user_id ON ticket (user_id);



-- Stall Table
CREATE TABLE stall(
    stall_id INT AUTO_INCREMENT PRIMARY KEY,
    stall_name VARCHAR(100) NOT NULL,
    location VARCHAR(255) NOT NULL,
    description TEXT,
    stall_type ENUM('Food', 'Others')
);

-- Items Table
CREATE TABLE item(
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    item_name VARCHAR(100) NOT NULL,
    stall_id INT,
    price DECIMAL(10, 2) NOT NULL,
    image VARCHAR(255) NOT NULL,
    description TEXT,
    item_type ENUM('Food', 'Others'),
    deleted BOOLEAN DEFAULT 0,
    FOREIGN KEY (stall_id) REFERENCES stall(stall_id)
);

CREATE INDEX idx_item_stall_id ON item(stall_id);

-- Order Table
CREATE TABLE `order` (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    ticket_id INT,
    order_placed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    order_status VARCHAR(50) DEFAULT 'Order Placed',
    stall_id INT,
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (ticket_id) REFERENCES ticket(ticket_id),
    FOREIGN KEY (stall_id) REFERENCES stall(stall_id)
);

CREATE INDEX idx_order_user_id ON `order` (user_id);
CREATE INDEX idx_order_ticket_id ON `order` (ticket_id);
CREATE INDEX idx_order_stall_id ON `order` (stall_id);


-- OrderItems Table
CREATE TABLE order_item(
    order_item_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    item_id INT,
    quantity INT DEFAULT 1,
    FOREIGN KEY (order_id) REFERENCES `order` (order_id),
    FOREIGN KEY (item_id) REFERENCES item (item_id)
);

CREATE INDEX idx_order_item_order_id ON order_item (order_id);
CREATE INDEX idx_orderitem_item_id ON order_item (item_id);



-- Stock Management Table
CREATE TABLE stock_management(
    stock_id INT AUTO_INCREMENT PRIMARY KEY,
    item_id INT,
    quantity INT,
    expires_on TIMESTAMP,
    sold INT,
    stall_id Int,
    FOREIGN KEY (item_id) REFERENCES item(item_id),
    FOREIGN KEY (stall_id) REFERENCES stall(stall_id)
);

CREATE INDEX idx_stock_item_id ON stock_management (item_id);
CREATE INDEX idx_stock_stall_id ON stock_management (stall_id);

-- Employee Table
CREATE TABLE employee(
    emp_id INT AUTO_INCREMENT PRIMARY KEY,
    emp_name VARCHAR(100) NOT NULL,
    emp_mail VARCHAR(255) UNIQUE NOT NULL,
    phone_no VARCHAR(10) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    work_allotted TEXT NOT NULL,
    present_days INT,
    absent_days INT,
    wages DECIMAL(10, 2)
);

CREATE INDEX idx_employee_email ON employee(emp_mail);
CREATE INDEX idx_employee_phone_no ON employee(phone_no);

CREATE TABLE stall_executive (
    stall_executive_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    stall_id INT,
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (stall_id) REFERENCES stall(stall_id)
);
CREATE INDEX idx_stall_executive_user_id ON stall_executive(user_id);
CREATE INDEX idx_stall_executive_stall_id ON stall_executive(stall_id);