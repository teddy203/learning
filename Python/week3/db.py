from multiprocessing.dummy import connection

import mysql.connector

from mysql.connector import Error

import pandas as pd


def create_connection(host_name,user_name,password,db_name):
    connection = None
    try:
        connection = mysql.connector.connect(
             host = host_name,
             user = user_name,
             passwd = password,
             database = db_name
        )
        
        print("MySQL connection hass been successful")
    except Error as error:
      print(f"Error:{error}")

    return connection

def create_database(connection, query):
    cursor = connection.cursor()
    try:
        cursor.execute(query)  
        print("Database created successfully")
    except Error as error:
        print(f"Error:{error}")

#query =
#database = create_database(connection, query)
def execute_query(connection, query):
      
        cursor = connection.cursor()
        try:
            cursor.execute(query)  
            connection.commit()
            print("Query successful")
        except Error as error:
            print(f"Error:{error}")

connection = create_connection("localhost", "root", "","school")

#create_tables = """
#CREATE TABLE teacher (
    #teacher_id INT PRIMARY KEY,
    #first_name VARCHAR (40) NOT NULL,
    #last_name VARCHAR (40) NOT NULL,
    #dob DATE,
    #phone_no VARCHAR(13)
#);
#"""

# create_table_client = """
#     CREATE TABLE client(
#     client_id  INT PRIMARY KEY,
#     client_name  VARCHAR(40) NOT NULL,
#     industry  VARCHAR(20)

# );
# """

# create_table_course = """
#     CREATE TABLE course(
#     course_id  INT PRIMARY KEY,
#     course_name  VARCHAR(40) NOT NULL,
#     start_date  DATE,
#     teacher  INT,
#     client  INT
# );
# """



# pop_teacher = """
# INSERT INTO teacher VALUES (1,'Teddy', 'Onyach', '2003-11-7', '0115443023')

# """

pop_client = """
INSERT INTO client VALUES
    (1,'Jeremiah', 'Software Development'),
    (2,'Joan', 'Software Development'),
    (3,'Shawn', 'Software Development'),
    (4,'Luke', 'Software Development');
"""
pop_course = """
INSERT INTO course VALUES
    (04, 'JavaScript', '2024-5-28', 1, 1),
    (09, 'Python', '2024-5-28', 1, 2),
    (03, 'SQL', '2024-5-28', 1, 3),
    (05, 'Java', '2024-5-28', 1, 4);
"""

alter_course = """
ALTER TABLE course 
ADD FOREIGN KEY(teacher)
REFERENCES teacher(teacher_id)
ON DELETE SET NULL;
"""

alter_course_again= """
ALTER TABLE course 
ADD FOREIGN KEY(client)
REFERENCES client(client_id)
ON DELETE SET NULL;
"""

# execute_query(connection, alter_course)
# execute_query(connection, alter_course_again)

def read_query(connection, query):
    cursor = connection.cursor()  
    result = None
    try:
        cursor.execute(query) 
        result = cursor.fetchall()
        return result
    except Error as error:
        print(f"Error:{error}")        

q1 = """
SELECT *
FROM teacher;
"""

results = read_query(connection, q1)

for result in results:
    print(result)


