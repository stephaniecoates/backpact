insert into alert_info (
alert_id,
trail_name,
trail_type,
trail_group,
vehicle,
starting_trailhead,
ending_trailhead,
roundtrip_distance,
nearest_town,
state,
country,
trip_description,

trip_start,
trip_end,

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
alert_contact_email,
alert_text_running,
hour_countdown,
sos)

values
(
-- trailInfo
$1, --alert id
$2,  --trail name
$3, --trail type
$4, --trail group
$5,  --vehicle
$6, --starting trailhead
$7,  --ending trailhead
$8,  --rt distance
$9,  --nearest town
$10,  --state
$11, --country
$12,  --trip desc

-- dates/times

$13, -- trip start
$14, --trip end


--user info

$15, --first name
$16, --last name
$17, --age
$18, --user phone number
$19, --gender
$20, --height
$21, --weight
$22, --hair color
$23, --clothing desc
$24, --medications
$25, --medical issues

--designated contact info

$26, --designated contact name
$27,  --user contact relationship
$28, --designated contact number
$29, --designated contact email
'true',
null,
'false'
)
returning *;