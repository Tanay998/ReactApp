import React from 'react'

const Home = (props) => {
  const bgClass = props.currentTheme === 'blue' ? 'bg-info text-dark' : 
                 props.currentTheme === 'brown' ? 'bg-danger text-white' :
                 props.currentTheme === 'purple' ? 'bg-secondary text-white' :
                 props.currentTheme === 'dark' ? 'bg-success text-white' :
                 'bg-warning text-dark';
  return (
    <>
      <div className={`container ${bgClass} text-white p-4 rounded`}>
        <h1 className="my-4">Welcome to TextUtils</h1>
        <p className="lead">
          TextUtils is a versatile text manipulation tool that allows you to 
          perform various operations on your text. Whether you want to convert 
          text to uppercase, lowercase, or capitalize each word, TextUtils has 
          got you covered. You can also reverse the case of your text and remove 
          extra spaces with ease.
        </p>
        <p>
          Explore the features and enhance your text processing experience!
        </p>
      </div>
    </>
  )
}

export default Home
