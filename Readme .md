    								Ariel Api


    	1. Description.
    	2. Installation and Configuration.
    	3. Documentation.
    	4. Depencies.
    	5. Data Base.
    	6. Examples Requests.
    	7. Connection Example.
    	8. Contact.
    	9. License.

Description:

    With the Ariel API, you will be able to create a user, validate it with a code, which is sent to the email, and then log in.
    You can also create Orders linked to the user, using a token automatically generated when logging in. Finally, they can be obtained through the same Token.

Installation and Configuration:

    In order to use the Ariel API, it is necessary to generate the corresponding requests through the following URL: "https://back-style-shoes.vercel.app/", and 	their respective "Query Params" :

- Register: "auth/register"
- Verify user: "auth/verify"
- Login: "auth/login"
- Create order: "/orders"
- Get orders: "/orders"

Documentation:

    In the following link you can access the documentation of the Ariel API:

    URL:"https://documenter.getpostman.com/view/28052638/2s9YBz3v4r"

Depencies:

    - Node.js
    - TypeScript
    - Nodemon
    - Bcryptjs
    - Cors
    - Dontenv
    - Random String
    - Json Web Token
    - Express
    - Express Validator
    - Nodemailer
    - Mongoose

Data Base:

    - MongoDB

Examples Requests:

    Register: "URL/auth/register"
    	Body{
                    "nombre": "nombre",
                    "email":"nombre@gmail.com",
                    "password": "nombre123"
                    }

    Verify User: "URL/auth/verify"
    	Body{
                    "email":"nombre@gmail.com",
                    "code":"a7klZa"
                    }

    Login User: "URL/auth/login"
    	Body{
                     "email":"nombre@gmail.com",
                     "password": "nombre123"
                     }

    Create Orden : "URL/orders"
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

    Get Orders: "URL/orders"
    	Headers{
    		"x-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZmE0YjQ3MGNlMTYxNDRiOTVhM2M0MCIsImlhdCI6MTY5NDEyNDg5OCwiZXhwIjo
                                    xNjk0MjExMjk4fQ.ydZakkRs2zZpdnTUI5kYK6W5TzdQCt-LqzRq7pa-YT4"
    		}

Connection Example:

    	The following example shows a register request made with Axios

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


    		createUser ( "nombre", "email","password" )

Contact:
Name: Ariel Garaventa
Email: arielgaraventa5@gmail.com

License:

    Created By Ariel Garaventa
