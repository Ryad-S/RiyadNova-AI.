import {
          BrowserRouter,
            Routes,
              Route
              } from "react-router-dom";


              // Pages

              import Home from "../pages/Home";
              import Login from "../pages/Login";
              import Register from "../pages/Register";
              import Dashboard from "../pages/Dashboard";
              import IdeaAnalyzer from "../pages/IdeaAnalyzer";
              import Profile from "../pages/Profile";
              import Settings from "../pages/Settings";


              function AppRouter() {


                return (

                    <BrowserRouter>


                          <Routes>


                                  {/* الصفحة الرئيسية */}

                                          <Route

                                                    path="/"

                                                              element={<Home />}

                                                                      />



                                                                              {/* تسجيل الدخول */}

                                                                                      <Route

                                                                                                path="/login"

                                                                                                          element={<Login />}

                                                                                                                  />



                                                                                                                          {/* إنشاء حساب */}

                                                                                                                                  <Route

                                                                                                                                            path="/register"

                                                                                                                                                      element={<Register />}

                                                                                                                                                              />



                                                                                                                                                                      {/* لوحة التحكم */}

                                                                                                                                                                              <Route

                                                                                                                                                                                        path="/dashboard"

                                                                                                                                                                                                  element={<Dashboard />}

                                                                                                                                                                                                          />



                                                                                                                                                                                                                  {/* تحليل الأفكار بالذكاء الاصطناعي */}

                                                                                                                                                                                                                          <Route

                                                                                                                                                                                                                                    path="/idea-analyzer"

                                                                                                                                                                                                                                              element={<IdeaAnalyzer />}

                                                                                                                                                                                                                                                      />



                                                                                                                                                                                                                                                              {/* الملف الشخصي */}

                                                                                                                                                                                                                                                                      <Route

                                                                                                                                                                                                                                                                                path="/profile"

                                                                                                                                                                                                                                                                                          element={<Profile />}

                                                                                                                                                                                                                                                                                                  />



                                                                                                                                                                                                                                                                                                          {/* الإعدادات */}

                                                                                                                                                                                                                                                                                                                  <Route

                                                                                                                                                                                                                                                                                                                            path="/settings"

                                                                                                                                                                                                                                                                                                                                      element={<Settings />}

                                                                                                                                                                                                                                                                                                                                              />



                                                                                                                                                                                                                                                                                                                                                      {/* أي رابط غير موجود */}

                                                                                                                                                                                                                                                                                                                                                              <Route

                                                                                                                                                                                                                                                                                                                                                                        path="*"

                                                                                                                                                                                                                                                                                                                                                                                  element={<Home />}

                                                                                                                                                                                                                                                                                                                                                                                          />


                                                                                                                                                                                                                                                                                                                                                                                                </Routes>


                                                                                                                                                                                                                                                                                                                                                                                                    </BrowserRouter>

                                                                                                                                                                                                                                                                                                                                                                                                      );


                                                                                                                                                                                                                                                                                                                                                                                                      }


                                                                                                                                                                                                                                                                                                                                                                                                      export default AppRouter;