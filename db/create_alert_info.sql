insert into alert_info (
alert_id,
trail_name,
trail_type,
trail_group,
starting_trailhead,
ending_trailhead,
roundtrip_distance,
wilderness_area,
trip_description,
nearest_town,
state,
country,
timezone,

trip_start_hour,
trip_start_month,
trip_start_date,
trip_start_year,
trip_end_hour,
trip_end_month,
trip_end_date,
trip_end_year,

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
$13, --timezone

-- dates/times

$14, -- trip start hour
$15, --trip start month
$16, --trip start date
$17, --trip start year
$18, --trip end hour
$19, --trip end month
$20, --trip end date
$21, --trip end year

--user info

$22, --first name
$23, --last name
$24, --user phone number
$25, --age
$26, --gender
$27, --height
$28, --weight
$29, --hair color
$30, --clothing desc
$31, --medical issues
$32, --medications

--designated contact info

$33, --designated contact name
$34,  --user contact relationship
$35, --designated contact number
$36 --designated contact email
)
returning *;