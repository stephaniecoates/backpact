SELECT 
id,
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
sos
FROM
backpact_user
INNER JOIN alert_info ON alert_info.alert_id = backpact_user.id
WHERE id = $1;