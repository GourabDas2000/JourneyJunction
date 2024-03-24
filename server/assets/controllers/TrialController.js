import TrialModal from "../modals/TrialModal.js";
export const createtext = async(req, res, next) => {
    console.log(req.body)
    try {
        const text = new TrialModal(req.body);
        const result = await text.save();
        console.log(result)
        res.status(200).send({
            message: "Text is successfully updated "
        })
    } catch (e) {
        next(e)
    }
}