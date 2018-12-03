module.exports = {
    createAlert: async (req, res) => {
        let {
            alertId,
            trailName,
            trailType,
            trailGroup,
            vehicle,
            startingTrailhead,
            endingTrailhead,
            roundtripDistance,
            nearestTown,
            state,
            country,
            tripDescription,

            tripStart,
            tripEnd,

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
            alertContactEmail,
        } = req.body;

        let db = req.app.get('db');
        let parsedUserPhoneNumber = userPhoneNumber.replace(/[^0-9]/g, "");
        let parsedAlertContactNumber = alertContactNumber.replace(/[^0-9]/g, "");
        let [createdAlert] = await db.create_alert_info([
            alertId,
            trailName,
            trailType,
            trailGroup,
            vehicle,
            startingTrailhead,
            endingTrailhead,
            roundtripDistance,
            nearestTown,
            state,
            country,
            tripDescription,

            tripStart,
            tripEnd,

            firstName,
            lastName,
            age,
            parsedUserPhoneNumber,
            gender,
            height,
            weight,
            hairColor,
            clothingDescription,
            medications,
            medicalIssues,

            alertContactName,
            userContactRelationship,
            parsedAlertContactNumber,
            alertContactEmail
        ])
        res.status(200).send(createdAlert)
    },
    getAlertData: async (req, res) => {
        let { id } = req.params
        let db = req.app.get('db');
        let [activeAlert] = await db.check_for_alert([id])
        res.status(200).send(activeAlert)
    },
    editAlert: async (req, res) => {
        let {
            trailName,
            trailType,
            trailGroup,
            vehicle,
            startingTrailhead,
            endingTrailhead,
            roundtripDistance,
            nearestTown,
            state,
            country,
            tripDescription,

            tripStart,
            tripEnd,

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
            alertContactEmail,
            alertId
        } = req.body;
        let db = req.app.get('db');
        let parsedUserPhoneNumber = userPhoneNumber.replace(/[^0-9]/g, "");
        let parsedAlertContactNumber = alertContactNumber.replace(/[^0-9]/g, "");
        let [updatedAlert] = await db.update_alert([
            trailName,
            trailType,
            trailGroup,
            vehicle,
            startingTrailhead,
            endingTrailhead,
            roundtripDistance,
            nearestTown,
            state,
            country,
            tripDescription,

            tripStart,
            tripEnd,

            firstName,
            lastName,
            age,
            parsedUserPhoneNumber,
            gender,
            height,
            weight,
            hairColor,
            clothingDescription,
            medications,
            medicalIssues,

            alertContactName,
            userContactRelationship,
            parsedAlertContactNumber,
            alertContactEmail,
            alertId
        ])
        res.status(200).send(updatedAlert)
    },
    deleteAlert: async (req, res) => {
        let { id } = req.params
        let db = req.app.get('db');
        db.delete_alert([id]);
        res.sendStatus(200)
    }
}