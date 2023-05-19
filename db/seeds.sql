-- Active: 1683537689842@@127.0.0.1@3306@hr_db
INSERT INTO departments (name)
VALUES  ("Payroll"),
        ("Accounts"),
        ("Research"),
        ("Sales");


INSERT INTO roles (title, salary, department_id)
VALUES  ("Engineer", 100000, 003),
        ("Clerk", 70000, 001),
        ("Researcher", 200000, 001),
        ("sales Rep", 75000, 004),
        ("Accountant", 90000, 002);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Arthur", "Marles", 001, NULL),
       ("Ben", "Birmingham", 005,NULL),
       ("Margaret", "Lines", 004, 002),
       ("Gabriel", "Doyle", 002, 002),
       ("Simon", "Peters", 004, 002),
       ("David", "Roberts", 002, 002),
       ("Kelly", "Clarks", 004, 002),
       ("Mary", "Josephs", 003, 001),
       ("Neil", "Ramos", 001, 001);