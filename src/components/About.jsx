import React from 'react'

const About = (props) => {
  // Determine background and text classes based on currentTheme
  const getBackgroundClass = () => {
    switch(props.currentTheme) {
      case 'blue': return 'bg-info';
      case 'brown': return 'bg-danger';
      case 'purple': return 'bg-secondary'; // or create a custom purple class
      case 'dark': return 'bg-primary';
      default: return 'bg-warning';
    }
  };

  const getTextClass = () => {
    return ['brown', 'purple', 'dark'].includes(props.currentTheme) 
      ? 'text-light' 
      : 'text-dark';
  };

  // Determine border color class
  const getBorderClass = () => {
    return ['blue', 'brown', 'purple', 'dark'].includes(props.currentTheme)
      ? 'border-white'
      : 'border-dark';
  };

  const backgroundClass = getBackgroundClass();
  const textClass = getTextClass();
  const borderClass = getBorderClass();

  return (
    <div className="container my-4">
      <div className={`accordion ${backgroundClass}`} id="accordionExample">
        {/* Accordion Item 1 */}
        <div className={`accordion-item ${backgroundClass} ${borderClass}`}>
          <h2 className={`accordion-header ${backgroundClass}`}>
            <button 
              className={`accordion-button ${backgroundClass} ${textClass}`}
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#collapseOne" 
              aria-expanded="true" 
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div 
            id="collapseOne" 
            className={`accordion-collapse collapse show ${backgroundClass}`} 
            data-bs-parent="#accordionExample"
          >
            <div className={`accordion-body ${backgroundClass} ${textClass}`}>
              <strong>This is the first item's accordion body.</strong> It is shown by default...
            </div>
          </div>
        </div>
        
        {/* Accordion Item 2 */}
        <div className={`accordion-item ${backgroundClass} ${borderClass}`}>
          <h2 className="accordion-header">
            <button 
              className={`accordion-button collapsed ${backgroundClass} ${textClass}`}
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#collapseTwo" 
              aria-expanded="false" 
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div 
            id="collapseTwo" 
            className="accordion-collapse collapse" 
            data-bs-parent="#accordionExample"
          >
            <div className={`accordion-body ${backgroundClass} ${textClass}`}>
              <strong>This is the second item's accordion body.</strong> It is hidden by default...
            </div>
          </div>
        </div>
        
        {/* Accordion Item 3 */}
        <div className={`accordion-item ${backgroundClass} ${borderClass}`}>
          <h2 className="accordion-header">
            <button 
              className={`accordion-button collapsed ${backgroundClass} ${textClass}`}
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#collapseThree" 
              aria-expanded="false" 
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div 
            id="collapseThree" 
            className="accordion-collapse collapse" 
            data-bs-parent="#accordionExample"
          >
            <div className={`accordion-body ${backgroundClass} ${textClass}`}>
              <strong>This is the third item's accordion body.</strong> It is hidden by default...
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;