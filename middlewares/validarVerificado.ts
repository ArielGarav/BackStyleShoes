import { NextFunction, Request, Response } from "express";

export const isVerified = (req: Request, res: Response, next: NextFunction) => {
  // Obtener la propiedad "verified" del objeto "usuarioConfirmado" que fue agregado previamente por el middleware anterior
  const { verified } = req.body.usuarioConfirmado;

  // Verificar si el usuario está correctamente verificado
  if (!verified) {
    res
      .status(401)
      .json({ msg: "El usuario no está correctamente verificado" });
    return; // Importante incluir el 'return' para detener la ejecución del middleware en caso de error
  }

  // Si el usuario está verificado, continuar con el siguiente middleware o ruta
  next();
};
