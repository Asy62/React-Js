import React from 'react'

const RightcardContent = (props) => {
  return (
    <div>
        <div  className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
    <h2 className='bg-white text-xl font-bold rounded-full h-12 w-12 flex justify-center items-center'>1</h2>
    <div>
        <p className='text-lg leading-normal  text-white mb-14'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim recusandae iste debitis nobis commodi deleniti?</p>
        <div className='flex justify-between'>
            <button className='bg-blue-600 text-white font-medium px-8 py-3 rounded-full '>Satisfied</button>
            <button className='bg-blue-600 text-white font-medium 
            px-4 py-3 rounded-full'><i className="ri-arrow-right-line  "></i></button>
        </div>
    </div>

</div>
    </div>
  )
}

export default RightcardContent