import "../Styles/components/Settings.scss";
function Setting() {
  return (
    <div className="Settings">
      <div className="theme-toggler">
        <div className="theme-buttons">
          <div className="light-theme-btn">
            <i className="bi bi-sun"></i>
          </div>
          <div className="dark-theme-btn active">
            <i className="bi bi-moon"></i>
          </div>
        </div>
      </div>
      <div className="setting-btn">
          <i className="bi bi-gear"></i>
      </div>
    </div>
  )
}

export default Setting;