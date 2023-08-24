import { NextFunction, Request, Response } from "express";
import Usuario, { IUser } from "../models/usuario";
import jwt, { JwtPayload } from "jsonwebtoken";

const validarJWT = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const token = req.headers["x-token"] as string;
  if (!token) {
    res.status(401).json({ msg: "no hay token en la petición" });
    return;
  }
  try {
    const clueSecret = process.env.CLAVESECRET as string;
    const payload = jwt.verify(token, clueSecret) as JwtPayload;
    // Verificar si el token ha caducado
    if (payload.exp && Date.now() >= payload.exp * 1000) {
      res.status(401).json({ msg: "Token caducado" });
      return;
    }
    const { id } = payload;

    // Buscar al usuario en la base de datos utilizando el ID
    const usuarioConfirmado: IUser | null = await Usuario.findById(id);
    console.log(usuarioConfirmado);
    // Si el usuario no se encuentra en la base de datos, devolver una respuesta de error 401 (No autorizado)
    if (!usuarioConfirmado) {
      res.status(401).json({ msg: "Token no válido" });
      return;
    }

    // Agregar el usuario encontrado a la solicitud (req) para que pueda ser utilizado en las rutas siguientes
    req.body.usuarioConfirmado = usuarioConfirmado;

    // Pasar al siguiente middleware o ruta
    next();
  } catch (error) {
    if (error instanceof Error && error.name === "TokenExpiredError") {
      // El token ha caducado
      res.status(401).json({ msg: "Token caducado" });
    } else {
      // Otro tipo de error durante la verificación del token
      console.error(error);
      res.status(401).json({ msg: "Error al verificar el token JWT" });
    }
  }
};
export default validarJWT;
