import { useState } from "react";
import { registerUser } from "../api/api";


function Register() {


  const [name, setName] = useState("");

    const [email, setEmail] = useState("");

      const [password, setPassword] = useState("");

        const [message, setMessage] = useState("");



          const handleRegister = async (e) => {

              e.preventDefault();


                  const result = await registerUser({

                        name,

                              email,

                                    password

                                        });



                                            if (result.status === "success") {


                                                  setMessage(
                                                          "Account created successfully"
                                                                );


                                                                      setName("");

                                                                            setEmail("");

                                                                                  setPassword("");



                                                                                      } else {


                                                                                            setMessage(
                                                                                                    result.message
                                                                                                          );


                                                                                                              }


                                                                                                                };



                                                                                                                  return (

                                                                                                                      <div className="auth-page">


                                                                                                                            <div className="auth-card">


                                                                                                                                    <h1>
                                                                                                                                              Create RiyadNova AI Account
                                                                                                                                                      </h1>



                                                                                                                                                              <form onSubmit={handleRegister}>


                                                                                                                                                                        <input

                                                                                                                                                                                    type="text"

                                                                                                                                                                                                placeholder="Full Name"

                                                                                                                                                                                                            value={name}

                                                                                                                                                                                                                        onChange={(e)=>setName(e.target.value)}

                                                                                                                                                                                                                                    required

                                                                                                                                                                                                                                              />



                                                                                                                                                                                                                                                        <input

                                                                                                                                                                                                                                                                    type="email"

                                                                                                                                                                                                                                                                                placeholder="Email"

                                                                                                                                                                                                                                                                                            value={email}

                                                                                                                                                                                                                                                                                                        onChange={(e)=>setEmail(e.target.value)}

                                                                                                                                                                                                                                                                                                                    required

                                                                                                                                                                                                                                                                                                                              />



                                                                                                                                                                                                                                                                                                                                        <input

                                                                                                                                                                                                                                                                                                                                                    type="password"

                                                                                                                                                                                                                                                                                                                                                                placeholder="Password"

                                                                                                                                                                                                                                                                                                                                                                            value={password}

                                                                                                                                                                                                                                                                                                                                                                                        onChange={(e)=>setPassword(e.target.value)}

                                                                                                                                                                                                                                                                                                                                                                                                    required

                                                                                                                                                                                                                                                                                                                                                                                                              />



                                                                                                                                                                                                                                                                                                                                                                                                                        <button type="submit">

                                                                                                                                                                                                                                                                                                                                                                                                                                    Register

                                                                                                                                                                                                                                                                                                                                                                                                                                              </button>



                                                                                                                                                                                                                                                                                                                                                                                                                                                      </form>



                                                                                                                                                                                                                                                                                                                                                                                                                                                              {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        message && (

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  {message}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </p>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        )
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }



                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </div>


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            );


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            export default Register;