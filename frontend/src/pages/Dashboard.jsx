import { useEffect, useState } from "react";


function Dashboard() {


  const [user, setUser] = useState(null);



    useEffect(() => {


        const savedUser = localStorage.getItem("user");


            if (savedUser) {

                  setUser(
                          JSON.parse(savedUser)
                                );

                                    }


                                      }, []);



                                        return (

                                            <div className="dashboard-page">


                                                  <div className="dashboard-card">


                                                          <h1>
                                                                    RiyadNova AI Dashboard
                                                                            </h1>



                                                                                    {
                                                                                              user ? (

                                                                                                          <>

                                                                                                                        <h2>
                                                                                                                                        Welcome {user.name}
                                                                                                                                                      </h2>


                                                                                                                                                                    <p>
                                                                                                                                                                                    Email: {user.email}
                                                                                                                                                                                                  </p>


                                                                                                                                                                                                              </>

                                                                                                                                                                                                                        ) : (

                                                                                                                                                                                                                                    <p>
                                                                                                                                                                                                                                                  Please login first
                                                                                                                                                                                                                                                              </p>

                                                                                                                                                                                                                                                                        )
                                                                                                                                                                                                                                                                                }



                                                                                                                                                                                                                                                                                        <div className="dashboard-grid">


                                                                                                                                                                                                                                                                                                  <div className="feature-card">

                                                                                                                                                                                                                                                                                                              <h3>
                                                                                                                                                                                                                                                                                                                            AI Idea Analyzer
                                                                                                                                                                                                                                                                                                                                        </h3>

                                                                                                                                                                                                                                                                                                                                                    <p>
                                                                                                                                                                                                                                                                                                                                                                  Analyze startup ideas and business opportunities.
                                                                                                                                                                                                                                                                                                                                                                              </p>

                                                                                                                                                                                                                                                                                                                                                                                        </div>



                                                                                                                                                                                                                                                                                                                                                                                                  <div className="feature-card">

                                                                                                                                                                                                                                                                                                                                                                                                              <h3>
                                                                                                                                                                                                                                                                                                                                                                                                                            AI Business Tools
                                                                                                                                                                                                                                                                                                                                                                                                                                        </h3>

                                                                                                                                                                                                                                                                                                                                                                                                                                                    <p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                  Build and manage your AI projects.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </p>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>



                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  <div className="feature-card">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              <h3>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            Analytics
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </h3>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  Track your project performance.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </p>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </div>



                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </div>


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            );


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            }


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            export default Dashboard;