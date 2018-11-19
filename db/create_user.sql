insert into backpact_user 
(username, hash) 
values 
($1, $2)
returning *;
