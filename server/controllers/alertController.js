module.exports = {
    setAlert: async (req, res) => {
        console.log(req.body)
        let {
            alertId,
            trailName,
            trailType,
            trailGroup,
            startingTrailhead,
            endingTrailhead,
            roundtripDistance,
            wildernessArea,
            tripDescription,
            nearestTown,
            state,
            country,
            timezone,

            tripStartHour,
            tripStartMonth,
            tripStartDate,
            tripStartYear,
            tripEndHour,
            tripEndMonth,
            tripEndDate,
            tripEndYear,

            firstName,
            lastName,
            userPhoneNumber,
            age,
            gender,
            height,
            weight,
            hairColor,
            clothingDescription,
            medicalIssues,
            medications,

            alertContactName,
            userContactRelationship,
            alertContactNumber,
            alertContactEmail
        } = req.body;
    
        userPhoneNumber = `+${userPhoneNumber}`
        alertContactNumber = `+${alertContactNumber}`

        //its reading my userPhoneNumber and alertContactNumber as integers, even though theyre specified as varchar...whats going on here?
       
        let db = req.app.get('db');
        let [createdAlert] = await db.create_alert_info([
            alertId,
            trailName,
            trailType,
            trailGroup,
            startingTrailhead,
            endingTrailhead,
            roundtripDistance,
            wildernessArea,
            tripDescription,
            nearestTown,
            state,
            country,
            timezone,

            tripStartHour,
            tripStartMonth,
            tripStartDate,
            tripStartYear,
            tripEndHour,
            tripEndMonth,
            tripEndDate,
            tripEndYear,

            firstName,
            lastName,
            userPhoneNumber,
            age,
            gender,
            height,
            weight,
            hairColor,
            clothingDescription,
            medicalIssues,
            medications,

            alertContactName,
            userContactRelationship,
            alertContactNumber,
            alertContactEmail
        ])
        res.status(200).send(createdAlert)
    }
}