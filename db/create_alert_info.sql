insert into alert_info (
alert_id,
trail_name,
trail_type,
trail_group,
starting_trailhead,
ending_trailhead,
roundtrip_distance,
wilderness_area,
nearest_town,
state,
country,
trip_description,

trip_start_time,
trip_start_date,
trip_end_time,
trip_end_date,

first_name,
last_name,
user_phone_number,
age,
gender,
height,
weight,
hair_color,
clothing_description,
medical_issues,
medications,

alert_contact_name,
user_contact_relationship,
alert_contact_number,
alert_contact_email)

values
(
-- trailInfo
$1, --alert id
$2,  --trail name
$3, --trail type
$4, --trail group
$5, --starting trailhead
$6,  --ending trailhead
$7,  --rt distance
$8,  --wilderness area
$9,  --trip desc
$10,  --nearest town
$11,  --state
$12, --country

-- dates/times

$13, -- trip start time
$14, --trip start date
$15, --trip end time
$16, --trip end date

--user info

$17, --first name
$18, --last name
$19, --user phone number
$20, --age
$21, --gender
$22, --height
$23, --weight
$24, --hair color
$25, --clothing desc
$26, --medical issues
$27, --medications

--designated contact info

$28, --designated contact name
$29,  --user contact relationship
$30, --designated contact number
$31 --designated contact email
)
returning *;