select * from backpact_user
inner join alert_info ON backpact_user.id = alert_info.alert_id;