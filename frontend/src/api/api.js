const API_URL = "http://localhost:5000";


async function request(endpoint, options = {}) {

  try {

      const response = await fetch(
            `${API_URL}${endpoint}`,
                  {
                          ...options,
                                  headers: {
                                            "Content-Type": "application/json",
                                                      ...(options.headers || {})
                                                              }
                                                                    }
                                                                        );


                                                                            const data = await response.json();

                                                                                return data;


                                                                                  } catch (error) {

                                                                                      console.error(
                                                                                            "API Connection Error:",
                                                                                                  error
                                                                                                      );


                                                                                                          return {
                                                                                                                status: "error",
                                                                                                                      message: "Cannot connect to backend server"
                                                                                                                          };

                                                                                                                            }

                                                                                                                            }



                                                                                                                            export function registerUser(userData) {

                                                                                                                              return request(
                                                                                                                                  "/api/auth/register",
                                                                                                                                      {
                                                                                                                                            method: "POST",
                                                                                                                                                  body: JSON.stringify(userData)
                                                                                                                                                      }
                                                                                                                                                        );

                                                                                                                                                        }



                                                                                                                                                        export function loginUser(userData) {

                                                                                                                                                          return request(
                                                                                                                                                              "/api/auth/login",
                                                                                                                                                                  {
                                                                                                                                                                        method: "POST",
                                                                                                                                                                              body: JSON.stringify(userData)
                                                                                                                                                                                  }
                                                                                                                                                                                    );

                                                                                                                                                                                    }



                                                                                                                                                                                    export function analyzeIdea(idea) {

                                                                                                                                                                                      return request(
                                                                                                                                                                                          "/api/ai/analyze",
                                                                                                                                                                                              {
                                                                                                                                                                                                    method: "POST",
                                                                                                                                                                                                          body: JSON.stringify({
                                                                                                                                                                                                                  idea
                                                                                                                                                                                                                        })
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                              );

                                                                                                                                                                                                                              }