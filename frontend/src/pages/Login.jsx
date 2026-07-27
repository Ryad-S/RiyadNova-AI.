import { useState } from "react";
import { loginUser } from "../api/api";


function Login() {


  const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

      const [message, setMessage] = useState("");



        const handleLogin = async (e) => {


            e.preventDefault();



                const result = await loginUser({

                      email,

                            password

                                });



                                    if (result.status === "success") {


                                          localStorage.setItem(
                                                  "token",
                                                          result.token
                                                                );


                                                                      localStorage.setItem(
                                                                              "user",
                                                                                      JSON.stringify(result.user)
                                                                                            );


                                                                                                  setMessage(
                                                                                                          "Login successful"
                                                                                                                );


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
                                                                                                                                                                            Login to RiyadNova AI
                                                                                                                                                                                    </h1>



                                                                                                                                                                                            <form onSubmit={handleLogin}>


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

                                                                                                                                                                                                                                                                                                                                                                                  Login

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


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          export default Login;