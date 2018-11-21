module.exports = {    
    createAlert: async (req, res) => {
        console.log(req.body)
        let {
            alertId,
            trailName,
            trailType,
            trailGroup,
            wildernessArea,
            startingTrailhead,
            endingTrailhead,
            roundtripDistance,
            nearestTown,
            state,
            country,
            tripDescription,

            tripStartTime,
            tripStartDate,
            tripEndTime,
            tripEndDate,

            firstName,
            lastName,
            age,
            userPhoneNumber,
            gender,
            height,
            weight,
            hairColor,
            clothingDescription,
            medications,
            medicalIssues,

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
            wildernessArea,
            startingTrailhead,
            endingTrailhead,
            roundtripDistance,
            nearestTown,
            state,
            country,
            tripDescription,

            tripStartTime,
            tripStartDate,
            tripEndTime,
            tripEndDate,

            firstName,
            lastName,
            age,
            userPhoneNumber,
            gender,
            height,
            weight,
            hairColor,
            clothingDescription,
            medications,
            medicalIssues,

            alertContactName,
            userContactRelationship,
            alertContactNumber,
            alertContactEmail
        ])
        res.status(200).send(createdAlert)
    }
}