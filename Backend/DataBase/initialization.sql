INSERT INTO user (user_name, password, mail_id, phone_no, role)values("Nilay", "abc@123", "nilay@parkease.com", "9876543210", "customer");

INSERT INTO ticket_type (ticket_type_name, ticket_type_price, ticket_type_short_description, ticket_type_description) VALUES ("Gold", 1500, "enjoy fully", "you can use every ride twice");
INSERT INTO ticket_type (ticket_type_name, ticket_type_price, ticket_type_short_description, ticket_type_description) VALUES ("Silver", 1000, "enjoy half the day", "you can use every ride");

INSERT INTO ticket (ticket_type_id, ticket_price, no_of_members, user_id, booked_for, ticket_scanned_at)VALUES (1, 150.00, 2, 1, '2024-07-10', NULL);  


INSERT INTO stall (stall_name, location, description, stall_type) VALUES ("Aditya Dal Bati House", "Near Roller Coster", "Delicious Dal Bati made with pure ghee and love. Try the authenticate taste of Rajasthan.", "Food");

INSERT INTO item (item_name, stall_id, price, image, description, item_type) VALUES ("Dal Bati", 1, 150, "https://www.chitrasfoodbook.com%2F2016%2F07%2Fdal-baati-recipe-rajasthani-dal-bati.html&docid=UvTXsFvplqhJBM&tbnid=LaHqMGV7pkwFpM&vet=12ahUKEwjwlNTM0ZaHAxWon2MGHZnALLgQM3oECGEQAA..i&w=500&h=633&hcb=2&ved=2ahUKEwjwlNTM0ZaHAxWon2MGHZnALLgQM3oECGEQAA", "Dal Bati Made with pure ghee and love.", "Food");
INSERT INTO item (item_name, stall_id, price, image, description, item_type) VALUES ("Water Bottle", 1, 100, "https://www.chitrasfoodbook.com%2F2016%2F07%2Fdal-baati-recipe-rajasthani-dal-bati.html&docid=UvTXsFvplqhJBM&tbnid=LaHqMGV7pkwFpM&vet=12ahUKEwjwlNTM0ZaHAxWon2MGHZnALLgQM3oECGEQAA..i&w=500&h=633&hcb=2&ved=2ahUKEwjwlNTM0ZaHAxWon2MGHZnALLgQM3oECGEQAA", "Thanda Pani Straight from Rajasthan", "Food");

INSERT INTO `order` (user_id, ticket_id, order_status, stall_Id) VALUES (1, 1, "Order Placed", 1);