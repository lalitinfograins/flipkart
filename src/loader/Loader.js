import React from 'react'
import ReactLoading from "https://cdn.skypack.dev/react-loading@2.0.3";
const Loader = () => {
  return (
    <>
    <ReactLoading className={"loder_icons"}
          type={"bars"}
          color={"#ff745c"}
          position={"center"}
          height={100}
          width={100}
        />
    </>
  )
}

export default Loader