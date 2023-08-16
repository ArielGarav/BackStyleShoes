import { Router } from "express";
import { check } from "express-validator";
import { getOrdenes, createOrder } from "../controllers/orders";
import { recolectarErrores } from "../middlewares/recolectarErrores";
import validarJWT from "../middlewares/validarJWT";
import { isVerified } from "../middlewares/validarVerificado";
const router = Router();
router.get("/", [validarJWT, recolectarErrores], getOrdenes);
router.post(
  "/",
  [
    validarJWT,
    isVerified,
    check("price", "El precio es obligatorio").not().isEmpty(),
    check("shippingCost", "El costo de envío es obligatorio").not().isEmpty(),
    check("total", "El total es obligatorio").not().isEmpty(),
    check("shippingDetails", "Los detalles de envío son obligatorios")
      .not()
      .isEmpty(),
    check("items", "El array de productos es obligarorio").not().isEmpty(),
    recolectarErrores,
  ],
  createOrder
);
export default router;
