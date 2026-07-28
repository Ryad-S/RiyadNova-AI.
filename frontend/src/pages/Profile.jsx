import { Link } from "react-router-dom";

function Profile() {
  return (
      <div className="page">

            <div className="card">

                    <h1>👤 الملف الشخصي</h1>

                            <div className="profile-box">

                                      <div className="avatar">
                                                  RN
                                                            </div>

                                                                      <h2>رياض</h2>

                                                                                <p>riyad@example.com</p>

                                                                                          <hr />

                                                                                                    <div className="profile-info">

                                                                                                                <div>
                                                                                                                              <strong>الخطة</strong>
                                                                                                                                            <span>Premium</span>
                                                                                                                                                        </div>

                                                                                                                                                                    <div>
                                                                                                                                                                                  <strong>الأفكار المحللة</strong>
                                                                                                                                                                                                <span>0</span>
                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                        <div>
                                                                                                                                                                                                                                      <strong>تاريخ الإنشاء</strong>
                                                                                                                                                                                                                                                    <span>2026</span>
                                                                                                                                                                                                                                                                </div>

                                                                                                                                                                                                                                                                          </div>

                                                                                                                                                                                                                                                                                    <br />

                                                                                                                                                                                                                                                                                              <Link to="/settings">
                                                                                                                                                                                                                                                                                                          <button className="primary-btn">
                                                                                                                                                                                                                                                                                                                        ⚙️ الإعدادات
                                                                                                                                                                                                                                                                                                                                    </button>
                                                                                                                                                                                                                                                                                                                                              </Link>

                                                                                                                                                                                                                                                                                                                                                        <br /><br />

                                                                                                                                                                                                                                                                                                                                                                  <Link to="/dashboard">
                                                                                                                                                                                                                                                                                                                                                                              <button className="secondary-btn">
                                                                                                                                                                                                                                                                                                                                                                                            ⬅ العودة للوحة التحكم
                                                                                                                                                                                                                                                                                                                                                                                                        </button>
                                                                                                                                                                                                                                                                                                                                                                                                                  </Link>

                                                                                                                                                                                                                                                                                                                                                                                                                          </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                                                                                                                                                                                                      export default Profile;