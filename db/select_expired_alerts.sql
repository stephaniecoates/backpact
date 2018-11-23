SELECT * FROM alert_info
WHERE trip_end < now()
AND
alert_text_running = 'true';

