INSERT INTO user (user_name, password, mail_id, phone_no, role)values("Nilay", "abc@123", "nilay@parkease.com", "9876543210", "customer");
INSERT INTO user (user_name, password, mail_id, phone_no, role) VALUES ('Dinesh Shas', 'dinesh_123', 'dineshshah12@gmail.com', '9924360137', 'admin');
INSERT INTO user (user_name, password, mail_id, phone_no, role) VALUES ('ravi patel', 'ravi@99', 'ravi22patel@gmail.com', '9987536823', 'hr');
INSERT INTO user (user_name, password, mail_id, phone_no, role) VALUES ('anjali patel', 'anjali090', 'anjaliipatel@gmail.com', '9976352098', 'hr');
INSERT INTO user (user_name, password, mail_id, phone_no, role) VALUES ('nilay varma', 'nilay0973', 'nilay@gmail.com', '9944352098', 'hr');
INSERT INTO user (user_name, password, mail_id, phone_no, role) VALUES ('ajay nath', 'ajay346', 'nath23l@gmail.com', '9976355598', 'stallexecutive');
INSERT INTO user (user_name, password, mail_id, phone_no, role) VALUES ('rahul parmar', 'rahul_234', 'rahul009parmarl@gmail.com', '9966352098', 'stallexecutive');
INSERT INTO user (user_name, password, mail_id, phone_no, role) VALUES ('navin kumar', 'navil@45_54', 'navin22jl@gmail.com', '9876352098', 'stallexecutive');
INSERT INTO user (user_name, password, mail_id, phone_no, role) VALUES ('nita desai', 'nita_ram', 'nita22desai@gmail.com', '9976350878', 'stallexecutive');
INSERT INTO user (user_name, password, mail_id, phone_no, role) VALUES ('dipak ramanujachariya', 'dipak@34', 'dipakram@gmail.com', '8000929395', 'stallexecutive');
INSERT INTO user (user_name, password, mail_id, phone_no, role) VALUES ('radha patel', 'radha_patel', 'radhapatel12@gmail.com', '7874725213', 'customer');
INSERT INTO user (user_name, password, mail_id, phone_no, role) VALUES ('priyank sharma', 'pri@124', 'priyank123 sharma@gmail.com', '8976122333', 'customer');
INSERT INTO user (user_name, password, mail_id, phone_no, role) VALUES ('divyesh kumar', 'div_kum_123', 'div43kumar@gmail.com', '9972548953', 'customer');
INSERT INTO user (user_name, password, mail_id, phone_no, role) VALUES ('shivay kumar', 'shivay_om', 'shivaykumar@gmail.com', '7642849463', 'customer');
INSERT INTO user (user_name, password, mail_id, phone_no, role) VALUES ('navya kumari', 'navya_368', 'navyakumari@gmail.com', '8980012234', 'customer');
INSERT INTO user (user_name, password, mail_id, phone_no, role) VALUES ('rahani nama', 'rahani27', 'rahai@gmail.com', '8980012256', 'customer');

INSERT INTO ticket_type (ticket_type_name, ticket_type_price, ticket_type_short_description, ticket_type_description)
VALUES 
('Silver', 1000.00, 'Basic entry ticket', 'The Silver ticket grants basic entry to the park with access to standard attractions.'),
('Gold', 2500.00, 'Enhanced access', 'The Gold ticket includes everything in Silver plus access to premium attractions and priority seating.'),
('Platinum', 5000.00, 'All-access pass', 'The Platinum ticket offers all-access entry to the park, including exclusive VIP areas, complimentary meals, and express ride access.');

INSERT INTO ticket (ticket_type_id, ticket_price, no_of_members, user_id, booked_for, ticket_scanned_at)VALUES (1, 150.00, 2, 1, '2024-07-10', NULL);  
INSERT INTO ticket (ticket_type_id, ticket_price, no_of_members, user_id, generated_on, booked_for, ticket_scanned_at, no_of_members_scanned)
VALUES 
(1, 1000.00, 2, 10, '2024-07-01 09:00:00', '2024-08-15', '2024-08-15 09:30:00', 2),  -- Silver ticket
(2, 2500.00, 3, 11, '2024-07-02 10:00:00', '2024-08-16', '2024-08-16 10:15:00', 3),  -- Gold ticket
(3, 5000.00, 1, 12, '2024-07-03 11:00:00', '2024-08-17', '2024-08-17 11:10:00', 1),  -- Platinum ticket
(1, 1000.00, 4, 13, '2024-07-04 12:00:00', '2024-08-18', '2024-08-18 12:20:00', 4),  -- Silver ticket
(2, 2500.00, 5, 14, '2024-07-05 13:00:00', '2024-08-19', '2024-08-19 13:25:00', 5);  -- Gold ticket


INSERT INTO stall (stall_name, location, description, stall_type) VALUES ("Aditya Dal Bati House", "Near Roller Coster", "Delicious Dal Bati made with pure ghee and love. Try the authenticate taste of Rajasthan.", "Food");
INSERT INTO stall (stall_name, location, description, stall_type)
VALUES 
('Burger Bazaar', 'Main Food Court', 'A popular stall offering a variety of gourmet burgers, from classic cheeseburgers to unique specialty options.', 'Food'),
('Gujju Thali Delights', 'Near Family Fun Area', 'Experience the authentic taste of Gujarat with our delicious and wholesome thali meals featuring traditional dishes.', 'Food'),
('Pizzeria', 'Near Sky High Ferris Wheel', 'Enjoy a wide range of pizzas made with fresh ingredients and a choice of classic and innovative toppings.', 'Food'),
('Crafts Corner', 'Main Entrance', 'Find a selection of handmade crafts and souvenirs perfect for remembering your visit.', 'Others'),
('Game Zone', 'Near Adventure Zone', 'Play a variety of arcade games and win exciting prizes in our fun and interactive game zone.', 'Others');


