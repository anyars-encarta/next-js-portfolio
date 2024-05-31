import React from 'react'

const Loading = ({ type }: {type: string}) => {
    return (
        <div className="flex flex-col text-center mt-10">
            <div className="flex justify-center align-center">
                <div className="w-5 h-5 rounded-full bg-purple mr-10 animate-bounce"></div>
                <div className="w-5 h-5 rounded-full bg-purple mr-10 animate-bounce delay-100"></div>
                <div className="w-5 h-5 rounded-full bg-purple mr-10 animate-bounce delay-200"></div>
            </div>
            <span className='text-xl text-semibold'>Loading {type}...</span>
        </div>
    )
}

export default Loading