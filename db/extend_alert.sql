UPDATE alert_info
SET trip_end = trip_end + interval $1, alert_text_running = 'true', hour_countdown = null  
WHERE user_phone_number = $2;