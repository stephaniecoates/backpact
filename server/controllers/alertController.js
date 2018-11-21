module.exports = {    
    createAlert: async (req, res) => {
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

            tripStartTime,
            tripStartDate,
            tripEndTime,
            tripEndDate,

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

            tripStartTime,
            tripStartDate,
            tripEndTime,
            tripEndDate,

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