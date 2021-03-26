-- Database Queries
-- reference: https://www.w3schools.com/sql/sql_top.asp


-- Find all customers with postal code 1010 
----------------------------------

SELECT * FROM Customers
WHERE PostalCode = '1010'

----------------------------------
-- CustomerID	CustomerName	ContactName	Address	City	PostalCode	Country
-- 12	Cactus Comidas para llevar	Patricio Simpson	Cerrito 333	Buenos Aires	1010	Argentina
-- 54	Océano Atlántico Ltda.	Yvonne Moncada	Ing. Gustavo Moncada 8585 Piso 20-A	Buenos Aires	1010	Argentina
-- 64	Rancho grande	Sergio Gutiérrez	Av. del Libertador 900	Buenos Aires	1010	Argentina

----------------------------------

-- Find the phone number for the supplier with the id 11
----------------------------------
SELECT [PHONE] FROM [Suppliers]
WHERE SupplierID = '11'
----------------------------------
-- Phone
-- (010) 9984510
----------------------------------

-- List first 10 orders placed, sorted descending by the order date
----------------------------------
SELECT * FROM [Orders]
ORDER BY [OrderDate] desc
LIMIT 10
----------------------------------
-- OrderID	CustomerID	EmployeeID	OrderDate	ShipperID
-- 10443	66	8	1997-02-12	1
-- 10442	20	3	1997-02-11	2
-- 10440	71	4	1997-02-10	2
-- 10441	55	3	1997-02-10	2
-- 10439	51	6	1997-02-07	3
-- 10438	79	3	1997-02-06	2
-- 10436	7	3	1997-02-05	2
-- 10437	87	8	1997-02-05	1
-- 10435	16	8	1997-02-04	2
-- 10433	60	3	1997-02-03	3
----------------------------------

-- Find all customers that live in London, Madrid, or Brazil
----------------------------------
SELECT * FROM [CUSTOMERS]
WHERE City = 'London' OR 'Madrid' OR 'Brazil'
----------------------------------
-- 4	Around the Horn	Thomas Hardy	120 Hanover Sq.	London	WA1 1DP	UK
-- 11	B's Beverages	Victoria Ashworth	Fauntleroy Circus	London	EC2 5NT	UK
-- 16	Consolidated Holdings	Elizabeth Brown	Berkeley Gardens 12 Brewery	London	WX1 6LT	UK
-- 19	Eastern Connection	Ann Devon	35 King George	London	WX3 6FW	UK
-- 53	North/South	Simon Crowther	South House 300 Queensbridge	London	SW7 1RZ	UK
-- 72	Seven Seas Imports	Hari Kumar	90 Wadhurst Rd.	London	OX15 4NB	UK
----------------------------------

-- Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"
----------------------------------
INSERT INTO [CUSTOMERS] (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('The Shire', 'Bilbo Baggins', '1 Hobbit-Hole', 'Bag End', '111', 'Middle Earth');
----------------------------------
-- 92	The Shire	Bilbo Baggins	1 Hobbit-Hole	Bag End	111	Middle Earth
----------------------------------

-- Update Bilbo Baggins record so that the postal code changes to "11122"
----------------------------------
UPDATE [CUSTOMERS] 
SET [POSTALCODE] = '11122'
WHERE [CONTACTNAME] = 'Bilbo Baggins'
----------------------------------
-- 92	The Shire	Bilbo Baggins	1 Hobbit-Hole	Bag End	11122	Middle Earth
----------------------------------
--  delete for reference
----------------------------------
-- DELETE FROM [CUSTOMERS] 
-- WHERE [CITY] = 'Silicon Valley'
----------------------------------

-- (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted

-- (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name
