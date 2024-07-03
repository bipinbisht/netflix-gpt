import React from 'react'

const TitleContainer = ({ title, summary }) => {
  return (
    <div className="pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="font-bold text-4xl">{title}</h1>
      <p className="text-lg w-1/2  py-6">{summary}</p>
      <div className="">
        <button className="bg-white text-black px-12 p-4 rounded-lg text-xl hover:opacity-80">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white px-12 p-4 rounded-lg text-xl mx-2 bg-opacity-50">
          ℹ️ More Info
        </button>
      </div>
    </div>
  )
}

export default TitleContainer
