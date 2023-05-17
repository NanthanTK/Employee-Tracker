-- Active: 1683537689842@@127.0.0.1@3306@hr_db
INSERT INTO departments (id, name)
VALUES  (001, "Payroll"),
        (002, "Accounts"),
        (003, "Research"),
        (004, "Sales");


INSERT INTO roles ( id, title, salary, department_id)
VALUES  (001, "Engineer", 100000, 003),
        (002, "Clerk", 70000, 001),
        (003, "Researcher", 200000, 001),
        (004, "sales Rep", 75000, 004),
        (005, "Accountant", 90000, 002);
INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (001, "Arthur", "Marles", 001, NULL),
       (002, "Ben", "Birmingham", 005,NULL),
       (003, "Margaret", "Lines", 004, 002),
       (004, "Gabriel", "Doyle", 002, 002),
       (005, "Simon", "Peters", 004, 002),
       (006, "David", "Roberts", 002, 002),
       (007, "Kelly", "Clarks", 004, 002),
       (008, "Mary", "Josephs", 003, 001),
       (009, "Neil", "Ramos", 001, 001);