import type { FC, ReactNode } from 'react'
import Statistics from './Statistics'
interface IDestination {
  name: string
  description: string
  avgDistance: string
  travelTime: string
  children?: ReactNode
  i: string
}

const Destination: FC<IDestination> = ({
  name,
  description,
  avgDistance,
  travelTime,
  children,
  i,
}) => (
  <div className='pb-14 pt-[76px] lg:flex lg:items-center lg:justify-between lg:gap-24 xl:gap-0'>
    <div>
      <p
        data-index={i}
        className={`mb-8 mt-6 text-base uppercase leading-[19.2px] tracking-[2.7px] text-white before:pr-[18px] before:font-bold before:opacity-25 before:content-[attr(data-index)] md:mb-[60px] md:text-left md:text-[20px] md:leading-6 md:tracking-[3.38px] lg:mb-[97px] lg:whitespace-nowrap lg:text-[28px] lg:leading-[33.6px] lg:tracking-[4.72px]`}
      >
        Pick your destination
      </p>

      <img
        className='mx-auto block aspect-square w-[170px] object-cover md:w-[300px] lg:ml-[63.5px] lg:w-[445px]'
        src={`/assets/destination/image-${name}.webp`}
        alt={name}
      />
    </div>

    <div>
      <div>{children}</div>

      <h1 className='font-bellefair mb-2 text-[56px] uppercase leading-[64.18px] text-white md:text-[80px] md:leading-[91.68px] lg:mb-[14px] lg:leading-[114.6px]'>
        {name}
      </h1>

      <p className='text-light-blueish-gray mb-8 text-[15px] leading-[25px] md:mx-auto md:mb-[49px] md:max-w-[500px] md:text-[16px] md:leading-7 lg:text-[18px] lg:leading-[32px]'>
        {description}
      </p>
      <hr className='h-[2px] bg-white/20' />

      <div className='md:item-center md:flex md:justify-center md:gap-10 lg:justify-start'>
        <Statistics label='AVG. DISTANCE' value={avgDistance} />

        <Statistics label='Est. travel time' value={travelTime} />
      </div>
    </div>
  </div>
)

export default Destination