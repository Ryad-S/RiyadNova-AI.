import { Link } from "react-router-dom";

function Settings() {
  return (
      <div className="page">

            <div className="card">

                    <h1>⚙️ الإعدادات</h1>

                            <div className="settings-container">

                                      <div className="setting-item">
                                                  <h3>🌙 المظهر</h3>
                                                              <p>الوضع الداكن مفعل.</p>
                                                                        </div>

                                                                                  <div className="setting-item">
                                                                                              <h3>🔔 الإشعارات</h3>
                                                                                                          <p>سيتم إضافة إعدادات الإشعارات لاحقًا.</p>
                                                                                                                    </div>

                                                                                                                              <div className="setting-item">
                                                                                                                                          <h3>🔒 الأمان</h3>
                                                                                                                                                      <p>تغيير كلمة المرور وربط التحقق الثنائي قريبًا.</p>
                                                                                                                                                                </div>

                                                                                                                                                                          <div className="setting-item">
                                                                                                                                                                                      <h3>🌐 اللغة</h3>
                                                                                                                                                                                                  <p>العربية (افتراضي)</p>
                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                      <br />

                                                                                                                                                                                                                                <Link to="/profile">
                                                                                                                                                                                                                                            <button className="primary-btn">
                                                                                                                                                                                                                                                          👤 الرجوع للملف الشخصي
                                                                                                                                                                                                                                                                      </button>
                                                                                                                                                                                                                                                                                </Link>

                                                                                                                                                                                                                                                                                          <br /><br />

                                                                                                                                                                                                                                                                                                    <Link to="/dashboard">
                                                                                                                                                                                                                                                                                                                <button className="secondary-btn">
                                                                                                                                                                                                                                                                                                                              🏠 لوحة التحكم
                                                                                                                                                                                                                                                                                                                                          </button>
                                                                                                                                                                                                                                                                                                                                                    </Link>

                                                                                                                                                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                                                                                                                                                                  </div>

                                                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                                                                        export default Settings;