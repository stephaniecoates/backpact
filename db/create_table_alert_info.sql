create table alert_info (

alert_id integer,
trail_name varchar(100),
trail_type text,
trail_group varchar(300),
starting_trailhead varchar(100),
ending_trailhead varchar(100),
roundtrip_distance varchar(20),
wilderness_area varchar(100),
nearest_town varchar(50),
state text,
country text,
trip_description varchar(500),

trip_start_time integer,
trip_start_date integer,
trip_end_time integer,
trip_end_date integer,

first_name varchar(20),
last_name varchar(30),
user_phone_number varchar(20),
age integer,
gender text,
height varchar(10),
weight varchar(10),
hair_color varchar(20),
clothing_description varchar(240),
medical_issues varchar(240),
medications varchar(240),

alert_contact_name varchar(50),
user_contact_relationship varchar(50),
alert_contact_number varchar(20),
alert_contact_email varchar(50),

FOREIGN KEY (alert_id) REFERENCES backpact_user (id)
);