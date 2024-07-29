import express from "express";
import { getid, remove, update , edit} from "../controllers/controller.js";
const router = express.Router();

router.get('/movies',getid );

router.post("/", update);

router.put(":id",edit);

router.delete("/:id", remove);

export default router;
