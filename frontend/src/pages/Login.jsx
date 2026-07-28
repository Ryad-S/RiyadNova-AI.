import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/api";


function Login() {


  const navigate = useNavigate();


    const [email, setEmail] = useState("");

      const [password, setPassword] = useState("");

        const [message, setMessage] = useState("");



          const handleLogin = async (e) => {

              e.preventDefault();


                  try {


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



                                                                                                                                                              setTimeout(() => {

                                                                                                                                                                        navigate("/dashboard");

                                                                                                                                                                                }, 500);



                                                                                                                                                                                      } else {


                                                                                                                                                                                              setMessage(
                                                                                                                                                                                                        result.message || "Login failed"
                                                                                                                                                                                                                );


                                                                                                                                                                                                                      }



                                                                                                                                                                                                                          } catch (error) {


                                                                                                                                                                                                                                setMessage(
                                                                                                                                                                                                                                        "Cannot connect to server"
                                                                                                                                                                                                                                              );


                                                                                                                                                                                                                                                  }


                                                                                                                                                                                                                                                    };



                                                                                                                                                                                                                                                      return (

                                                                                                                                                                                                                                                          <div className="auth-page">


                                                                                                                                                                                                                                                                <div className="auth-card">


                                                                                                                                                                                                                                                                        <h1>
                                                                                                                                                                                                                                                                                  RiyadNova AI
                                                                                                                                                                                                                                                                                          </h1>


                                                                                                                                                                                                                                                                                                  <p>
                                                                                                                                                                                                                                                                                                            Sign in to your account
                                                                                                                                                                                                                                                                                                                    </p>



                                                                                                                                                                                                                                                                                                                            <form onSubmit={handleLogin}>


                                                                                                                                                                                                                                                                                                                                      <input

                                                                                                                                                                                                                                                                                                                                                  type="email"

                                                                                                                                                                                                                                                                                                                                                              placeholder="Email"

                                                                                                                                                                                                                                                                                                                                                                          value={email}

                                                                                                                                                                                                                                                                                                                                                                                      onChange={(e) =>
                                                                                                                                                                                                                                                                                                                                                                                                    setEmail(e.target.value)
                                                                                                                                                                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                                                                                                                                                                            required

                                                                                                                                                                                                                                                                                                                                                                                                                                      />



                                                                                                                                                                                                                                                                                                                                                                                                                                                <input

                                                                                                                                                                                                                                                                                                                                                                                                                                                            type="password"

                                                                                                                                                                                                                                                                                                                                                                                                                                                                        placeholder="Password"

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    value={password}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                onChange={(e) =>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              setPassword(e.target.value)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          }

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