INSERT INTO item (item_name, stall_id, price, image, description, item_type) VALUES ("Dal Bati", 1, 150, "https://www.chitrasfoodbook.com%2F2016%2F07%2Fdal-baati-recipe-rajasthani-dal-bati.html&docid=UvTXsFvplqhJBM&tbnid=LaHqMGV7pkwFpM&vet=12ahUKEwjwlNTM0ZaHAxWon2MGHZnALLgQM3oECGEQAA..i&w=500&h=633&hcb=2&ved=2ahUKEwjwlNTM0ZaHAxWon2MGHZnALLgQM3oECGEQAA", "Dal Bati Made with pure ghee and love.", "Food");
INSERT INTO item (item_name, stall_id, price, image, description, item_type) VALUES ("Water Bottle", 1, 100, "https://www.chitrasfoodbook.com%2F2016%2F07%2Fdal-baati-recipe-rajasthani-dal-bati.html&docid=UvTXsFvplqhJBM&tbnid=LaHqMGV7pkwFpM&vet=12ahUKEwjwlNTM0ZaHAxWon2MGHZnALLgQM3oECGEQAA..i&w=500&h=633&hcb=2&ved=2ahUKEwjwlNTM0ZaHAxWon2MGHZnALLgQM3oECGEQAA", "Thanda Pani Straight from Rajasthan", "Food");
INSERT INTO item (item_name, stall_id, price, image, description, item_type)
VALUES 
('Classic Cheeseburger', 1, 99.00, 'images/classic_cheeseburger.jpg', 'A juicy beef patty topped with cheddar cheese, lettuce, and tomato, served on a toasted bun.', 'Food'),
('Gujarati Thali', 2, 150.00, 'images/gujarati_thali.jpg', 'A traditional Gujarati meal with a variety of dishes including daal, subzi, chapati, and rice.', 'Food'),
('Margherita Pizza', 3, 120.00, 'images/margherita_pizza.jpg', 'A classic pizza topped with fresh tomatoes, mozzarella cheese, and basil leaves.', 'Food'),
('Handmade Jewelry', 4, 200.00, 'images/handmade_jewelry.jpg', 'Beautifully crafted handmade jewelry pieces, including necklaces, bracelets, and earrings.', 'Others'),
('Plush Toys', 5, 100.00, 'images/plush_toys.jpg', 'A selection of soft and cuddly plush toys in various designs and sizes.', 'Others');


INSERT INTO `order` (user_id, ticket_id, order_status, stall_Id) VALUES (1, 1, "Order Placed", 1);
INSERT INTO `order` (user_id, ticket_id, order_status, stall_id)
VALUES 
(10, 1,'Order Placed', 1),
(11, 2,'Order Completed', 2),
(12, 3,'Order Shipped', 3),
(14, 4,'Order Placed', 2),
(13, 5,'Order Cancelled', 3);


INSERT INTO stall (stall_name, location, description, stall_type)
VALUES 
('Food Stall 1', 'Section A', 'Delicious food and drinks', 'Food'),
('Merchandise Stall', 'Section B', 'Event merchandise and souvenirs', 'Others');




INSERT INTO order_item (order_id, item_id, quantity)
VALUES 
(1, 1, 2),
(2, 2, 1),
(1, 1, 2), 
(1, 3, 1), 
(2, 2, 3), 
(3, 4, 1), 
(4, 5, 2); 


INSERT INTO stock_management (item_id, quantity, expires_on, sold, stall_id)
VALUES 
(1, 100, '2024-9-31 23:59:59', 10, 1),
(2, 50, '2024-9-31 23:59:59', 5, 2),
(1, 50, '2024-9-31 23:59:59', 10, 1),
(2, 100, '2024-8-30 23:59:59', 25, 2),
(3, 75, '2025-10-31 23:59:59', 5, 3),
(4, 30, '2024-7-15 23:59:59', 15, 4),
(5, 60, '2024-10-30 23:59:59', 20, 5);

INSERT INTO employee (emp_name, emp_mail, phone_no, salary, work_allotted, present_days, absent_days, wages)
VALUES 
('Amit Sharma', 'amit.sharma@gmail.com', '9876543210', 50000.00, 'Customer support and sales', 22, 2, 2000.00),
('Sneha Patel', 'sneha.patel@gmail.com', '8765432109', 55000.00, 'Inventory management and procurement', 20, 3, 2500.00),
('Rajesh Kumar', 'rajesh.kumar@gmail.com', '7654321098', 45000.00, 'Marketing and business development', 25, 1, 1800.00),
('Priya Desai', 'priya.desai@gmail.com', '6543210987', 47000.00, 'Technical support and operations', 21, 4, 2200.00),
('Ravi Singh', 'ravi.singh@gmail.com', '5432109876', 52000.00, 'Event coordination and management', 23, 2, 2300.00);


INSERT INTO stall_executive (user_id, stall_id)
VALUES 
(5, 1),
(6, 2),
(7, 3),
(8, 4),
(9,5);

