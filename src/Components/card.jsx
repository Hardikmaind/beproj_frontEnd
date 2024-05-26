// Card.jsx
import React from 'react'

function Card(props) {
  return (
    <div className="flex justify-center md:m-0 items-center flex-1">
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src="/docs/images/blog/image-4.jpg"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.Type}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {props.detail}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
