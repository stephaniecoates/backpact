create table alert_info (

alert_id integer,
trail_name varchar(100),
trail_type varchar(50),
trail_group varchar(300),
wilderness_area varchar(100),
starting_trailhead varchar(100),
ending_trailhead varchar(100),
roundtrip_distance varchar(20),
nearest_town varchar(50),
state varchar(30),
country varchar(30),
trip_description varchar(500),

trip_start timestamp with time zone,
trip_end timestamp with time zone,

first_name varchar(20),
last_name varchar(30),
age text,
user_phone_number text,
gender varchar(30),
height varchar(10),
weight varchar(10),
hair_color varchar(20),
clothing_description varchar(240),
medications varchar(240),
medical_issues varchar(240),

alert_contact_name varchar(50),
user_contact_relationship varchar(50),
alert_contact_number text,
alert_contact_email varchar(50),
alert_text_running text,
hour_countdown timestamp with time zone,

FOREIGN KEY (alert_id) REFERENCES backpact_user (id)
);