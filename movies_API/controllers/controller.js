export const getid = (req, res) => {
    res.send("Hey guys");
}
export const update = (req, res) => {
    res.send({ msg: "uploading" });
} 
export const edit= (req, res) => {
    res.send({ msg: "edit" });
}
export const remove = (req, res) => {
    res.send({ msg: "delete" });
}