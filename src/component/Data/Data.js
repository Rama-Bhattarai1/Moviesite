import React from 'react'
import * as Images from '../../assest/images';

import { FaPlay } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
export const MovieData = [
    {
      id: 1,
      img: Images.Image_2,
      name: 'Next Goal Wins',
      year: 2023,
      category:"featured",
      genres: "Action",
       sort: "Latest",
      description: (
        <>
       
          <h1 class="3xl">Next Goal Wins</h1>
          <div class="flex gap-2">
            <div class="flex gap-2">
          <span><FaStar className='w-4 text-primary mt-1 '/></span><span>6.374</span>
          </div>
          <span>2023</span><span>2h38m</span><span class=" text-primary border border-2 rounded-lg ">1080p</span>
          </div>
    <div className='scroll'>
          <p class=" text-start mb-2 w-[170px] h-20  text-white  ">Lorem ipsum dolor sitr.<br/> Animi harum vitae facilis?<br/> Ex est cupiditate iusto ab .</p>
          </div>
          <div className='grid grid-cols-1 mb-2'>
          <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
          </div>
          <div class="flex gap-2 ">
          <div class="flex  rounded-lg p-2 h-10 w-40 pl-4 bg-ston/70 gap-1 text-white ">
  <FaPlay className="bg-primary text-black rounded-full p-1 mt-1"/>
  <button>Watch Movie</button>
  </div> 
  <FaRegHeart className="bg-red   rounded-lg  h-10 w-10 p-2 "/>
  </div>
  
        </>
      ),
      searchdes: (
        <>
       
          <h1 class="3xl">Next Goal Wins</h1>
          <div class="flex gap-2">
            <div class="flex gap-2">
          <span><FaStar className='w-4 text-primary mt-1 '/></span><span>6.374</span>
          </div>
          <span>2023</span><span>2h38m</span><span class=" bg-gray-500 text-primary border border-2 rounded-lg ">1080p</span>
          </div>
          <p class=" text-start mb-2  h-20  text-white  ">Dutch coach Thomas Rongen attempts the nearly impossible task of turning the American Samoa soccer team from perennial losers into winners.</p>
          <div className='grid grid-cols-1 mb-2'>
          <span>Generes Action,</span><span>Director Action,</span><span>castAmanda Chang, Andrea Elizabeth Sikkink, Angus Sampson, Arlo Sarinas, Armani Makaiwa, Ati Ripley Scanlan,</span>
          </div>
  
        </>
      ),
    },
    {
      id: 2,
      img: Images.Image_3,
      name: 'The Boys In the Boot',
      year: 2023,
      category:"featured",
      genres: "Action",
      sort: "Latest",
      description: (
        <>
       
          <h1 class="3xl">The Boys In the Boot</h1>
          <div class="flex gap-2">
            <div class="flex gap-2">
            <span><FaStar className='w-4 text-primary  mt-1'/></span><span>6.374</span>
          </div>
          <span>2023</span><span>2h38m</span><span class=" text-primary border border-2 rounded-lg ">1080p</span>
          </div>
          <div className='scroll'>
          <p class=" text-start mb-2 w-[170px] h-20  text-white  ">Lorem ipsum dolor sitr.<br/> Animi harum vitae facilis?<br/> Ex est cupiditate iusto ab .</p>
          </div>
          <div className='grid grid-cols-1 mb-2'>
          <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
          </div>
          <div class="flex gap-2 ">
          <div class="flex  rounded-lg p-2 h-10 w-40 pl-4 bg-ston/70 gap-1 text-white font-bold">
  <FaPlay className="bg-primary text-black rounded-full p-1 mt-1"/>
  <button>Watch Movie</button>
  </div> 
  <FaRegHeart className="bg-red   rounded-lg  h-10 w-10 p-2 "/>
  </div>
  
        </>
      ),
    },
    {
      id: 3,
      img: Images.Image_4,
      name: 'justic League Crisis on Infinite Earths part...',
      year: 2023,
      category: 'latest releases',
      genres: "drama",
      sort: "Latest",
      description: (
        <>
          <h1 class="3xl">justic League Crisis on Infinite Earths part...</h1>
          <div class="flex gap-2">
            <div class="flex gap-2">
            <span><FaStar className='w-4 text-primary  mt-1'/></span><span>6.374</span>
          </div>
          <span>2023</span><span>2h38m</span><span class=" text-primary border border-2 rounded-lg ">1080p</span>
          </div>
          <div className='scroll'>
          <p class=" text-start mb-2 w-[170px] h-20  text-white  ">Lorem ipsum dolor sitr.<br/> Animi harum vitae facilis?<br/> Ex est cupiditate iusto ab .</p>
          </div>
          <div className='grid grid-cols-1 mb-2'>
          
          <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
          </div>
          <div class="flex gap-2 ">
          <div class="flex  rounded-lg p-2 h-10 w-40 pl-4 bg-ston/70 gap-1 text-white font-bold">
  <FaPlay className="bg-primary text-black rounded-full p-1 mt-1"/>
  <button>Watch Movie</button>
  </div> 
  <FaRegHeart className="bg-red   rounded-lg  h-10 w-10 p-2 "/>
  </div>
  
        </>
      ),
    },
    {
      id:4,
      img:Images.Image_5,
      name:"The Color Purple",
      year:2023,
      category: 'latest releases',
      genres: "drama",
      sort: "Latest",
      description: (
        <>
          <h1 class="3xl">The Color Purple</h1>
          <div class="flex gap-2">
            <div class="flex gap-2">
            <span><FaStar className='w-4 text-primary  mt-1'/></span><span>6.374</span>
          </div>
          <span>2023</span><span>2h38m</span><span class=" text-primary border border-2 rounded-lg ">1080p</span>
          </div>
          <div className='scroll'>
          <p class=" text-start mb-2 w-[170px] h-20  text-white  ">Lorem ipsum dolor sitr.<br/> Animi harum vitae facilis?<br/> Ex est cupiditate iusto ab .</p>
          </div>
          <div className='grid grid-cols-1 mb-2'>
          
          <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
          </div>
          <div class="flex gap-2 ">
          <div class="flex  rounded-lg p-2 h-10 w-40 pl-4 bg-ston/70 gap-1 text-white font-bold">
  <FaPlay className="bg-primary text-black rounded-full p-1 mt-1"/>
  <button>Watch Movie</button>
  </div> 
  <FaRegHeart className="bg-red   rounded-lg  h-10 w-10 p-2 "/>
  </div>
  
        </>
      ),
      },
      {
      id:5,
      img:Images.Image_6,
      name:"Lift",
      year:2023,
      category: 'mostpopular',
      genres: "drama",
      sort: "popular",
      description: (
        <>
          <h1 class="3xl">Lift</h1>
          <div class="flex gap-2">
            <div class="flex gap-2">
            <span><FaStar className='w-4 text-primary  mt-1'/></span><span>6.374</span>
          </div>
          <span>2023</span><span>2h38m</span><span class=" text-primary border border-2 rounded-lg ">1080p</span>
          </div>
          <div className='scroll'>
          <p class=" text-start mb-2 w-[170px] h-20  text-white  ">Lorem ipsum dolor sitr.<br/> Animi harum vitae facilis?<br/> Ex est cupiditate iusto ab .</p>
          </div>
          <div className='grid grid-cols-1 mb-2'>
          
          <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
          </div>
          <div class="flex gap-2 ">
          <div class="flex  rounded-lg p-2 h-10 w-40 pl-4 bg-ston/70 gap-1 text-white font-bold">
  <FaPlay className="bg-primary text-black rounded-full p-1 mt-1"/>
  <button>Watch Movie</button>
  </div> 
  <FaRegHeart className="bg-red   rounded-lg  h-10 w-10 p-2 "/>
  </div>
  
        </>
      ),
      },
      {
          id:6,
          img:Images.Image_7,
          name:"Tiger3",
          year:2023,
          category: 'mostpopular',
          genres: "drama",
          sort: "popular",
          description: (
            <>
              <h1 class="3xl">Tiger3</h1>
              <div class="flex gap-2">
                <div class="flex gap-2">
                <span><FaStar className='w-4 text-primary  mt-1'/></span><span>6.374</span>
              </div>
              <span>2023</span><span>2h38m</span><span class=" text-primary border border-2 rounded-lg ">1080p</span>
              </div>
              <div className='scroll'>
          <p class=" text-start mb-2 w-[170px] h-20  text-white  ">Lorem ipsum dolor sitr.<br/> Animi harum vitae facilis?<br/> Ex est cupiditate iusto ab .</p>
          </div>
              <div className='grid grid-cols-1 mb-2'>
              
              <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
              </div>
              <div class="flex gap-2 ">
          <div class="flex  rounded-lg p-2 h-10 w-40 pl-4 bg-ston/70 gap-1 text-white font-bold">
  <FaPlay className="bg-primary text-black rounded-full p-1 mt-1"/>
  <button>Watch Movie</button>
  </div> 
  <FaRegHeart className="bg-red   rounded-lg  h-10 w-10 p-2 "/>
  </div>
      
            </>
          ),
          },
          {
              id:7,
              img:Images.Image_8,
              name:"Napoleon",
              year:2023,
              category: 'mostpopular',
              genres: "Advanture",
               sort: "popular",
              description: (
                <>
                  <h1 class="3xl">Napoleon</h1>
                  <div class="flex gap-2">
                    <div class="flex gap-2">
                    <span><FaStar className='w-4 text-primary  mt-1'/></span><span>6.374</span>
                  </div>
                  <span>2023</span><span>2h38m</span><span class=" text-primary border border-2 rounded-lg ">1080p</span>
                  </div>
                  <div className='scroll'>
          <p class=" text-start mb-2 w-[170px] h-20  text-white  ">Lorem ipsum dolor sitr.<br/> Animi harum vitae facilis?<br/> Ex est cupiditate iusto ab .</p>
          </div>
                  <div className='grid grid-cols-1 mb-2'>
                  
                  <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
                  </div>
                  <div class="flex gap-2 ">
          <div class="flex  rounded-lg p-2 h-10 w-40 pl-4 bg-ston/70 gap-1 text-white font-bold">
  <FaPlay className="bg-primary text-black rounded-full p-1 mt-1"/>
  <button>Watch Movie</button>
  </div> 
  <FaRegHeart className="bg-red   rounded-lg  h-10 w-10 p-2 "/>
  </div>
          
                </>
              ),
              },
              {
                id:7,
                img:Images.Image_40,
                name:"Napoleon",
                year:2023,
                category: 'mostpopular',
                genres: "Advanture",
                 sort: "popular",
                description: (
                  <>
                    <h1 class="3xl">Napoleon</h1>
                    <div class="flex gap-2">
                      <div class="flex gap-2">
                      <span><FaStar className='w-4 text-primary  mt-1'/></span><span>6.374</span>
                    </div>
                    <span>2023</span><span>2h38m</span><span class=" text-primary border border-2 rounded-lg ">1080p</span>
                    </div>
                    <div className='scroll'>
            <p class=" text-start mb-2 w-[170px] h-20  text-white  ">Lorem ipsum dolor sitr.<br/> Animi harum vitae facilis?<br/> Ex est cupiditate iusto ab .</p>
            </div>
                    <div className='grid grid-cols-1 mb-2'>
                    
                    <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
                    </div>
                    <div class="flex gap-2 ">
            <div class="flex  rounded-lg p-2 h-10 w-40 pl-4 bg-ston/70 gap-1 text-white font-bold">
    <FaPlay className="bg-primary text-black rounded-full p-1 mt-1"/>
    <button>Watch Movie</button>
    </div> 
    <FaRegHeart className="bg-red   rounded-lg  h-10 w-10 p-2 "/>
    </div>
            
                  </>
                ),
                },
                {
                  id:8,
                  img:Images.Image_41,
                  name:"Napoleon",
                  year:2023,
                  category: 'mostpopular',
                  genres: "Advanture",
                   sort: "popular",
                  description: (
                    <>
                      <h1 class="3xl">Napoleon</h1>
                      <div class="flex gap-2">
                        <div class="flex gap-2">
                        <span><FaStar className='w-4 text-primary  mt-1'/></span><span>6.374</span>
                      </div>
                      <span>2023</span><span>2h38m</span><span class=" text-primary border border-2 rounded-lg ">1080p</span>
                      </div>
                      <div className='scroll'>
              <p class=" text-start mb-2 w-[170px] h-20  text-white  ">Lorem ipsum dolor sitr.<br/> Animi harum vitae facilis?<br/> Ex est cupiditate iusto ab .</p>
              </div>
                      <div className='grid grid-cols-1 mb-2'>
                      
                      <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
                      </div>
                      <div class="flex gap-2 ">
              <div class="flex  rounded-lg p-2 h-10 w-40 pl-4 bg-ston/70 gap-1 text-white font-bold">
      <FaPlay className="bg-primary text-black rounded-full p-1 mt-1"/>
      <button>Watch Movie</button>
      </div> 
      <FaRegHeart className="bg-red   rounded-lg  h-10 w-10 p-2 "/>
      </div>
              
                    </>
                  ),
                  },
                  {
                    id:9,
                    img:Images.Image_42,
                    name:"Napoleon",
                    year:2023,
                    category: 'mostpopular',
                    genres: "Advanture",
                     sort: "popular",
                    description: (
                      <>
                        <h1 class="3xl">Napoleon</h1>
                        <div class="flex gap-2">
                          <div class="flex gap-2">
                          <span><FaStar className='w-4 text-primary  mt-1'/></span><span>6.374</span>
                        </div>
                        <span>2023</span><span>2h38m</span><span class=" text-primary border border-2 rounded-lg ">1080p</span>
                        </div>
                        <div className='scroll'>
                <p class=" text-start mb-2 w-[170px] h-20  text-white  ">Lorem ipsum dolor sitr.<br/> Animi harum vitae facilis?<br/> Ex est cupiditate iusto ab .</p>
                </div>
                        <div className='grid grid-cols-1 mb-2'>
                        
                        <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
                        </div>
                        <div class="flex gap-2 ">
                <div class="flex  rounded-lg p-2 h-10 w-40 pl-4 bg-ston/70 gap-1 text-white font-bold">
        <FaPlay className="bg-primary text-black rounded-full p-1 mt-1"/>
        <button>Watch Movie</button>
        </div> 
        <FaRegHeart className="bg-red   rounded-lg  h-10 w-10 p-2 "/>
        </div>
                
                      </>
                    ),
                    },
                    {
                      id:10,
                      img:Images.Image_43,
                      name:"Napoleon",
                      year:2023,
                      category: 'mostpopular',
                      genres: "Advanture",
                       sort: "popular",
                      description: (
                        <>
                          <h1 class="3xl">Napoleon</h1>
                          <div class="flex gap-2">
                            <div class="flex gap-2">
                            <span><FaStar className='w-4 text-primary  mt-1'/></span><span>6.374</span>
                          </div>
                          <span>2023</span><span>2h38m</span><span class=" text-primary border border-2 rounded-lg ">1080p</span>
                          </div>
                          <div className='scroll'>
                  <p class=" text-start mb-2 w-[170px] h-20  text-white  ">Lorem ipsum dolor sitr.<br/> Animi harum vitae facilis?<br/> Ex est cupiditate iusto ab .</p>
                  </div>
                          <div className='grid grid-cols-1 mb-2'>
                          
                          <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
                          </div>
                          <div class="flex gap-2 ">
                  <div class="flex  rounded-lg p-2 h-10 w-40 pl-4 bg-ston/70 gap-1 text-white font-bold">
          <FaPlay className="bg-primary text-black rounded-full p-1 mt-1"/>
          <button>Watch Movie</button>
          </div> 
          <FaRegHeart className="bg-red   rounded-lg  h-10 w-10 p-2 "/>
          </div>
                  
                        </>
                      ),
                      },
                      {
                        id:11,
                        img:Images.Image_44,
                        name:"Napoleon",
                        year:2023,
                        category: 'mostpopular',
                        genres: "Advanture",
                         sort: "popular",
                        description: (
                          <>
                            <h1 class="3xl">Napoleon</h1>
                            <div class="flex gap-2">
                              <div class="flex gap-2">
                              <span><FaStar className='w-4 text-primary  mt-1'/></span><span>6.374</span>
                            </div>
                            <span>2023</span><span>2h38m</span><span class=" text-primary border border-2 rounded-lg ">1080p</span>
                            </div>
                            <div className='scroll'>
                    <p class=" text-start mb-2 w-[170px] h-20  text-white  ">Lorem ipsum dolor sitr.<br/> Animi harum vitae facilis?<br/> Ex est cupiditate iusto ab .</p>
                    </div>
                            <div className='grid grid-cols-1 mb-2'>
                            
                            <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
                            </div>
                            <div class="flex gap-2 ">
                    <div class="flex  rounded-lg p-2 h-10 w-40 pl-4 bg-ston/70 gap-1 text-white font-bold">
            <FaPlay className="bg-primary text-black rounded-full p-1 mt-1"/>
            <button>Watch Movie</button>
            </div> 
            <FaRegHeart className="bg-red   rounded-lg  h-10 w-10 p-2 "/>
            </div>
                    
                          </>
                        ),
                        },
                        {
                          id:12,
                          img:Images.Image_45,
                          name:"Napoleon",
                          year:2023,
                          category: 'mostpopular',
                          genres: "Advanture",
                           sort: "popular",
                          description: (
                            <>
                              <h1 class="3xl">Napoleon</h1>
                              <div class="flex gap-2">
                                <div class="flex gap-2">
                                <span><FaStar className='w-4 text-primary  mt-1'/></span><span>6.374</span>
                              </div>
                              <span>2023</span><span>2h38m</span><span class=" text-primary border border-2 rounded-lg ">1080p</span>
                              </div>
                              <div className='scroll'>
                      <p class=" text-start mb-2 w-[170px] h-20  text-white  ">Lorem ipsum dolor sitr.<br/> Animi harum vitae facilis?<br/> Ex est cupiditate iusto ab .</p>
                      </div>
                              <div className='grid grid-cols-1 mb-2'>
                              
                              <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
                              </div>
                              <div class="flex gap-2 ">
                      <div class="flex  rounded-lg p-2 h-10 w-40 pl-4 bg-ston/70 gap-1 text-white font-bold">
              <FaPlay className="bg-primary text-black rounded-full p-1 mt-1"/>
              <button>Watch Movie</button>
              </div> 
              <FaRegHeart className="bg-red   rounded-lg  h-10 w-10 p-2 "/>
              </div>
                      
                            </>
                          ),
                          },
                          {
                            id:13,
                            img:Images.Image_46,
                            name:"Napoleon",
                            year:2023,
                            category: 'mostpopular',
                            genres: "Advanture",
                             sort: "popular",
                            description: (
                              <>
                                <h1 class="3xl">Napoleon</h1>
                                <div class="flex gap-2">
                                  <div class="flex gap-2">
                                  <span><FaStar className='w-4 text-primary  mt-1'/></span><span>6.374</span>
                                </div>
                                <span>2023</span><span>2h38m</span><span class=" text-primary border border-2 rounded-lg ">1080p</span>
                                </div>
                                <div className='scroll'>
                        <p class=" text-start mb-2 w-[170px] h-20  text-white  ">Lorem ipsum dolor sitr.<br/> Animi harum vitae facilis?<br/> Ex est cupiditate iusto ab .</p>
                        </div>
                                <div className='grid grid-cols-1 mb-2'>
                                
                                <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
                                </div>
                                <div class="flex gap-2 ">
                        <div class="flex  rounded-lg p-2 h-10 w-40 pl-4 bg-ston/70 gap-1 text-white font-bold">
                <FaPlay className="bg-primary text-black rounded-full p-1 mt-1"/>
                <button>Watch Movie</button>
                </div> 
                <FaRegHeart className="bg-red   rounded-lg  h-10 w-10 p-2 "/>
                </div>
                        
                              </>
                            ),
                            },
  ];
 

  export const PopularData = [
    {
      id: 1,
      img: Images.Image_19,
      name: "FLAMES",
      year: 2018,
      sort:"Popular",
      genres:"Action",
      description: (
        <>
       
          <h1 class="3xl">FLAMES</h1>
          <div class="flex gap-2">
            <div class="flex gap-2">
            <span><FaStar className='w-4 text-primary  mt-1'/></span><span>6.374</span>
          </div>
          <span>2023</span><span>1h38m</span><span class=" border w-10 rounded-lg text-center text-primary bg-black absolute  font-bold text-[10px] ml-[170px]  ">1080p</span>
          </div>
          <div className='scroll'>
          <p class=" text-start mb-2 w-[170px] h-20  text-white  ">The story of a young romance<br/>unfolding as a chemical reaction.<br/>There is no such love as 'First Love'.</p>
          </div>
          <div className='grid grid-cols-1 mb-2'>
          <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
          </div>
          <div class="flex gap-2 ">
          <div class="flex  rounded-lg p-2 h-10 w-40 pl-4 bg-ston/70 gap-1 text-white font-bold">
  <FaPlay className="bg-primary text-black rounded-full p-1 mt-1"/>
  <button>Watch Movie</button>
  </div> 
  <FaRegHeart className="bg-red   rounded-lg  h-10 w-10 p-2 "/>
  </div>
  
        </>
      ),
    },
    {
      id:2,
      img:Images.Image_20,
      name:"Ricky and Morey",
      year:2013,
      sort:"Popular",
      genres:"Action",
      description: (
        <>
       
          <h1 class="3xl">Ricky and Morey</h1>
          <div class="flex gap-2">
            <div class="flex gap-2">
            <span><FaStar className='w-4 text-primary  mt-1'/></span><span>6.374</span>
          </div>
          <span>2023</span><span>1h38m</span><span class=" text-primary border border-2 rounded-lg ">1080p</span>
          </div>
          <div className='scroll'>
          <p class=" text-start mb-2 w-[170px] h-20  text-white  ">Rick is a mentally-unbalanced but scientifically gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school.</p>
          </div>
          <div className='grid grid-cols-1 mb-2'>
          <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
          </div>
          <div class="flex gap-2 ">
          <div class="flex  rounded-lg p-2 h-10 w-40 pl-4 bg-ston/70 gap-1 text-white font-bold">
  <FaPlay className="bg-primary text-black rounded-full p-1 mt-1"/>
  <button>Watch Movie</button>
  </div> 
  <FaRegHeart className="bg-red   rounded-lg  h-10 w-10 p-2 "/>
  </div>
  
        </>
      ),
      },
          {
      id:3,
      img:Images.Image_21,
      name:"Invisible",
      year:2021,
      sort:"Latest",
      genres:"Drama",
      description: (
        <>
       
          <h1 class="3xl">Invisible</h1>
          <div class="flex gap-2">
            <div class="flex gap-2">
            <span><FaStar className='w-4 text-primary  mt-1'/></span><span>6.374</span>
          </div>
          <span>2023</span><span>1h38m</span><span class=" text-primary border border-2 rounded-lg ">1080p</span>
          </div>
          <div className='scroll'>
          <p class=" text-start mb-2 h-20  text-white  ">Mark Grayson is a normal teenager except for the fact that his father is the most powerful superhero on the planet. Shortly after his seventeenth birthday, Mark begins to develop powers of his own and enters into his father’s tutelage.</p>
          </div>
          <div className='grid grid-cols-1 mb-2'>
          <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
          </div>
          <div class="flex gap-2 ">
          <div class="flex  rounded-lg p-2 h-10 w-40 pl-4 bg-ston/70 gap-1 text-white font-bold">
  <FaPlay className="bg-primary text-black rounded-full p-1 mt-1"/>
  <button>Watch Movie</button>
  </div> 
  <FaRegHeart className="bg-red   rounded-lg  h-10 w-10 p-2 "/>
  </div>
  
        </>
      ),
      },
      {
      id:4,
      img:Images.Image_22,
      name:"Reacher",
      year:2022,
      sort:"Latest",
      genres:"Act",
      description: (
        <>
       
          <h1 class="3xl">Reacher</h1>
          <div class="flex gap-2">
            <div class="flex gap-2">
            <span><FaStar className='w-4 text-primary  mt-1'/></span><span>6.374</span>
          </div>
          <span>2023</span><span>1h38m</span><span class=" text-primary border border-2 rounded-lg ">1080p</span>
          </div>
          <div className='scroll'>
          <p class=" text-start mb-2 w-[170px] h-20  text-white  ">When retired Military Police Officer Jack Reacher is arrested for a murder he did not commit, he finds himself in the middle of a deadly conspiracy full of dirty cops, shady businessmen and scheming politicians.</p>
          </div>
          <div className='grid grid-cols-1 mb-2'>
          <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
          </div>
          <div class="flex gap-2 ">
          <div class="flex  rounded-lg p-2 h-10 w-40 pl-4 bg-ston/70 gap-1 text-white font-bold">
  <FaPlay className="bg-primary text-black rounded-full p-1 mt-1"/>
  <button>Watch Movie</button>
  </div> 
  <FaRegHeart className="bg-red   rounded-lg  h-10 w-10 p-2 "/>
  </div>
  
        </>
      ),
      },
      {
      id:5,
      img:Images.Image_23,
      name:"Games of Throns",
      year:2011,
      sort:"Popular",
      genres:"Action",
      description: (
        <>
       
          <h1 class="3xl">Games of Throns</h1>
          <div class="flex gap-2">
            <div class="flex gap-2">
            <span><FaStar className='w-4 text-primary  mt-1'/></span><span>6.374</span>
          </div>
          <span>2023</span><span>1h38m</span><span class=" text-primary border border-2 rounded-lg mb-2 ">1080p</span>
          </div>
          <div className='scroll'>
          <p class=" text-start mb-2 w-[170px] h-20  text-white  ">Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors […]</p>
          </div>
          <div className='grid grid-cols-1 mb-2'>
          <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
          </div>
          <div class="flex gap-2 ">
          <div class="flex  rounded-lg p-2 h-10 w-40 pl-4 bg-ston/70 gap-1 text-white font-bold">
  <FaPlay className="bg-primary text-black rounded-full p-1 mt-1"/>
  <button>Watch Movie</button>
  </div> 
  <FaRegHeart className="bg-red   rounded-lg  h-10 w-10 p-2 "/>
  </div>
  
        </>
      ),
      },
      {
      id:6,
      img:Images.Image_24,
      name:"Monarch:Legacy of Monsters",
      year:2023,
      sort:"Popular",
      genres:"Action",
      description: (
        <>
       
          <h1 class="3xl">Monarch:Legacy of Monsters</h1>
          <div class="flex gap-2">
            <div class="flex gap-2">
            <span><FaStar className='w-4 text-primary  mt-1'/></span><span>6.374</span>
          </div>
          <span>2023</span><span>1h38m</span><span class=" text-primary border border-2 rounded-lg ">1080p</span>
          </div>
          <div className='scroll'>
          <p class=" text-start mb-2 w-[170px] h-20  text-white  ">After surviving Godzilla's attack on San Francisco, Cate is shaken yet again by a shocking secret. Amid monstrous threats, she embarks on a globetrotting adventure to learn the truth about her family—and the mysterious organization known as Monarch.</p>
          </div>
          <div className='grid grid-cols-1 mb-2'>
          <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
          </div>
          <div class="flex gap-2 ">
          <div class="flex  rounded-lg p-2 h-10 w-40 pl-4 bg-ston/70 gap-1 text-white font-bold">
  <FaPlay className="bg-primary text-black rounded-full p-1 mt-1"/>
  <button>Watch Movie</button>
  </div> 
  <FaRegHeart className="bg-red   rounded-lg  h-10 w-10 p-2 "/>
  </div>
  
        </>
      ),
       },
       {
       id:7,
       img:Images.Image_25,
       name:"Percy Jakson",
      year:2023,
      sort:"Popular",
      genres:"Action",
      description: (
        <>
       
          <h1 class="3xl">Percy Jakson</h1>
          <div class="flex gap-2">
            <div class="flex gap-2">
            <span><FaStar className='w-4 text-primary  mt-1'/></span><span>6.374</span>
          </div>
          <span>2023</span><span>1h38m</span><span class=" text-primary border border-2 rounded-lg ">1080p</span>
          </div>
          <div className='scroll'>
          <p class=" text-start mb-2 w-[170px] h-20  text-white  ">Percy Jackson is on a dangerous quest. Outrunning monsters and outwitting gods, he must journey across America to return Zeus' master bolt and stop an all-out war. With the help of his quest mates Annabeth and Grover, Percy's journey will lead him closer to the answers he seeks: how to fit into a world where […]</p>
          </div>
          <div className='grid grid-cols-1 mb-2'>
          <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
          </div>
          <div class="flex gap-2 ">
          <div class="flex  rounded-lg p-2 h-10 w-40 pl-4 bg-ston/70 gap-1 text-white font-bold">
  <FaPlay className="bg-primary text-black rounded-full p-1 mt-1"/>
  <button>Watch Movie</button>
  </div> 
  <FaRegHeart className="bg-red   rounded-lg  h-10 w-10 p-2 "/>
  </div>
  
        </>
      ),
       },
      {
      id:8,
      img:Images.Image_26,
      name:"Loki",
      year:2023,
      sort:"Popular",
      genres:"Action",
      description: (
        <>
       
          <h1 class="3xl">Loki</h1>
          <div class="flex gap-2">
            <div class="flex gap-2">
            <span><FaStar className='w-4 text-primary  mt-1'/></span><span>6.374</span>
          </div>
          <span>2023</span><span>1h38m</span><span class=" text-primary border border-2 rounded-lg ">1080p</span>
          </div>
          <div className='scroll'>
          <p class=" text-start mb-2 w-[170px] h-20  text-white  ">Lorem ipsum dolor sitr.<br/> Animi harum vitae facilis?<br/> Ex est cupiditate iusto ab .</p>
          </div>
          <div className='grid grid-cols-1 mb-2'>
          <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
          </div>
          <div class="flex gap-2 ">
          <div class="flex  rounded-lg p-2 h-10 w-40 pl-4 bg-ston/70 gap-1 text-white font-bold">
  <FaPlay className="bg-primary text-black rounded-full p-1 mt-1"/>
  <button>Watch Movie</button>
  </div> 
  <FaRegHeart className="bg-red   rounded-lg  h-10 w-10 p-2 "/>
  </div>
  
        </>
      ),
      },
  
  // {
  // id: 9,
  // img: Images.Image_20,
  // name: "FLAMES",
  // year: 2023,
  // sort:"Popular",
  // genres:"Action",
  // }

  ];
   export const LatestData = [
    {
    id:1,
    img:Images.Image_10,
    name:"Fargo",
    year: 2025,
    genres: "Drama",
    sort: "popular",
    description: (
      <>
     
        <h1 class="3xl">Fargo</h1>
        <div class="flex gap-2">
          <div class="flex gap-2">
          <span><FaStar className='w-4 text-primary  mt-1 '/></span><span>6.374</span>
        </div>
        <span>2023</span><span>1h38m</span><span class=" text-primary border border-2 rounded-lg ">1080p</span>
        </div>
        <div className='scroll'>
          <p class=" text-start mb-2 w-[170px] h-20  text-white  ">Lorem ipsum dolor sitr.<br/> Animi harum vitae facilis?<br/> Ex est cupiditate iusto ab .</p>
          </div>
        <div className='grid grid-cols-1 mb-2'>
        <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
        </div>
        <div class="flex gap-2 ">
          <div class="flex  rounded-lg p-2 h-10 w-40 pl-4 bg-ston/70 gap-1 text-white font-bold">
  <FaPlay className="bg-primary text-black rounded-full p-1 mt-1"/>
  <button>Watch Movie</button>
  </div> 
  <FaRegHeart className="bg-red   rounded-lg  h-10 w-10 p-2 "/>
  </div>

      </>
    ),
    },
    {
    id:2,
    img:Images.Image_11,
    name:"Percy Jakson",
    year:2023,
    genres: "Action",
    sort: "latest",
    description: (
      <>
     
        <h1 class="3xl">Percy Jakson</h1>
        <div class="flex gap-2">
          <div class="flex gap-2">
          <span><FaStar className='w-4 text-primary  mt-1'/></span><span>6.374</span>
        </div>
        <span>2023</span><span>1h38m</span><span class=" text-primary border border-2 rounded-lg ">1080p</span>
        </div>
        <div className='scroll'>
          <p class=" text-start mb-2 w-[170px] h-20  text-white  ">Lorem ipsum dolor sitr.<br/> Animi harum vitae facilis?<br/> Ex est cupiditate iusto ab .</p>
          </div>
        <div className='grid grid-cols-1 mb-2'>
        <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
        </div>
        <div class="flex gap-2 ">
          <div class="flex  rounded-lg p-2 h-10 w-40 pl-4 bg-ston/70 gap-1 text-white font-bold">
  <FaPlay className="bg-primary text-black rounded-full p-1 mt-1"/>
  <button>Watch Movie</button>
  </div> 
  <FaRegHeart className="bg-red   rounded-lg  h-10 w-10 p-2 "/>
  </div>
      </>
    ),
    },
        {
    id:3,
    img:Images.Image_12,
    name:"Night Court",
    year:2024,
    genres: "Action",
    sort: "latest",
    description: (
      <>
     
        <h1 class="3xl">Night Court</h1>
        <div class="flex gap-2">
          <div class="flex gap-2">
          <span><FaStar className='w-4 text-primary  mt-1'/></span><span>6.374</span>
        </div>
        <span>2023</span><span>1h38m</span><span class=" text-primary border border-2 rounded-lg">1080p</span>
        </div>
        <div className='scroll'>
          <p class=" text-start mb-2 w-[170px] h-20  text-white  ">Lorem ipsum dolor sitr.<br/> Animi harum vitae facilis?<br/> Ex est cupiditate iusto ab .</p>
          </div>
        <div className='grid grid-cols-1 mb-2'>
        <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
        </div>
        <div class="flex gap-2 ">
          <div class="flex  rounded-lg p-2 h-10 w-40 pl-4 bg-ston/70 gap-1 text-white font-bold">
  <FaPlay className="bg-primary text-black rounded-full p-1 mt-1"/>
  <button>Watch Movie</button>
  </div> 
  <FaRegHeart className="bg-red   rounded-lg  h-10 w-10 p-2 "/>
  </div>

      </>
    ),
    },
    {
    id:4,
    img:Images.Image_13,
    name:"Raising Kanan",
    year:2023,
    genres: "Action",
    sort: "popular",
    description: (
      <>
     
        <h1 class="3xl">Raising Kanan</h1>
        <div class="flex gap-2">
          <div class="flex gap-2">
          <span><FaStar className='w-4 text-primary  mt-1'/></span><span>6.374</span>
        </div>
        <span>2023</span><span>1h38m</span><span class=" text-primary border border-2 rounded-lg ">1080p</span>
        </div>
        <div className='scroll'>
          <p class=" text-start mb-2 w-[170px] h-20  text-white  ">Lorem ipsum dolor sitr.<br/> Animi harum vitae facilis?<br/> Ex est cupiditate iusto ab .</p>
          </div>
        <div className='grid grid-cols-1 mb-2'>
        <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
        </div>
        <div class="flex gap-2 ">
          <div class="flex  rounded-lg p-2 h-10 w-40 pl-4 bg-ston/70 gap-1 text-white font-bold">
  <FaPlay className="bg-primary text-black rounded-full p-1 mt-1"/>
  <button>Watch Movie</button>
  </div> 
  <FaRegHeart className="bg-red   rounded-lg  h-10 w-10 p-2 "/>
  </div>

      </>
    ),
    },
    {
    id:5,
    img:Images.Image_14,
    name:"Monarch Legacy of Monsters",
    year:2023,
    genres: "Advantute",
    sort: "popular",
    description: (
      <>
     
        <h1 class="3xl">Monarch Legacy of Monsters</h1>
        <div class="flex gap-2">
          <div class="flex gap-2">
          <span><FaStar className='w-4 text-primary  mt-1'/></span><span>6.374</span>
        </div>
        <span>2023</span><span>1h38m</span><span class=" text-primary border border-2 rounded-lg">1080p</span>
        </div>
        <div className='scroll'>
          <p class=" text-start mb-2 w-[170px] h-20  text-white  ">Lorem ipsum dolor sitr.<br/> Animi harum vitae facilis?<br/> Ex est cupiditate iusto ab .</p>
          </div>
        <div className='grid grid-cols-1 mb-2'>
        <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
        </div>
        <div class="flex gap-2 ">
          <div class="flex  rounded-lg p-2 h-10 w-40 pl-4 bg-ston/70 gap-1 text-white font-bold">
  <FaPlay className="bg-primary text-black rounded-full p-1 mt-1"/>
  <button>Watch Movie</button>
  </div> 
  <FaRegHeart className="bg-red   rounded-lg  h-10 w-10 p-2 "/>
  </div>

      </>
    ),
    },
    {
    id:6,
    img:Images.Image_15,
    name:"Reacher",
    year:2025,
    genres: "Act",
    sort: "popular",
    description: (
      <>
     
        <h1 class="3xl">Reacher</h1>
        <div class="flex gap-2">
          <div class="flex gap-2">
          <span><FaStar className='w-4 text-primary  mt-1'/></span><span>6.374</span>
        </div>
        <span>2023</span><span>1h38m</span><span class=" text-primary border border-2 rounded-lg ">1080p</span>
        </div>
        <div className='scroll'>
          <p class=" text-start mb-2 w-[170px] h-20 text-white  ">Lorem ipsum dolor sitr.<br/> Animi harum vitae facilis?<br/> Ex est cupiditate iusto ab .</p>
          </div>
        <div className='grid grid-cols-1 mb-2'>
        <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
        </div>
        <div class="flex gap-2 ">
          <div class="flex  rounded-lg p-2 h-10 w-40 pl-4 bg-ston/70 gap-1 text-white font-bold">
  <FaPlay className="bg-primary text-black rounded-full p-1 mt-1"/>
  <button>Watch Movie</button>
  </div> 
  <FaRegHeart className="bg-red   rounded-lg  h-10 w-10 p-2 "/>
  </div>

      </>
    ),
     },
     {
     id:7,
     img:Images.Image_16,
     name:"Slow Horses",
    year:2024,
    genres: "Act",
    sort: "popular",
    description: (
      <>
     
        <h1 class="3xl">Slow Horses</h1>
        <div class="flex gap-2">
          <div class="flex gap-2">
          <span><FaStar className='w-4 text-primary  mt-1'/></span><span>6.374</span>
        </div>
        <span>2023</span><span>1h38m</span><span class=" text-primary border border-2 rounded-lg">1080p</span>
        </div>
        <div className='scroll'>
          <p class=" text-start mb-2 w-[170px] h-20  text-white  ">Lorem ipsum dolor sitr.<br/> Animi harum vitae facilis?<br/> Ex est cupiditate iusto ab .</p>
          </div>
        <div className='grid grid-cols-1 mb-2'>
        <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
        </div>
        <div class="flex gap-2 ">
          <div class="flex  rounded-lg p-2 h-10 w-40 pl-4 bg-ston/70 gap-1 text-white font-bold">
  <FaPlay className="bg-primary text-black rounded-full p-1 mt-1"/>
  <button>Watch Movie</button>
  </div> 
  <FaRegHeart className="bg-red   rounded-lg  h-10 w-10 p-2 "/>
  </div>

      </>
    ),
     },
    {
    id:8,
    img:Images.Image_17,
     name:"What If..?",
    year:2023,
    genres: "Act",
    sort: "popular",
    description: (
      <>
     
        <h1 class="3xl">What If..?</h1>
        <div class="flex gap-2">
          <div class="flex gap-2">
          <span><FaStar className='w-4 text-primary  mt-1'/></span><span>6.374</span>
        </div>
        <span>2023</span><span>1h38m</span><span class=" text-primary border border-2 rounded-lg">1080p</span>
        </div>
        <div className='scroll'>
          <p class=" text-start mb-2 w-[170px] h-20  text-white  ">Lorem ipsum dolor sitr.<br/> Animi harum vitae facilis?<br/> Ex est cupiditate iusto ab .</p>
          </div>
        <div className='grid grid-cols-1 mb-2'>
        <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
        </div>
        <div class="flex gap-2 ">
          <div class="flex  rounded-lg p-2 h-10 w-40 pl-4 bg-ston/70 gap-1 text-white font-bold">
  <FaPlay className="bg-primary text-black rounded-full p-1 mt-1"/>
  <button>Watch Movie</button>
  </div> 
  <FaRegHeart className="bg-red   rounded-lg  h-10 w-10 p-2 "/>
  </div>

      </>
    ),
    },
    {
    id:9,
    img:Images.Image_18,
    name:"Vigil",
    year:2024,
    genres: "Act",
    sort: "popular",
    description: (
      <>
     
        <h1 class="3xl">Vigil</h1>
        <div class="flex gap-2">
          <div class="flex gap-2">
          <span><FaStar className='w-4 text-primary  mt-1'/></span><span>6.374</span>
        </div>
        <span>2023</span><span>1h38m</span><span class=" text-primary border border-2 rounded-lg ">1080p</span>
        </div>
        <div className='scroll'>
          <p class=" text-start mb-2 w-[170px] h-20  text-white  ">Lorem ipsum dolor sitr.<br/> Animi harum vitae facilis?<br/> Ex est cupiditate iusto ab .</p>
          </div>
        <div className='grid grid-cols-1 mb-2'>
        <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
        </div>
        <div class="flex gap-2 ">
          <div class="flex  rounded-lg p-2 h-10 w-40 pl-4 bg-ston/70 gap-1 text-white font-bold">
  <FaPlay className="bg-primary text-black rounded-full p-1 mt-1"/>
  <button>Watch Movie</button>
  </div> 
  <FaRegHeart className="bg-red   rounded-lg  h-10 w-10 p-2 "/>
  </div>

      </>
    ),
    },
    {
    id:10,
    img:Images.Image_31,
    name:"Such Brave Girls",
    year:2023,
    genres: "Act",
    sort: "popular",
    description: (
      <>
     
        <h1 class="3xl">Such Brave Girls</h1>
        <div class="flex gap-2">
          <div class="flex gap-2">
          <span><FaStar className='w-4 text-primary  mt-1'/></span><span>6.374</span>
        </div>
        <span>2023</span><span>1h38m</span><span class=" text-primary border border-2 rounded-lg ">1080p</span>
        </div>
        <div className='scrollbar'>
          <p class=" text-start mb-2 w-[170px] h-20  text-white  ">Lorem ipsum dolor sitr.<br/> Animi harum vitae facilis?<br/> Ex est cupiditate iusto ab .</p>
          </div>
        <div className='grid grid-cols-1 mb-2'>
        <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
        </div>
        <div class="flex gap-2 ">
          <div class="flex  rounded-lg p-2 h-10 w-40 pl-4 bg-ston/70 gap-1 text-white font-bold">
  <FaPlay className="bg-primary text-black rounded-full p-1 mt-1"/>
  <button>Watch Movie</button>
  </div> 
  <FaRegHeart className="bg-red   rounded-lg  h-10 w-10 p-2 "/>
  </div>

      </>
    ),
    },
        {
    id:11,
    img:Images.Image_32,
    name:"Acting Good",
    year:2023,
    genres: "Act",
    sort: "popular",
    description: (
      <>
     
        <h1 class="3xl">Acting Good</h1>
        <div class="flex gap-2">
          <div class="flex gap-2">
          <span><FaStar className='w-4 text-primary  mt-1'/></span><span>6.374</span>
        </div>
        <span>2023</span><span>1h38m</span><span class=" text-primary border border-2 rounded-lg ">1080p</span>
        </div>
        <div className='scrollbar'>
          <p class=" text-start mb-2 w-[170px] h-20 text-white  ">Lorem ipsum dolor sitr.<br/> Animi harum vitae facilis?<br/> Ex est cupiditate iusto ab .</p>
          </div>
        <div className='grid grid-cols-1 mb-2'>
        <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
        </div>
        <div class="flex gap-2 ">
          <div class="flex  rounded-lg p-2 h-10 w-40 pl-4 bg-ston/70 gap-1 text-white font-bold">
  <FaPlay className="bg-primary text-black rounded-full p-1 mt-1"/>
  <button>Watch Movie</button>
  </div> 
  <FaRegHeart className="bg-red   rounded-lg  h-10 w-10 p-2 "/>
  </div>

      </>
    ),
    },
    {
    id:12,
    img:Images.Image_33,
    name:"Ncis Sydney",
    year:2023,
    genres: "Action",
    sort: "latest",
    description: (
      <>
     
        <h1 class="3xl">Ncis Sydney</h1>
        <div class="flex gap-2">
          <div class="flex gap-2">
          <span><FaStar className='w-4 text-primary  mt-1'/></span><span>6.374</span>
        </div>
        <span>2023</span><span>1h38m</span><span class=" text-primary border border-2 rounded-lg ">1080p</span>
        </div>
        <div className='scrollbar'>
          <p class=" text-start mb-2 w-[170px] h-20 text-white  ">Lorem ipsum dolor sitr.<br/> Animi harum vitae facilis?<br/> Ex est cupiditate iusto ab .</p>
          </div>
        <div className='grid grid-cols-1 mb-2'>
        <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
        </div>
        <div class="flex gap-2 ">
          <div class="flex  rounded-lg p-2 h-10 w-40 pl-4 bg-ston/70 gap-1 text-white font-bold">
  <FaPlay className="bg-primary text-black rounded-full p-1 mt-1"/>
  <button>Watch Movie</button>
  </div> 
  <FaRegHeart className="bg-red   rounded-lg  h-10 w-10 p-2 "/>
  </div>

      </>
    ),
    },
          
];