<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>Ariel API</h1>

<h2>Description:</h2>

<p>With the Ariel API, you will be able to create a user, validate it with a code, which is sent to the email, and then log in. You can also create Orders linked to the user, using a token automatically generated when logging in. Finally, they can be obtained through the same Token.</p>

<h2>Installation and Configuration:</h2>

<p>In order to use the Ariel API, it is necessary to generate the corresponding requests through the following URL: <a href="https://back-style-shoes.vercel.app/">https://back-style-shoes.vercel.app/</a>, and their respective "Query Params":</p>

<ul>
    <li>Register: "auth/register"</li>
    <li>Verify user: "auth/verify"</li>
    <li>Login: "auth/login"</li>
    <li>Create order: "/orders"</li>
    <li>Get orders: "/orders"</li>
</ul>

<h2>Documentation:</h2>

<p>In the following link you can access the documentation of the Ariel API:</p>

<p>URL: <a href="https://documenter.getpostman.com/view/28052638/2s9YBz3v4r">https://documenter.getpostman.com/view/28052638/2s9YBz3v4r</a></p>

<h2>Dependencies:</h2>

<ul>
    <li>Node.js</li>
    <li>TypeScript</li>
    <li>Nodemon</li>
    <li>Bcryptjs</li>
    <li>Cors</li>
    <li>Dotenv</li>
    <li>Random String</li>
    <li>Json Web Token</li>
    <li>Express</li>
    <li>Express Validator</li>
    <li>Nodemailer</li>
    <li>Mongoose</li>
</ul>

<h2>Database:</h2>

<p>MongoDB</p>

<h2>Examples Requests:</h2>

<h3>Register:</h3>

<p>URL/auth/register</p>

<pre>
<code>
Body{
    "nombre": "nombre",
    "email":"nombre@gmail.com",
    "password": "nombre123"
}
</code>
</pre>

<h3>Verify User:</h3>

<p>URL/auth/verify</p>

<pre>
<code>
Body{
    "email":"nombre@gmail.com",
    "code":"a7klZa"
}
</code>
</pre>

<h3>Login User:</h3>

<p>URL/auth/login</p>

<pre>
<code>
Body{
    "email":"nombre@gmail.com",
    "password": "nombre123"
}
</code>
</pre>

<h3>Create Order:</h3>

<p>URL/orders</p>

<pre>
<code>
Headers{
    "x-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZmE0YjQ3MGNlMTYxNDRiOTVhM2M0MCIsImlhdCI6MTY5NDEyNDg5OCwiZXhwIjo
                                    xNjk0MjExMjk4fQ.ydZakkRs2zZpdnTUI5kYK6W5TzdQCt-LqzRq7pa-YT4"
}

Body{
    "price": 150000,
    "shippingCost": 1500,
    "total": 151500,
    "items": [
        {
            "id": 15,
            "precio":500,
            "quantity": 1,
            "nombre": "NIKE JORDAN"
        }
    ],
    "shippingDetails": {
        "name": "nombre",
        "cellphone": "1145667754",
        "location": "san isidro",
        "address": "av.Libertador"
    }
}
</code>
</pre>

<h3>Get Orders:</h3>

<p>URL/orders</p>

<pre>
<code>
Headers{
    "x-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZmE0YjQ3MGNlMTYxNDRiOTVhM2M0MCIsImlhdCI6MTY5NDEyNDg5OCwiZXhwIjo
                                    xNjk0MjExMjk4fQ.ydZakkRs2zZpdnTUI5kYK6W5TzdQCt-LqzRq7pa-YT4"
}
</code>
</pre>

<h2>Connection Example:</h2>

<p>The following example shows a register request made with Axios:</p>

<pre>
<code>
const createUser = async (nombre, email, password) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/auth/register`, {
        nombre,
        email,
        password,
     });
     return data;
     } catch (error) {
                     let ErrorUsuarioRegistrado = "El usuario ya está registrado. Se envió nuevamente código de verificación a";
                     let ErrorMsg = error.response.data.errors[0].msg;
                     toast.error(ErrorMsg);
      if (ErrorMsg.includes(ErrorUsuarioRegistrado)) {
      return "usuarioRegistrado";
      }
     }
   };

createUser("nombre", "email", "password");
</code>
</pre>

<h2>Contact:</h2>

<p>Name: Ariel Garaventa</p>

<p>Email: <a href="mailto:arielgaraventa5@gmail.com">arielgaraventa5@gmail.com</a></p>

<h2>License:</h2>

<p>Created By Ariel Garaventa</p>

</body>
</html>
