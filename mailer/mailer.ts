import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "arielapistokens@gmail.com    ",
    pass: "qgcnhtpqfrhizeze", // Aquí debes proporcionar la contraseña de la cuenta de correo
  },
  from: "arielapistokens@gmail.com",
});

export const sendEMail = async (to: string, code: string): Promise<void> => {
  try {
    // Configuración de detalles para el correo electrónico
    const mailOptions = {
      from: '"ArielApi" arielapistokens@gmail.com',
      to,
      subject: "Código de verificación para tu cuenta",
      text: `Llegó tu código para Arielappi. El código para verificarte es: ${code}`,
    };

    // Enviar el correo electrónico
    await transporter.sendMail(mailOptions);

    console.log("Correo electrónico enviado");
  } catch (error) {
    console.error("Error al enviar el correo electrónico", error);
  }
};
