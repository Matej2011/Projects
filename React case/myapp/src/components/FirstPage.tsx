import React, { useState } from "react";

const FirstPage: React.FC = () => {
  const [isSidebarActive, setIsSidebarActive] = useState<boolean>(false);

  const toggleSidebar = () => {
    console.log("Toggling sidebar");
    setIsSidebarActive(!isSidebarActive);
  };

  console.log("isSidebarActive:", isSidebarActive);

  return (
    <main role="main" className="h-100">
      <div className="wrapper">
        <nav id="sidebar" className={isSidebarActive ? "active" : ""}>
          <div className="sidebar-header">
            <h3 className="h3">East Gate Mall</h3>
            <h4>SEG Loyalty</h4>
          </div>

          <ul className="list-unstyled components">
            <li>
              <a href="/">Invalidate Voucher</a>
            </li>

            <li>
              <a href="/logout/">Logout</a>
            </li>
            <li>
              <a href="/password_change/">Change Password</a>
            </li>
          </ul>
        </nav>

        <div id="content">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button
                type="button"
                id="sidebarCollapse"
                className="btn"
                onClick={toggleSidebar}
              >
                <i className="fas fa-align-left"></i>
                <span>MENU</span>
              </button>
            </div>
          </nav>

          <div className="text-center mb-4">
            <img
              src="/static/loyalty/img/logo.png"
              className="img-fluid"
              alt="SEG Loyalty"
            />
          </div>

          <div className="container">
            <h1 className="text-center mb-4">Invalidate a Voucher</h1>
            <form method="post">
              <input
                type="hidden"
                name="csrfmiddlewaretoken"
                value="7W1ozP4Im2wcdSmbPOXMvAuiP4A4amBIvMSf6uURQUeQi3UMed72cLldmBDq79Ix"
              />
              <div id="div_id_voucher_code" className="mb-3">
                <label
                  htmlFor="id_voucher_code"
                  className="form-label requiredField"
                >
                  Voucher code<span className="asteriskField">*</span>
                </label>
                <input
                  type="text"
                  name="voucher_code"
                  className="textinput form-control"
                  id="id_voucher_code"
                />
              </div>
              <div id="div_id_user_code" className="mb-3">
                <label
                  htmlFor="id_user_code"
                  className="form-label requiredField"
                >
                  User code<span className="asteriskField">*</span>
                </label>
                <input
                  type="text"
                  name="user_code"
                  className="textinput form-control"
                  id="id_user_code"
                />
              </div>
              <div className="mb-3">
                <div className="">
                  <input
                    type="submit"
                    name="submit"
                    value="Submit"
                    className="btn btn-primary"
                    id="submit-id-submit"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FirstPage;
