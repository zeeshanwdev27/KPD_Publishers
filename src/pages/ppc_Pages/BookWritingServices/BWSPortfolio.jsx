import React, { useState } from 'react'

function BWSPortfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const dummyData = [
    {
      image: "Portfolio/img1.jpg",
      type: 'fiction'
    },
    {
      image: "Portfolio/img2.jpg",
      type: 'non-fiction'
    },
    {
      image: "Portfolio/img3.jpg",
      type: 'fiction'
    },
    {
      image: "Portfolio/img4.jpg",
      type: 'informative'
    },
    {
      image: "Portfolio/img5.jpg",
      type: 'fiction'
    },
    {
      image: "Portfolio/img6.jpg",
      type: 'informative'
    },
    {
      image: "Portfolio/img7.jpg",
      type: 'non-fiction'
    },
    {
      image: "Portfolio/img8.jpg",
      type: 'non-fiction'
    },
    {
      image: "Portfolio/img9.jpg",
      type: 'children'
    },
    {
      image: "Portfolio/img10.jpg",
      type: 'non-fiction'
    },
    {
      image: "Portfolio/img11.jpg",
      type: 'fiction'
    },
    {
      image: "Portfolio/img12.jpg",
      type: 'informative'
    },
    {
      image: "Portfolio/img13.jpg",
      type: 'fiction'
    },
    {
      image: "Portfolio/img14.jpg",
      type: 'non-fiction'
    },
    {
      image: "Portfolio/img15.jpg",
      type: 'children'
    },
    {
      image: "Portfolio/img16.jpg",
      type: 'children'
    },
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setShowAll(category === 'all');
  };

  // Filter data based on active category
  const filteredData = activeCategory === 'all' 
    ? dummyData 
    : dummyData.filter(item => item.type === activeCategory);

  // Show only first 9 items when "all" is selected and not showing all
  const displayData = (activeCategory === 'all' && !showAll) 
    ? filteredData.slice(0, 9) 
    : filteredData;

  const getButtonClass = (category) => {
    const baseClass = 'text-black p-2 md:p-3 px-4 md:px-8 rounded-md font-bold text-sm md:text-md transition-colors duration-200';
    const isActive = 
      (category === 'all' && activeCategory === 'all') ||
      (category === 'non-fiction' && activeCategory === 'non-fiction') ||
      (category === 'fiction' && activeCategory === 'fiction') ||
      (category === 'children' && activeCategory === 'children') ||
      (category === 'informative' && activeCategory === 'informative');
    
    return isActive 
      ? `${baseClass} bg-[#FF9631] text-white` 
      : `${baseClass} bg-linear-to-b from-white to-[#E4D8CA] hover:bg-amber-100`;
  };

  return (
    <div className='h-auto min-h-[90vh] flex flex-col items-center py-12 md:py-20 px-4 sm:px-6 md:px-8 lg:px-4 gap-12 md:gap-20'>
      <div className='flex flex-col items-center gap-4 md:gap-6 w-full'>
        <h1 className='text-[#FF9631] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center'>My Book Writing & Publishing Portfolio</h1>
        <p className='w-full max-w-3xl text-sm md:text-md text-center px-2'>Our team of extremely talented ghost book writers and editors ensures that they don't waste a single drop of sweat, making you one of the most sought-after writers of the century!</p>

        <div className='flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-8 w-full max-w-4xl'>
          <button 
            className={getButtonClass('all')}
            onClick={() => handleCategoryClick('all')}
          >
            ALL
          </button>
          <button 
            className={getButtonClass('non-fiction')}
            onClick={() => handleCategoryClick('non-fiction')}
          >
            Non Fiction
          </button>
          <button 
            className={getButtonClass('fiction')}
            onClick={() => handleCategoryClick('fiction')}
          >
            Fictions
          </button>
          <button 
            className={getButtonClass('children')}
            onClick={() => handleCategoryClick('children')}
          >
            Children
          </button>
          <button 
            className={getButtonClass('informative')}
            onClick={() => handleCategoryClick('informative')}
          >
            Informative
          </button>
        </div>
      </div>

      {/* Images */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 w-full max-w-7xl px-4'>
        {displayData.map((item, index) => (
          <img 
            src={item.image} 
            alt={`Book ${index}`} 
            key={index} 
            className='w-60 h-80 rounded-2xl object-cover mx-auto' 
          />
        ))}
      </div>

      {/* Show more button for "all" category */}
      {activeCategory === 'all' && !showAll && filteredData.length > 9 && (
        <button 
          className='bg-[#FF9631] text-white p-3 px-8 rounded-md font-bold text-md hover:bg-amber-600 transition-colors duration-200 cursor-pointer'
          onClick={() => setShowAll(true)}
        >
          Show More
        </button>
      )}
    </div>
  )
}

export default BWSPortfolio