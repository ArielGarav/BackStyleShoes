import { Router } from "express";
import { postNewIssue } from "../controllers/issues";
import validarJWT from "../middlewares/validarJWT";
import { isAdmin } from "../middlewares/validarRol";
import { check } from "express-validator";
import { recolectarErrores } from "../middlewares/recolectarErrores";
const router = Router();

router.post(
  "/",
  [
    validarJWT,
    isAdmin,
    check("title", "el titulo es obligatorio").not().isEmpty(),
    check("description", "la descripcion es obligatorio").not().isEmpty(),
    check("priority", "la prioridad es obligatorio").not().isEmpty(),
    recolectarErrores,
  ],
  postNewIssue
);

export default router;
