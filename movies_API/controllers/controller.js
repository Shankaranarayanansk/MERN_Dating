export const getid = (req, res) => {
    res.send("Hey guys");
}
export const update = (req, res) => {
    console.log(req.body);
    return res.json(req.body)
} 
export const edit= (req, res) => {
    res.send({ msg: "edit" });
}
export const remove = (req, res) => {
    res.send({ msg: "delete" });
}