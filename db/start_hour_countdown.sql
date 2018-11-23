UPDATE alert_info
SET hour_countdown = now() + interval '1hour' 
WHERE alert_id = $1;