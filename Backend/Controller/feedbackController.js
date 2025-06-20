
//Controller to receiver feedback and print it
const postFeedbackController = async(req, res) =>{
    try{
        const {name, msg, rating} = req.body

        //Error Handling
        if(!name){
            return res.status(404).json({success: false, message: "Name is Required"})
        }
        if(!msg){
            return res.status(404).json({success: false, message: "Message is Required"})
        }

        console.log(`New Feedback Received:`)
        console.log(`Name:      ${name}`)
        console.log(`Message:   ${msg}`)
        console.log(`Rating:    ${rating}/5`)
        console.log(`Date:      ${new Date().toLocaleString()}`)
        console.log(`------------------------------`)
        return res.status(200).json({success: true, message: "Feedback received!"})
    }
    catch(err){
        console.log(`Error in Post Feedback Controller - ${err.message}`)
        return res.status(500).json({success: false, message: "Internal Server Error", error: err.message})
    }
}

module.exports = { postFeedbackController }