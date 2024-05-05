import React from 'react'
import BarChart from './graph/BarChart'
import PieChart from './graph/PieChart'

const Statistics = () => {

  const cardData = JSON.parse(localStorage.getItem("cards"));

    // console.log(cardData);

    const wishlistCards = cardData.filter((c) => c.column === "wishlist");
    const appliedCards = cardData.filter((c) => c.column === "applied");
    const interviewingCards = cardData.filter((c) => c.column === "interviewing");
    const offerCards = cardData.filter((c) => c.column === "offer");
    const rejectedCards = cardData.filter((c) => c.column === "rejected");

    const pieData = [wishlistCards.length, appliedCards.length, interviewingCards.length, offerCards.length, rejectedCards.length];

  return (
    <div className='w-full overflow-y-scroll'>
      <h1 className="text-xl font-bold mb-2 text-neutral-200">Statistics</h1>
      <div className="flex flex-wrap justify-around gap-4 mt-4 mb-6">
        <div className="flex flex-col items-center rounded p-16 bg-slate-500 text-neutral-200">
          <span className='text-5xl font-semibold'>{cardData.length}</span>
          <span className='text-sm font-normal'>Total Jobs</span>
        </div>
        <div className="flex flex-col items-center rounded p-16 bg-neutral-500 text-neutral-200">
          <span className='text-5xl font-semibold'>{wishlistCards.length}</span>
          <span className='text-sm font-normal'>Wishlist</span>
        </div>
        <div className="flex flex-col items-center rounded p-16 bg-orange-500 text-neutral-200">
          <span className='text-5xl font-semibold'>{appliedCards.length}</span>
          <span className='text-sm font-normal'>Applied</span>
        </div>
        <div className="flex flex-col items-center rounded p-16 bg-yellow-500 text-neutral-200">
          <span className='text-5xl font-semibold'>{interviewingCards.length}</span>
          <span className='text-sm font-normal'>Interviewing</span>
        </div>
        <div className="flex flex-col items-center rounded p-16 bg-green-500 text-neutral-200">
          <span className='text-5xl font-semibold'>{offerCards.length}</span>
          <span className='text-sm font-normal'>Offer</span>
        </div>
        <div className="flex flex-col items-center rounded p-16 bg-red-500 text-neutral-200">
          <span className='text-5xl font-semibold'>{rejectedCards.length}</span>
          <span className='text-sm font-normal'>Rejected</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        <div className="flex-1">
          <PieChart pieData={pieData} />
        </div>

        <div className="flex-1">
          <BarChart cardsData={cardData} />
        </div>
      </div>
    </div>
  )
}

export default Statistics