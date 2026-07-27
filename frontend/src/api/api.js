const API_URL = "http://localhost:5000";


export async function registerUser(userData) {

  const response = await fetch(
      `${API_URL}/api/auth/register`,
          {
                method: "POST",

                      headers: {
                              "Content-Type": "application/json"
                                    },

                                          body: JSON.stringify(userData)
                                              }
                                                );


                                                  return response.json();

                                                  }



                                                  export async function loginUser(userData) {


                                                    const response = await fetch(
                                                        `${API_URL}/api/auth/login`,
                                                            {
                                                                  method: "POST",

                                                                        headers: {
                                                                                "Content-Type": "application/json"
                                                                                      },

                                                                                            body: JSON.stringify(userData)
                                                                                                }
                                                                                                  );


                                                                                                    return response.json();

                                                                                                    }



                                                                                                    export async function analyzeIdea(idea) {


                                                                                                      const response = await fetch(
                                                                                                          `${API_URL}/api/ai/analyze`,
                                                                                                              {

                                                                                                                    method: "POST",

                                                                                                                          headers: {
                                                                                                                                  "Content-Type": "application/json"
                                                                                                                                        },


                                                                                                                                              body: JSON.stringify({
                                                                                                                                                      idea
                                                                                                                                                            })

                                                                                                                                                                }
                                                                                                                                                                  );


                                                                                                                                                                    return response.json();

                                                                                                                                                                    }