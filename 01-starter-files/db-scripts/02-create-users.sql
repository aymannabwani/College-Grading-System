
-- -----------------------------------------------------
-- Schema college-grading-system
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `college-grading-system`;

CREATE SCHEMA `college-grading-system`;
USE `college-grading-system` ;

-- -----------------------------------------------------
-- Schema college-grading-system
-- -----------------------------------------------------

CREATE SCHEMA IF NOT EXISTS`college-grading-system`;
USE `college-grading-system` ;

-- -----------------------------------------------------
-- Table `college-grading-system`.`role_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `college-grading-system`.`role_category` (
  `role_id` BIGINT(4) NOT NULL AUTO_INCREMENT,
  `role_name` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`role_id`))
ENGINE=InnoDB
AUTO_INCREMENT = 1;

-- -----------------------------------------------------
-- Add sample data for role_category
-- -----------------------------------------------------

INSERT INTO role_category(role_name) VALUES ('ADMINSTRATOR');
INSERT INTO role_category(role_name) VALUES ('TEACHER');
INSERT INTO role_category(role_name) VALUES ('STUDENT');

-- -----------------------------------------------------
-- Table `college-grading-system`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `college-grading-system`.`users` (
  `user_id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(255) DEFAULT NULL,
  `last_name` VARCHAR(255) DEFAULT NULL,
  `role_id` BIGINT(4) DEFAULT NULL,
  `image_url` VARCHAR(255) DEFAULT NULL,
  `university` VARCHAR(255) DEFAULT NULL,
  `address` VARCHAR(255) DEFAULT NULL,
  `city` VARCHAR(255) DEFAULT NULL,
  `province` VARCHAR(255) DEFAULT NULL,
  `postal_code` VARCHAR(255) DEFAULT NULL,
  `country` VARCHAR(255) DEFAULT NULL,
  `phone` INTEGER(12) DEFAULT NULL,
  `fax` INTEGER(12) DEFAULT NULL,
  `email` VARCHAR(255) DEFAULT NULL,
  `gender` VARCHAR(10) DEFAULT NULL,
  `birthdate` DATE DEFAULT NULL,
  `password` INTEGER(16) DEFAULT NULL,
  `active` BIT DEFAULT 1,
  `created_by` VARCHAR(255) DEFAULT NULL,
  `updated_by` VARCHAR(255) DEFAULT NULL,
  `date_created` DATETIME(6) DEFAULT NULL,
  `last_updated` DATETIME(6) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  KEY `fk_user` (`role_id`),
  CONSTRAINT `fk_user` FOREIGN KEY (`role_id`) REFERENCES `role_category` (`role_id`)
) 
ENGINE=InnoDB
AUTO_INCREMENT = 1;

