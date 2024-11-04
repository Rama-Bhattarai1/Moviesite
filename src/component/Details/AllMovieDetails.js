
import React,{useEffect,useState} from 'react';
 import { useParams } from 'react-router-dom';
 import * as Images from "../../assest/images";
 import * as Icon from "../../assest/icon";
import { Link } from 'react-router-dom';
import RelatedMovie from '../UserRanking/RelatedMovie';
  export const AllMovieData = [
  
  {
    id:1,
    img:Images.Image_2,
    name:"Next Goal Wins",
    geners:"action",
    year:2023,
    description:(
      <>
      <div className=''>
        <div className='gap-4 flex mb-4 '>
          <Icon.StarIcon/>
          <span>7.4/10 of 12</span><span>2018</span><span>1h 22min</span>
        </div>
        <div className='flex gap-4'>
        <span> Drama</span> <span>Drama</span> <span>Family</span><span className='border border-2 text-primary  rounded-lg p-1'>1080</span><span className="bg-yellow rounded-lg p-1 text-black font-bold border border-2 ">IMDb</span>
        </div>
        <p className='mb-4'>Lorem ipsum dolor sitr. Animi harum vitae facilis?</p>
        <div className='grid grid-cols-1'>
        <span className='mb-4'>Director:    Aporv SiGh Karki,Kunai Anjeja</span>
        <span > Cast:  Deepesh Suumitra Jagdish</span>
       
        </div>
      </div>
      </>
          ),
    },
    {
    id:2,
    img:Images.Image_3,
    name:"The Boys In the Boot",
    geners:"action",
    year:2023,
    description:(
      <>
      <div className=''>
        <div className='gap-4 flex mb-4 '>
          <Icon.StarIcon/>
          <span>7.4/10 of 12</span><span>2018</span><span>1h 22min</span>
        </div>
        <div className='flex gap-4'>
        <span> Drama</span> <span>Drama</span> <span>Family</span><span className='border border-2 text-primary  rounded-lg p-1'>1080</span><span className="bg-yellow rounded-lg p-1 text-black font-bold border border-2 ">IMDb</span>
        </div>
        <p className='mb-4'>Lorem ipsum dolor sitr. Animi harum vitae facilis?</p>
        <div className='grid grid-cols-1'>
        <span className='mb-4'>Director:    Aporv SiGh Karki,Kunai Anjeja</span>
        <span > Cast:  Deepesh Suumitra Jagdish</span>
       
        </div>
      </div>
      
      </>
          ),
    },
        {
    id:3,
    img:Images.Image_4,
    name:"justic League Crisis on Infinite Earths part...",
    year:2023,
    geners:"action",
    description:(
      <>
      <div className=''>
        <div className='gap-4 flex mb-4 '>
          <Icon.StarIcon/>
          <span>7.4/10 of 12</span><span>2018</span><span>1h 22min</span>
        </div>
        <div className='flex gap-4'>
        <span> Drama</span> <span>Drama</span> <span>Family</span><span className='border border-2 text-primary  rounded-lg p-1'>1080</span><span className="bg-yellow rounded-lg p-1 text-black font-bold border border-2 ">IMDb</span>
        </div>
        <p className='mb-4'>Lorem ipsum dolor sitr. Animi harum vitae facilis?</p>
        <div className='grid grid-cols-1'>
        <span className='mb-4'>Director:    Aporv SiGh Karki,Kunai Anjeja</span>
        <span > Cast:  Deepesh Suumitra Jagdish</span>
       
        </div>
      </div>
      
      </>
          ),
    },
    {
    id:4,
    img:Images.Image_5,
    name:"The Color Purple",
    geners:"action",
    year:2023,
    description:(
      <>
      <div className=''>
        <div className='gap-4 flex mb-4 '>
          <Icon.StarIcon/>
          <span>7.4/10 of 12</span><span>2018</span><span>1h 22min</span>
        </div>
        <div className='flex gap-4'>
        <span> Drama</span> <span>Drama</span> <span>Family</span><span className='border border-2 text-primary  rounded-lg p-1'>1080</span><span className="bg-yellow rounded-lg p-1 text-black font-bold border border-2 ">IMDb</span>
        </div>
        <p className='mb-4'>Lorem ipsum dolor sitr. Animi harum vitae facilis?</p>
        <div className='grid grid-cols-1'>
        <span className='mb-4'>Director:    Aporv SiGh Karki,Kunai Anjeja</span>
        <span > Cast:  Deepesh Suumitra Jagdish</span>
       
        </div>
      </div>
      
      </>
          ),
    },
    {
    id:5,
    img:Images.Image_6,
    name:"Lift",
    geners:"Drama",
    year:2023,
    description:(
      <>
      <div className=''>
        <div className='gap-4 flex mb-4 '>
          <Icon.StarIcon/>
          <span>7.4/10 of 12</span><span>2018</span><span>1h 22min</span>
        </div>
        <div className='flex gap-4'>
        <span> Drama</span> <span>Drama</span> <span>Family</span><span className='border border-2 text-primary  rounded-lg p-1'>1080</span><span className="bg-yellow rounded-lg p-1 text-black font-bold border border-2 ">IMDb</span>
        </div>
        <p className='mb-4'>Lorem ipsum dolor sitr. Animi harum vitae facilis?</p>
        <div className='grid grid-cols-1'>
        <span className='mb-4'>Director:    Aporv SiGh Karki,Kunai Anjeja</span>
        <span > Cast:  Deepesh Suumitra Jagdish</span>
       
        </div>
      </div>
      
      </>
          ),
    },
    {
        id:6,
        img:Images.Image_7,
        name:"Tiger3",
        geners:"Drama",
        year:2023,
        description:(
          <>
          <div className=''>
            <div className='gap-4 flex mb-4 '>
              <Icon.StarIcon/>
              <span>7.4/10 of 12</span><span>2018</span><span>1h 22min</span>
            </div>
            <div className='flex gap-4'>
            <span> Drama</span> <span>Drama</span> <span>Family</span><span className='border border-2 text-primary  rounded-lg p-1'>1080</span><span className="bg-yellow rounded-lg p-1 text-black font-bold border border-2 ">IMDb</span>
            </div>
            <p className='mb-4'>Lorem ipsum dolor sitr. Animi harum vitae facilis?</p>
            <div className='grid grid-cols-1'>
            <span className='mb-4'>Director:    Aporv SiGh Karki,Kunai Anjeja</span>
            <span > Cast:  Deepesh Suumitra Jagdish</span>
           
            </div>
          </div>
          
          </>
              ),
        },
        {
    id:7,
    img:Images.Image_8,
    name:"Napoleon",
    geners:"Drama",
     year:2023,
     description:(
      <>
      <div className=''>
        <div className='gap-4 flex mb-4 '>
          <Icon.StarIcon/>
          <span>7.4/10 of 12</span><span>2018</span><span>1h 22min</span>
        </div>
        <div className='flex gap-4'>
        <span> Drama</span> <span>Drama</span> <span>Family</span><span className='border border-2 text-primary  rounded-lg p-1'>1080</span><span className="bg-yellow rounded-lg p-1 text-black font-bold border border-2 ">IMDb</span>
        </div>
        <p className='mb-4'>Lorem ipsum dolor sitr. Animi harum vitae facilis?</p>
        <div className='grid grid-cols-1'>
        <span className='mb-4'>Director:    Aporv SiGh Karki,Kunai Anjeja</span>
        <span > Cast:  Deepesh Suumitra Jagdish</span>
       
        </div>
      </div>
      
      </>
          ),
     },
     {
     id:8,
    img:Images.Image_2,
    name:"Next Goal Wins",
    geners:"Drama",
    year:2023,
    description:(
      <>
      <div className=''>
        <div className='gap-4 flex mb-4 '>
          <Icon.StarIcon/>
          <span>7.4/10 of 12</span><span>2018</span><span>1h 22min</span>
        </div>
        <div className='flex gap-4'>
        <span> Drama</span> <span>Drama</span> <span>Family</span><span className='border border-2 text-primary  rounded-lg p-1'>1080</span><span className="bg-yellow rounded-lg p-1 text-black font-bold border border-2 ">IMDb</span>
        </div>
        <p className='mb-4'>Lorem ipsum dolor sitr. Animi harum vitae facilis?</p>
        <div className='grid grid-cols-1'>
        <span className='mb-4'>Director:    Aporv SiGh Karki,Kunai Anjeja</span>
        <span > Cast:  Deepesh Suumitra Jagdish</span>
       
        </div>
      </div>
      
      </>
          ),
  
    },
   
];



