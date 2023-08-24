import jwt from "jsonwebtoken";

const generarJWT = (id: string = ""): Promise<string> => {
  return new Promise((res, rej) => {
    const payload = { id };
    jwt.sign(
      payload,
      process.env.clueSecret as string,
      { expiresIn: "8h" },
      (err: Error | null, token: string | undefined) => {
        if (err) {
          console.log(err);
          rej("No se pudo generar el token");
        } else {
          console.log("Token generado:", token); // Agregamos un registro de depuración
          res(token as string);
        }
      }
    );
  });
};
export default generarJWT;
