DROP TABLE items;

CREATE TABLE items
(
itemId varchar(25) NOT NULL UNIQUE,
itemName varchar(255) NOT NULL,
itemPrice float NOT NULL,
itemQuantity int NOT NULL,
PRIMARY KEY (itemId)
);

INSERT INTO items VALUES (
'0060383758783',
'Real Canadian Natural Spring Water',
0.99,
10
);

INSERT INTO items VALUES (
'0605388881243',
'Great Value Natural Spring Water',
0.99,
5
);

INSERT INTO items VALUES (
'0065656201201',
'Vaseline',
1.99,
21
);

INSERT INTO items VALUES (
'05965639',
'Five Alive',
1.25,
3
);

SELECT * FROM items;