const AllMovieDetail = () => {
  
  const { id } = useParams();
const[product, setproduct]= useState({});
const[relatedproduct, setrelatedproduct]= useState({});
useEffect(() =>{
  const filterproduct = AllMovieData.filter((product) => product.id == id);
  setproduct(filterproduct[0]);
  const relatedproduct = AllMovieData.filter((item)=>item.geners === product.geners)
  // console.log("RelatedProduct = ",relatedproducts)
  setrelatedproduct(relatedproduct)
},[id, product.geners]);
 
  // const selectedItem = AllMovieData.find(item => item.id === parseInt(id));

  // if (!selectedItem) {
   
  //   return <div>Movie not found</div>;
  // }

  return (
    <div className='relative'>
       <div className=' mt-[68px]'>
      <div className='flex text-white gap-4 pt-4 pb-4 bg-black '>
        <ul className='flex gap-4'>
          <Link to="/"><li>Home</li></Link>
          <li>Movie</li>
        </ul>
        <span className='text-xl'>{product.name}</span>
      </div>
     
      <div className='relative'>
      <img src={product.img}alt="" className='w-full h-[500px]'/> 
      <div className="bg-ston absolute top-0 h-[500px] w-40  border-b text-white">
<h1 className='text-xl mb-4'>Option</h1>
<div className='bg-stons'>
  <span>OPTION 01-Bflix</span>
  <span>English-1080p</span>
</div>
      </div>
      </div>
      <div className='flex bg-black pt-10'>
      <div className=' text-white w-[600px]  pt-4 rounded-lg border border-2-teritory  bg-stonlight'>
<div className='flex gap-4'>
  <div>
  <img src={product.img} alt="" className='w-40 h-60 rounded-lg border border-2-teritory '/>
  </div>
  <div>
    <span className='text-xl'>{product.name}</span>
    <span>{product.description}</span>
  </div>
</div>
      </div>
      <RelatedMovie AllMovieData={relatedproduct}/>
      </div>
      </div>
    </div>
  );
}

export default AllMovieDetail;


