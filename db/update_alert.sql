UPDATE alert_info
SET 
trail_name = $1,
trail_type = $2,
trail_group = $3,
vehicle = $4,
starting_trailhead = $5,
ending_trailhead = $6,
roundtrip_distance = $7,
nearest_town = $8,
state = $9,
country = $10,
trip_description = $11,

trip_start = $12,
trip_end = $13,

first_name = $14,
last_name = $15,
age = $16,
user_phone_number = $17,
gender = $18,
height = $19,
weight = $20,
hair_color = $21,
clothing_description = $22,
medications = $23,
medical_issues = $24,

alert_contact_name = $25,
user_contact_relationship = $26,
alert_contact_number = $27,
alert_contact_email = $28,
alert_text_running = 'true',
hour_countdown = null

WHERE 
alert_id = $29;