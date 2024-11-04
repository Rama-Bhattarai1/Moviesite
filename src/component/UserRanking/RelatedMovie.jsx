import React from 'react'
const RelatedMovie = ({AllMovieData}) => {
    if (!Array.isArray(AllMovieData)) {
        // Handle the case where AllMovieData is not an array
        return <div>No related movies available</div>;
      }
  return (
   
    <div className=' w-[500px] ml-10'>
            <h1 className='flex text-xl font-bold text-white mt-10 mb-10 '>Related Movie</h1>
            <div className="grid grid-cols-4 gap-2">
                {AllMovieData.map((item, index) => (
                    <div key={index} className="">
                        <div className="relative group">
                            <img src={item.img} alt="" className="w-40 h-40 rounded-lg border border-teritory overflow-hidden transition transform hover:scale-95" />
                            <p className="absolute top-2 left-24 text-primary border bg-black rounded-lg p-1 text-[10px] font-bold opacity-100 group-hover:opacity-0">HD</p>
                        </div>
                        <div className="font-bold text-white hover:text-primary mt-4">{item.name}</div>
                        <div className="font-bold text-white hover:text-teritory mt-4 mb-4">{item.year}</div>
                    </div>
                ))}
            </div>
        </div>
   
  )
}

export default RelatedMovie

