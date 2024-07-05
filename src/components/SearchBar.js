import React, { useRef } from 'react'
import langConstant from '../utils/langConstant'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTION } from '../utils/constant'
import { addSearchMovie } from '../utils/searchSlice'
const SearchBar = () => {
  const searchText = useRef(null)
  const dispatch = useDispatch()

  const handleGptSearch = async () => {
    // console.log(searchText.current.value)
    const data = await fetch(
      'https://api.themoviedb.org/3/search/movie?query=' +
        searchText.current.value,
      API_OPTION
    )
    const json = await data.json()
    // console.log(json.results)
    dispatch(addSearchMovie(json.results))
  }
  const currentLang = useSelector((store) => store?.config?.lang)
  return (
    <div className=" pt-[45%] md:pt-[10%]  flex justify-center">
      <form
        className="w-full  md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={langConstant[currentLang]?.searchPlaceholder}
        ></input>
        <button
          className="col-span-3 m-4 md:py-2  md:px-4 bg-red-700 text-white rounded-lg mx-3"
          onClick={handleGptSearch}
        >
          {langConstant[currentLang].search}
        </button>
      </form>
    </div>
  )
}

export default SearchBar
