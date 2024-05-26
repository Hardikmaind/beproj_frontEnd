import React, { useState } from 'react'

import ResultCard from '../Components/ResultCard/ResultCard'
import ResultModal from '../Components/ResultCard/ResultModal'
import { useEffect } from 'react'
import AxiosInstance from '../api/AxiosInstance'
import { set } from 'firebase/database'
import { ImSpinner11 } from 'react-icons/im'
import ResultLoader from '../assets/images/ResultLoader.gif'

const Result = () => {
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [feedback, setFeedback] = useState(null)
  const [loadingResult, setLoadingResult] = useState(true)

  const toggleQAModal = () => {
    setShowModal(!showModal)
  }

  const callApi = async () => {
    try {
      const res = await AxiosInstance.get('rate_answers/')
      setLoading(false)
      setData(res.data)
      console.log('API Response:', data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.classList.contains('fixed')) {
        toggleQAModal()
      }
    }

    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        toggleQAModal()
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('keydown', handleEscapeKey)
  }, [toggleQAModal])

  const getFeedback = async () => {
    try {
      const postData = {
        user: localStorage.getItem('userId'),
      }
      const res = await AxiosInstance.post('get_interview_Feedback/', postData)
      setLoadingResult(false)
      console.log('User Id submitted successfully')
      console.log('All Feedback:', res.data)
      setFeedback(res.data[res.data.length - 1])
    } catch (error) {
      console.error('Error sending User ID:', error)
    }
  }

  useEffect(() => {
    getFeedback()
  }, [])

  // useEffect(() => {
  //   console.log("Latest Feedback:", feedback);
  // }, [feedback]);
  console.log('Latest Feedback:', feedback)
  return (
    <>
      <div className=" flex flex-col items-center justify-center">
        {/* <div className="text-5xl my-5 text-center">Result</div> */}
        <div className="flex flex-col gap-14">
          <div className="mx-auto mt-10">
            <div className=" text-center text-5xl mb-4">
              Hurray!! Congratulations you have completed your interview
              successfully
            </div>
          </div>
          {loadingResult ? (
            <div className="flex flex-col justify-center items-center w-full mt-20 mb-20">
              <img
                className="object-cover pl-4 w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg "
                src={ResultLoader}
                alt=""
              />
              <span className="text-3xl font-bold text-blue-800 ">
                Fetching your result
              </span>
            </div>
          ) : (
            <ResultCard feedback={feedback} />
          )}
        </div>
        <div className="relative">
          {' '}
          {feedback?.type_of_interview == 'Technical' ? (
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-4 text-center mt-8 cursor-pointer "
              onClick={() => {
                toggleQAModal()
                callApi()
                setLoading(true)
              }}
            >
              {loading ? (
                <div className="flex  items-center gap-2">
                  Please Wait
                  <ImSpinner11 className="animate-spin" />
                </div>
              ) : (
                'Click Here to see Detailed Analysis'
              )}
            </button>
          ) : null}
        </div>
      </div>
      {showModal && !loading && (
        <ResultModal toggleQAModal={toggleQAModal} data={data} />
      )}
      {/* {loading && <div>Loading......</div>} */}
    </>
  )
}

export default Result
