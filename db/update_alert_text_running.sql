UPDATE alert_info
SET alert_text_running = $1
WHERE alert_id = $2;