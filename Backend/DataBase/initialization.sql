INSERT INTO user (user_name, password, mail_id, phone_no)values("Nilay", "abc@123", "nilay@parkease.com", "9876543210");

INSERT INTO ticket_type (ticket_type_name, ticket_type_price, ticket_type_short_description, ticket_type_description) VALUES ("Gold", 1500, "enjoy fully", "you can use every ride twice");

INSERT INTO ticket (ticket_type_id, ticket_price, no_of_members, user_id, booked_for, ticket_scanned_at)VALUES (1, 150.00, 2, 1, '2024-07-10', NULL);  