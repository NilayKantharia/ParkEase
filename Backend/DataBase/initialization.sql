INSERT INTO user (user_name, password, mail_id, phone_no, role)values("Nilay", "abc@123", "nilay@parkease.com", "9876543210", "customer");

INSERT INTO ticket_type (ticket_type_name, ticket_type_price, ticket_type_short_description, ticket_type_description) VALUES ("Gold", 1500, "enjoy fully", "you can use every ride twice");
INSERT INTO ticket_type (ticket_type_name, ticket_type_price, ticket_type_short_description, ticket_type_description) VALUES ("Silver", 1000, "enjoy half the day", "you can use every ride");

INSERT INTO ticket (ticket_type_id, ticket_price, no_of_members, user_id, booked_for, ticket_scanned_at)VALUES (1, 150.00, 2, 1, '2024-07-10', NULL);  


INSERT INTO stall (stall_name, location, description, stall_type) VALUES ("Aditya Dal Bati House", "Near Roller Coster", "Delicious Dal Bati made with pure ghee and love. Try the authenticate taste of Rajasthan.", "Food");

INSERT INTO item (item_name, stall_id, price, image, description, item_type) VALUES ("Dal Bati", 1, 150, "https://www.chitrasfoodbook.com%2F2016%2F07%2Fdal-baati-recipe-rajasthani-dal-bati.html&docid=UvTXsFvplqhJBM&tbnid=LaHqMGV7pkwFpM&vet=12ahUKEwjwlNTM0ZaHAxWon2MGHZnALLgQM3oECGEQAA..i&w=500&h=633&hcb=2&ved=2ahUKEwjwlNTM0ZaHAxWon2MGHZnALLgQM3oECGEQAA", "Dal Bati Made with pure ghee and love.", "Food");
INSERT INTO item (item_name, stall_id, price, image, description, item_type) VALUES ("Water Bottle", 1, 100, "https://www.chitrasfoodbook.com%2F2016%2F07%2Fdal-baati-recipe-rajasthani-dal-bati.html&docid=UvTXsFvplqhJBM&tbnid=LaHqMGV7pkwFpM&vet=12ahUKEwjwlNTM0ZaHAxWon2MGHZnALLgQM3oECGEQAA..i&w=500&h=633&hcb=2&ved=2ahUKEwjwlNTM0ZaHAxWon2MGHZnALLgQM3oECGEQAA", "Thanda Pani Straight from Rajasthan", "Food");

INSERT INTO `order` (user_id, ticket_id, order_status, stall_Id) VALUES (1, 1, "Order Placed", 1);

INSERT INTO user (user_name, password, mail_id, phone_no, role)
VALUES 
('Alice', 'password123', 'alice@example.com', '1234567890', 'customer'),
('Bob', 'password456', 'bob@example.com', '0987654321', 'stallexecutive'),
('Charlie', 'password789', 'charlie@example.com', '1122334455', 'admin'),
('Eve', 'password101', 'eve.hr@example.com', '3344556677', 'hr');

INSERT INTO ticket_type (ticket_type_name, ticket_type_price, ticket_type_short_description, ticket_type_description)
VALUES 
('Platinum', 2500.00, 'VIP ticket', 'Access to VIP areas and free refreshments');


INSERT INTO ticket (ticket_type_id, ticket_price, no_of_members, user_id, booked_for)
VALUES 
(1, 20.00, 1, 1, '2024-08-01'),
(2, 50.00, 2, 2, '2024-08-01');


INSERT INTO stall (stall_name, location, description, stall_type)
VALUES 
('Food Stall 1', 'Section A', 'Delicious food and drinks', 'Food'),
('Merchandise Stall', 'Section B', 'Event merchandise and souvenirs', 'Others');


INSERT INTO item (item_name, stall_id, price, image, description, item_type)
VALUES 
('Burger', 1, 5.00, 'burger.jpg', 'Juicy grilled burger', 'Food'),
('T-shirt', 2, 15.00, 'tshirt.jpg', 'Event branded T-shirt', 'Others');

INSERT INTO `order` (user_id, ticket_id, stall_id)
VALUES 
(1, 1, 1),
(2, 2, 2);

INSERT INTO order_item (order_id, item_id, quantity)
VALUES 
(1, 1, 2),
(2, 2, 1);

INSERT INTO stock_management (item_id, quantity, expires_on, sold, stall_id)
VALUES 
(1, 100, '2024-12-31 23:59:59', 10, 1),
(2, 50, '2024-12-31 23:59:59', 5, 2);

INSERT INTO employee (emp_name, emp_mail, phone_no, salary, work_allotted, present_days, absent_days, wages)
VALUES 
('David', 'david@example.com', '2233445566', 3000.00, 'Manage food stall', 20, 2, 200.00),
('Eve', 'eve@example.com', '6677889900', 2500.00, 'Manage merchandise stall', 18, 4, 150.00);

INSERT INTO stall_executive (user_id, stall_id)
VALUES 
(2, 1),
(2, 2);

