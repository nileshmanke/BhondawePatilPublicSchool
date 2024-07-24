import React from 'react'
import Banner from '../Components/Banner'

import Form from '../Components/Form'

const Admission = () => {
  return (
    <div>
        <div>
          <Banner title="Admisstion"/>
        </div>
        <h1 className="text-center font-bold text-primary sm:text-4xl text-2xl p-2 sm:p-10">School Virtual Tour</h1>
        <div className="flex justify-center ">
        <iframe width="760" height="315" src="https://www.youtube.com/embed/cuIFuOVG9eA?si=6-4h7OjH9Ozr7UMf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        <div className="text-center font-bold text-primary sm:text-4xl text-2xl p-2 sm:p-10" >
        <Form/>
        </div>
    </div>
  )
}

export default Admission