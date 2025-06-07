import { Link } from 'react-router-dom';

function Navbar(props) {
  // Determine navbar background
  const getNavBackground = () => {
    switch(props.currentTheme) {
      case 'blue': return 'bg-info';
      case 'brown': return 'bg-danger';
      case 'purple': return 'bg-secondary';
      case 'dark': return 'bg-success';
      default: return 'bg-light';
    }
  };

  // Determine text color
  const getTextColor = () => {
    return ['blue','brown', 'purple', 'dark'].includes(props.currentTheme) 
      ? 'text-light' 
      : 'text-dark';
  };

  return (
    <nav className={`navbar navbar-expand-lg ${getNavBackground()} ${getTextColor()}`}>
      <div className="container-fluid">
        <Link className={`navbar-brand ${getTextColor()}`} to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls='navbarSupportedContent' aria-expanded="false" aria-label="Toggle navigation">
          <span className={`navbar-toggler-icon ${getNavBackground()}`}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link active ${getTextColor()}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link active ${getTextColor()}`} to="/About">{props.aboutText}</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link active ${getTextColor()}`} to="/TextForm">Text Form</Link>
            </li>
          </ul>
          
          {/* Simplified theme toggles structure */}
          <div className="d-flex flex-wrap align-items-center">
            <div className="form-check form-switch me-3">
              <input 
                className="form-check-input" 
                type="checkbox" 
                checked={props.currentTheme === 'dark'}
                onChange={() => props.toggleTheme(props.currentTheme === 'dark' ? 'light' : 'dark')}
                role="switch" 
                id="darkModeSwitch" 
              />
              <label className="form-check-label" htmlFor="darkModeSwitch" style={{color: props.currentTheme === 'light' ? 'black' : 'white'}}>
                {props.currentTheme === 'dark' ? 'Disable Dark Mode' : 'Enable Dark Mode'}
              </label>
            </div>
            
            <div className="form-check form-switch me-3">
              <input 
                className="form-check-input" 
                type="checkbox" 
                checked={props.currentTheme === 'blue'}
                onChange={() => props.toggleTheme(props.currentTheme === 'blue' ? 'light' : 'blue')}
                role="switch" 
                id="blueThemeSwitch" 
              />
              <label className="form-check-label" htmlFor="blueThemeSwitch" style={{color: props.currentTheme === 'light' ? 'black' : 'white'}}>
                {props.currentTheme === 'blue' ? 'Disable Blue Theme' : 'Enable Blue Theme'}
              </label>
            </div>
            
            <div className="form-check form-switch me-3">
              <input 
                className="form-check-input" 
                type="checkbox" 
                checked={props.currentTheme === 'brown'}
                onChange={() => props.toggleTheme(props.currentTheme === 'brown' ? 'light' : 'brown')}
                role="switch" 
                id="brownThemeSwitch" 
              />
              <label className="form-check-label" htmlFor="brownThemeSwitch" style={{color: props.currentTheme === 'light' ? 'black' : 'white'}}>
                {props.currentTheme === 'brown' ? 'Disable Brown Theme' : 'Enable Brown Theme'}
              </label>
            </div>
            
            <div className="form-check form-switch">
              <input 
                className="form-check-input" 
                type="checkbox" 
                checked={props.currentTheme === 'purple'}
                onChange={() => props.toggleTheme(props.currentTheme === 'purple' ? 'light' : 'purple')}
                role="switch" 
                id="purpleThemeSwitch" 
              />
              <label className="form-check-label" htmlFor="purpleThemeSwitch" style={{color: props.currentTheme === 'light' ? 'black' : 'white'}}>
                {props.currentTheme === 'purple' ? 'Disable Purple Theme' : 'Enable Purple Theme'}
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;