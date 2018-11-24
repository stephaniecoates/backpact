UPDATE alert_info
SET sos = 'true'  
WHERE user_phone_number = $1;