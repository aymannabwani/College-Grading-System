
-- -----------------------------------------------------
-- Schema college-grading-system
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `college-grading-system`;

CREATE SCHEMA `college-grading-system`;
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
  `email` VARCHAR(255) UNIQUE,
  `gender` VARCHAR(10) DEFAULT NULL,
  `birthdate` DATE DEFAULT NULL,
  `password` BIGINT(20) DEFAULT NULL,
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
            VALUES ('John', 'Bradely', 1, 'assets/images/Adminstrators/1.png', 'Damascus', '11e Avenue', 'Laval', 'Quebec', 'A1B2C3', 'Canada', '1234567890', '1212131314', 'jhn_brdly@gmail.com', 'Male', '1985-10-03', 2100100000000, 1, 'John', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
            VALUES ('Mohd', 'Salah', 1, 'assets/images/Adminstrators/2.png', 'Damascus', '11e Avenue', 'Laval', 'Quebec', 'A2B2C3', 'Canada', '1234567890', '1212131314', 'mohd_salah@gmail.com', 'Male', '1975-01-12',2100200000000,1, 'Mohd', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
            VALUES ('Suzan', 'Smith', 2, 'assets/images/Teachers/1.png', 'Damascus','11e Avenue', 'Laval', 'Quebec', 'D5E5F6', 'Canada', '1234567890', '1212131314', 'suzav_smth@gmail.com', 'Female', '1953-05-18', 2100000100000, 1, 'Mohd', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
            VALUES ('Lionel', 'Messi', 2, 'assets/images/Teachers/2.png', 'Damascus','11e Avenue', 'Laval', 'Quebec', 'D4E5F6', 'Canada', '1234567890', '1212131314', 'leo_messi@gmail.com', 'Male', '1973-01-05', 2100000200000, 1, 'Mohd', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
            VALUES ('Alfred', 'Nobel', 2, 'assets/images/Teachers/3.png', 'Damascus','11e Avenue', 'Laval', 'Quebec', 'D4E5F6', 'Canada', '1234567890', '1212131314', 'alfred_nobel@gmail.com', 'Male', '1975-10-14', 2100000300000, 1, 'Mohd', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
			VALUES ('Tina', 'Black', 3, 'assets/images/Students/1.png', 'Dawson','11e Avenue', 'Laval', 'Quebec', 'G7H8I9', 'Canada', '1234567890', '1212131314', 'tina_blck12@gmail.com', 'Female', '2001-02-001', 2100000000001, 1, 'John', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
			VALUES ('Diego', 'Maradona', 3, 'assets/images/Students/2.png', 'Dawson','11e Avenue', 'Laval', 'Quebec', 'G8H8I9', 'Canada', '1234567890', '1212131314', 'diego_maradona2@gmail.com', 'Male', '2000-05-10', 2100000000002, 1, 'Mohd', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
			VALUES ('Kenny', 'Rogers', 3, 'assets/images/Students/3.png', 'MCIT','57e Avenue', 'Laval', 'Quebec', 'G1H8I9', 'Canada', '1234567890', '1212131314', 'kenny_rogers@gmail.com', 'Male', '1999-07-25', 2100000000003, 1, NOW(), 'John', NULL, NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
			VALUES ('Ennio', 'Morricone', 3, 'assets/images/Students/4.png', 'MCIT','121e Avenue', 'Laval', 'Quebec', 'G2L8I9', 'Canada', '1234567890', '1212131314', 'ennio_morricone@gmail.com', 'Male', '1989-12-31', 2100000000004, 1, 'Mohd', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
            VALUES ('Jameel', 'Mardam', 1, 'assets/images/Adminstrators/3.png', 'Damascus', '11e Avenue', 'Laval', 'Quebec', 'A1B2C3', 'Canada', '1234567890', '1212131314', 'jml_mrdm@gmail.com', 'Male', '1985-10-03', 2100300000000, 1, 'John', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
            VALUES ('Mona', 'Saki', 1, 'assets/images/Adminstrators/4.png', 'Damascus', '11e Avenue', 'Laval', 'Quebec', 'A2B2C3', 'Canada', '1234567890', '1212131314', 'mona_zaki@gmail.com', 'Female', '1975-01-12',2100400000000,1, 'Mohd', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
            VALUES ('Salah', 'Qassas', 2, 'assets/images/Teachers/4.png', 'Damascus','11e Avenue', 'Laval', 'Quebec', 'D5E5F6', 'Canada', '1234567890', '1212131314', 'salah_qassas@gmail.com', 'Male', '1953-05-18', 2100000300000, 1, 'Mohd', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
            VALUES ('Omar', 'Al Mokhtar', 2, 'assets/images/Teachers/5.png', 'Damascus','11e Avenue', 'Laval', 'Quebec', 'D4E5F6', 'Canada', '1234567890', '1212131314', 'omar_al_mokhtar@gmail.com', 'Male', '1973-01-05', 2100000400000, 1, 'Mohd', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
            VALUES ('Ibn', 'Sina', 2, 'assets/images/Teachers/6.png', 'Damascus','11e Avenue', 'Laval', 'Quebec', 'D4E5F6', 'Canada', '1234567890', '1212131314', 'ibn_sina@gmail.com', 'Male', '1975-10-14', 2100000500000, 1, 'Mohd', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
			VALUES ('Fairouz', 'Haddad', 3, 'assets/images/Students/5.png', 'Dawson','11e Avenue', 'Laval', 'Quebec', 'G7H8I9', 'Canada', '1234567890', '1212131314', 'fairouz_haddad@gmail.com', 'Female', '2001-02-001', 2100000000005, 1, 'John', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
			VALUES ('Sabah', 'Fakhri', 3, 'assets/images/Students/6.png', 'Dawson','11e Avenue', 'Laval', 'Quebec', 'G8H8I9', 'Canada', '1234567890', '1212131314', 'sabah_fakhri@gmail.com', 'Male', '2000-05-10', 2100000000006, 1, 'Mohd', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
			VALUES ('Fareed', 'Al Atrash', 3, 'assets/images/Students/7.png', 'MCIT','57e Avenue', 'Laval', 'Quebec', 'G1H8I9', 'Canada', '1234567890', '1212131314', 'fareed_al_atrash@gmail.com', 'Male', '1999-07-25', 2100000000007, 1, NOW(), 'John', NULL, NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
			VALUES ('Gassan', 'Kanafani', 3, 'assets/images/Students/8.png', 'MCIT','121e Avenue', 'Laval', 'Quebec', 'G2L8I9', 'Canada', '1234567890', '1212131314', 'gassan_kanafani@gmail.com', 'Male', '1989-12-31', 2100000000008, 1, 'Mohd', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
            VALUES ('liam', 'Ford', 1, 'assets/images/Adminstrators/1.png', 'Damascus', '12e Avenue', 'Laval', 'Quebec', 'A1B2C3', 'Canada', '1234567890', '1212131314', 'liam_ford@gmail.com', 'Male', '1985-10-03', 2100500000000, 1, 'John', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
            VALUES ('Maher', 'Salim', 1, 'assets/images/Adminstrators/2.png', 'Damascus', '11e Avenue', 'Laval', 'Quebec', 'A2B2C3', 'Canada', '1234567890', '1212131314', 'maher_salim@gmail.com', 'Male', '1975-01-12',2100600000000,1, 'Mohd', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
            VALUES ('Sara', 'Stanely', 2, 'assets/images/Teachers/1.png', 'Damascus','11e Avenue', 'Laval', 'Quebec', 'D5E5F6', 'Canada', '1234567890', '1212131314', 'sara_stnly1@gmail.com', 'Female', '1953-05-18', 2100000700000, 1, 'Mohd', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
            VALUES ('Ashraf', 'Masri', 2, 'assets/images/Teachers/2.png', 'Damascus','11e Avenue', 'Laval', 'Quebec', 'D4E5F6', 'Canada', '1234567890', '1212131314', 'ashrf_masr@gmail.com', 'Male', '1973-01-05', 2100000800000, 1, 'Mohd', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
            VALUES ('Alonso', 'Falconi', 2, 'assets/images/Teachers/3.png', 'Damascus','11e Avenue', 'Laval', 'Quebec', 'D4E5F6', 'Canada', '1234567890', '1212131314', 'alns_flcn@gmail.com', 'Male', '1975-10-14', 2100000900000, 1, 'Mohd', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
			VALUES ('Grace', 'Farard', 3, 'assets/images/Students/1.png', 'Dawson','11e Avenue', 'Laval', 'Quebec', 'G7H8I9', 'Canada', '1234567890', '1212131314', 'grace202101@gmail.com', 'Female', '2001-02-001', 2100000000009, 1, 'John', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
			VALUES ('Harry', 'Espanoza', 3, 'assets/images/Students/2.png', 'Dawson','11e Avenue', 'Laval', 'Quebec', 'G8H8I9', 'Canada', '1234567890', '1212131314', 'harr_espnz@gmail.com', 'Male', '2000-05-10', 2100000000010, 1, 'Mohd', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
			VALUES ('William', 'Dekkins', 3, 'assets/images/Students/3.png', 'MCIT','57e Avenue', 'Laval', 'Quebec', 'G1H8I9', 'Canada', '1234567890', '1212131314', 'wlm_dkns@gmail.com', 'Male', '1999-07-25', 2100000000011, 1, NOW(), 'John', NULL, NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
			VALUES ('Osama', 'meri', 3, 'assets/images/Students/4.png', 'MCIT','121e Avenue', 'Laval', 'Quebec', 'G2L8I9', 'Canada', '1234567890', '1212131314', 'osama_meri@gmail.com', 'Male', '1989-12-31', 2100000000012, 1, 'Mohd', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
            VALUES ('Jaber', 'Bin Hayyan', 1, 'assets/images/Adminstrators/3.png', 'Damascus', '11e Avenue', 'Laval', 'Quebec', 'A1B2C3', 'Canada', '1234567890', '1212131314', 'jbr_hyn1@gmail.com', 'Male', '1985-10-03', 2100700000000, 1, 'John', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
            VALUES ('Rajaa', 'Al Jiddawi', 1, 'assets/images/Adminstrators/4.png', 'Damascus', '11e Avenue', 'Laval', 'Quebec', 'A2B2C3', 'Canada', '1234567890', '1212131314', 'rj_jddwi@gmail.com', 'Female', '1975-01-12',2100800000000,1, 'Mohd', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
            VALUES ('Fawzi', 'Al Qawaqgi', 2, 'assets/images/Teachers/4.png', 'Damascus','11e Avenue', 'Laval', 'Quebec', 'D5E5F6', 'Canada', '1234567890', '1212131314', 'fawz_qwqgi@gmail.com', 'Male', '1953-05-18', 2100000300000, 1, 'Mohd', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
            VALUES ('Arnest', 'Chi Gifara', 2, 'assets/images/Teachers/5.png', 'Damascus','11e Avenue', 'Laval', 'Quebec', 'D4E5F6', 'Canada', '1234567890', '1212131314', 'arnesto_chi_gifara@gmail.com', 'Male', '1973-01-05', 2100000400000, 1, 'Mohd', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
            VALUES ('Fahd', 'Ballan', 2, 'assets/images/Teachers/6.png', 'Damascus','11e Avenue', 'Laval', 'Quebec', 'D4E5F6', 'Canada', '1234567890', '1212131314', 'fahd_balln@gmail.com', 'Male', '1975-10-14', 2100000500000, 1, 'Mohd', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
			VALUES ('Jamila', 'Bou Heirad', 3, 'assets/images/Students/5.png', 'Dawson','11e Avenue', 'Laval', 'Quebec', 'G7H8I9', 'Canada', '1234567890', '1212131314', 'jamila_bou_heyrad@gmail.com', 'Female', '2001-02-001', 2100000000013, 1, 'John', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
			VALUES ('Marcelle', 'Khalifah', 3, 'assets/images/Students/6.png', 'Dawson','11e Avenue', 'Laval', 'Quebec', 'G8H8I9', 'Canada', '1234567890', '1212131314', 'marcelle_khalifah@gmail.com', 'Male', '2000-05-10', 2100000000014, 1, 'Mohd', NULL, NOW(), NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
			VALUES ('Mohd', 'Mounir', 3, 'assets/images/Students/7.png', 'MCIT','57e Avenue', 'Laval', 'Quebec', 'G1H8I9', 'Canada', '1234567890', '1212131314', 'mohd_mounir@gmail.com', 'Male', '1999-07-25', 2100000000015, 1, NOW(), 'John', NULL, NULL);

INSERT INTO users (first_name, last_name, role_id, image_url, university, address, city, province, postal_code, country, phone, fax, email, gender, birthdate, password, active, created_by, updated_by, date_created, last_updated)
			VALUES ('Mahmoud', 'Darweesh', 3, 'assets/images/Students/8.png', 'MCIT','121e Avenue', 'Laval', 'Quebec', 'G2L8I9', 'Canada', '1234567890', '1212131314', 'mahmoud_darweesh@gmail.com', 'Male', '1989-12-31', 2100000000016, 1, 'Mohd', NULL, NOW(), NULL);


- -----------------------------------------------------
-- Table `college-grading-system`.`courses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `college-grading-system`.`courses` (
  `course_id` BIGINT(8) NOT NULL AUTO_INCREMENT,
  `course_name` VARCHAR(255) UNIQUE,
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

INSERT INTO courses (course_name, active, start_date, end_date, created_by, updated_by, date_created, last_updated)
VALUES ('C', 1, NULL, NULL, 'Mohd', NULL, NOW(), NULL);

INSERT INTO courses (course_name, active, start_date, end_date, created_by, updated_by, date_created, last_updated)
VALUES ('Fortran', 1, NULL, NULL, 'John', NULL, NOW(), NULL);

INSERT INTO courses (course_name, active, start_date, end_date, created_by, updated_by, date_created, last_updated)
VALUES ('Pascal', 1, NULL, NULL, 'Mohd', NULL, NOW(), NULL);

INSERT INTO courses (course_name, active, start_date, end_date, created_by, updated_by, date_created, last_updated)
VALUES ('Basic', 1, NULL, NULL, 'Mohd', NULL, NOW(), NULL);

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

INSERT INTO teacher_courses (course_id, teacher_id, created_by, updated_by, date_created, last_updated)
VALUES (1, 3, 'Mohd', NULL, NOW(), NOW());

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















