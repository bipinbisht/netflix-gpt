import React from 'react'

const TitleContainer = ({ title, summary }) => {
  return (
    <div className=" px-6  pt-[20%] md:px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-2xl font-bold md:text-4xl">{title}</h1>
      <p className=" hidden md:inline-block  text-lg w-1/2  py-6">{summary}</p>
      <div className="my-4 md:my-0">
        <button className="bg-white text-black px-1 py-1  md:px-12 md:py-4 rounded-lg text-xl hover:opacity-80">
          ▶️ Play
        </button>
        <button className="  hidden md:inline-block bg-gray-500 text-white px-12 p-4 rounded-lg text-xl mx-2 bg-opacity-50 hover:opacity-60">
          ℹ️ More Info
        </button>
      </div>
    </div>
  )
}

export default TitleContainer
