import React from 'react'
import Banner from '../Components/Banner'
import MainCardGallery from '../Components/CardINfrastructure/MainCardGallery'


const Gallery = () => {
  return (
    
    <div>
      <div>
          <Banner title="Gallery"/>
        </div>
      <h1 className="sm:text-center font-bold sm:text-5xl text-2xl text-center pt-6 text-primary"> Event Gallery</h1>
      <div className="p-10 rounded-3xl "> <MainCardGallery/></div>
        
    </div>
  )
}

export default Gallery