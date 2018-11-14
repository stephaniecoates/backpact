insert into trail_angel_user 
(username, hash) 
values 
($1, $2)
returning *;