-- -----------------------------------------------------
-- Add sample data for users
-- -----------------------------------------------------

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
            VALUES ('John', 'Bradely', 1, 'assets/photos/Ayman.png', 'Damascus', '11e Avenue', 'Laval', 'Quebec', 'A1B2C3', 'Canada', '1234567890', '1212131314', 'jhn_brdly@gmail.com', 'Male', '1985-10-03', 2021001001, 1, 'John', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
            VALUES ('Mohd', 'Salah', 1, 'assets/photos/Ayman.png', 'Damascus', '11e Avenue', 'Laval', 'Quebec', 'A2B2C3', 'Canada', '1234567890', '1212131314', 'mohd_salah@gmail.com', 'Male', '1975-01-12',2021001001,1, 'Mohd', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
            VALUES ('Suzan', 'Smith', 2, 'assets/photos/placeholder.png', 'Damascus','11e Avenue', 'Laval', 'Quebec', 'D5E5F6', 'Canada', '1234567890', '1212131314', 'suzav_smth@gmail.com', 'Female', '1953-05-18', 2021001001, 1, 'Mohd', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
            VALUES ('Lionel', 'Messi', 2, 'assets/photos/placeholder.png', 'Damascus','11e Avenue', 'Laval', 'Quebec', 'D4E5F6', 'Canada', '1234567890', '1212131314', 'leo_messi@gmail.com', 'Male', '1973-01-05', 2021001001, 1, 'Mohd', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
            VALUES ('Alfred', 'Nobel', 2, 'assets/photos/placeholder.png', 'Damascus','11e Avenue', 'Laval', 'Quebec', 'D4E5F6', 'Canada', '1234567890', '1212131314', 'alfred_nobel@gmail.com', 'Male', '1975-10-14', 2021001001, 1, 'Mohd', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
			VALUES ('Tina', 'Black', 3, 'assets/photos/placeholder.png', 'Dawson','11e Avenue', 'Laval', 'Quebec', 'G7H8I9', 'Canada', '1234567890', '1212131314', 'tina_blck12@gmail.com', 'Female', '2001-02-001', 2021001001, 1, 'John', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
			VALUES ('Diego', 'Maradona', 3, 'assets/photos/placeholder.png', 'Dawson','11e Avenue', 'Laval', 'Quebec', 'G8H8I9', 'Canada', '1234567890', '1212131314', 'diego_maradona2@gmail.com', 'Male', '2000-05-10', 2021001001, 1, 'Mohd', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
			VALUES ('Kenny', 'Rogers', 3, 'assets/photos/placeholder.png', 'MCIT','57e Avenue', 'Laval', 'Quebec', 'G1H8I9', 'Canada', '1234567890', '1212131314', 'kenny_rogers@gmail.com', 'Male', '1999-07-25', 2021001001, 1, NOW(), 'John', NULL, NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
			VALUES ('Ennio', 'Morricone', 3, 'assets/photos/placeholder.png', 'MCIT','121e Avenue', 'Laval', 'Quebec', 'G2L8I9', 'Canada', '1234567890', '1212131314', 'ennio_morricone@gmail.com', 'Male', '1989-12-31', 2021001001, 1, 'Mohd', NULL, NOW(), NULL);


- -----------------------------------------------------
-- Table `college-grading-system`.`courses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `college-grading-system`.`courses` (
  `course_id` BIGINT(8) NOT NULL AUTO_INCREMENT,
  `course_name` VARCHAR(255) DEFAULT NULL,
  `active` BIT DEFAULT 1,
  `start_date` DATETIME(6) DEFAULT NULL,
  `end_date` DATETIME(6) DEFAULT NULL,
  `created_by` VARCHAR(255) DEFAULT NULL,
  `updated_by` VARCHAR(255) DEFAULT NULL,
  `date_created` DATETIME(6) DEFAULT NULL,
  `last_updated` DATETIME(6) DEFAULT NULL,
  PRIMARY KEY (`course_id`)
) 
ENGINE=InnoDB
AUTO_INCREMENT = 1;


-- -----------------------------------------------------
-- Add sample data for courses
-- -----------------------------------------------------

INSERT INTO courses (course_name, active, start_date, end_date, created_by, updated_by, date_created, last_updated)
VALUES ('JAVA', 1, NULL, NULL, 'Mohd', NULL, NOW(), NULL);

INSERT INTO courses (course_name, active, start_date, end_date, created_by, updated_by, date_created, last_updated)
VALUES ('C#', 1, NULL, NULL, 'John', NULL, NOW(), NULL);

INSERT INTO courses (course_name, active, start_date, end_date, created_by, updated_by, date_created, last_updated)
VALUES ('Oracle', 1, NULL, NULL, 'Mohd', NULL, NOW(), NULL);

INSERT INTO courses (course_name, active, start_date, end_date, created_by, updated_by, date_created, last_updated)
VALUES ('Python', 1, NULL, NULL, 'Mohd', NULL, NOW(), NULL);

-- -----------------------------------------------------
-- Table `college-grading-system`.`teacher_courses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `college-grading-system`.`teacher_courses` (
  `tchr_crs_id` BIGINT(10) NOT NULL AUTO_INCREMENT,
  `course_id` BIGINT(8) DEFAULT NULL,
  `teacher_id` BIGINT(8) DEFAULT NULL,
  `created_by` VARCHAR(255) DEFAULT NULL,
  `updated_by` VARCHAR(255) DEFAULT NULL,
  `date_created` DATETIME(6) DEFAULT NULL,
  `last_updated` DATETIME(6) DEFAULT NULL,
  PRIMARY KEY (`tchr_crs_id`),
  KEY (course_id, teacher_id),
  CONSTRAINT FOREIGN KEY (`course_id`) REFERENCES `courses` (`course_id`),
  CONSTRAINT FOREIGN KEY (`teacher_id`) REFERENCES `users` (`user_id`)
) 
ENGINE=InnoDB
AUTO_INCREMENT = 1;


-- -----------------------------------------------------
-- Add sample data for teacher_courses
-- -----------------------------------------------------



-- -----------------------------------------------------
-- Table `college-grading-system`.`student_courses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `college-grading-system`.`student_courses` (
  `std_crs_id` BIGINT(10) NOT NULL AUTO_INCREMENT,
  `tchr_crs_id` BIGINT(8) DEFAULT NULL,
  `student_id` BIGINT(16) DEFAULT NULL,
  `created_by` VARCHAR(255) DEFAULT NULL,
  `updated_by` VARCHAR(255) DEFAULT NULL,
  `date_created` DATETIME(6) DEFAULT NULL,
  `last_updated` DATETIME(6) DEFAULT NULL,
  PRIMARY KEY (`std_crs_id`),
  KEY (tchr_crs_id, student_id),
  CONSTRAINT FOREIGN KEY (`tchr_crs_id`) REFERENCES `teacher_courses` (`tchr_crs_id`),
  CONSTRAINT FOREIGN KEY (`student_id`) REFERENCES `users` (`user_id`)
) 
ENGINE=InnoDB
AUTO_INCREMENT = 1;


-- -----------------------------------------------------
-- Add sample data for student_courses
-- -----------------------------------------------------


-- -----------------------------------------------------
-- Table `college-grading-system`.`marks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `college-grading-system`.`marks` (
  `marks_id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `std_crs_id` BIGINT(20) DEFAULT NULL,
  `student_id` BIGINT(8) DEFAULT NULL,
  `mark_1` DECIMAL(6,2),
  `mark_2` DECIMAL(6,2),
  `created_by` VARCHAR(255) DEFAULT NULL,
  `updated_by` VARCHAR(255) DEFAULT NULL,
  `date_created` DATETIME(6) DEFAULT NULL,
  `last_updated` DATETIME(6) DEFAULT NULL,
  PRIMARY KEY (`marks_id`),
  KEY (std_crs_id, student_id),
  CONSTRAINT FOREIGN KEY (`std_crs_id`) REFERENCES `student_courses` (`std_crs_id`),
  CONSTRAINT FOREIGN KEY (`student_id`) REFERENCES `users` (`user_id`)
) 
ENGINE=InnoDB
AUTO_INCREMENT = 1;


-- -----------------------------------------------------
-- Add sample data for marks
-- -----------------------------------------------------















