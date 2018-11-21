insert into alert_info (
alert_id,
trail_name,
trail_type,
trail_group,
wilderness_area,
starting_trailhead,
ending_trailhead,
roundtrip_distance,
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
age,
user_phone_number,
gender,
height,
weight,
hair_color,
clothing_description,
medications,
medical_issues,

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
$5,  --wilderness area
$6, --starting trailhead
$7,  --ending trailhead
$8,  --rt distance
$9,  --nearest town
$10,  --state
$11, --country
$12,  --trip desc

-- dates/times

$13, -- trip start time
$14, --trip start date
$15, --trip end time
$16, --trip end date

--user info

$17, --first name
$18, --last name
$19, --age
$20, --user phone number
$21, --gender
$22, --height
$23, --weight
$24, --hair color
$25, --clothing desc
$26, --medications
$27, --medical issues

--designated contact info

$28, --designated contact name
$29,  --user contact relationship
$30, --designated contact number
$31 --designated contact email
)
returning *;