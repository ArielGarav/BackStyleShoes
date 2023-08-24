import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import Usuario, { IUser } from "../models/usuario";

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

    const { id } = payload;

    // Buscar al usuario en la base de datos utilizando el ID
    const usuarioConfirmado: IUser | null = await Usuario.findById(id);

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
    // Si ocurre un error durante el proceso de verificación del token, devolver una respuesta de error 401
    console.error(error); // Imprime el error en la consola para depuración
    res.status(401).json({ msg: "Error al verificar el token JWT Aca Falla" });
  }
};
export default validarJWT;
