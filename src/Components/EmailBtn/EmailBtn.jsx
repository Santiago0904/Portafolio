import React from 'react'

export const EmailBtn = () => {
  return (
    <div className="flex items-center gap-6">
    {/* Correo */}
    <a
      href="mailto:neo@metacortex.com"
      className="flex items-center gap-2 bg-green-600 text-white px-3 py-1 rounded-full text-sm hover:bg-green-700 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8V6a2 2 0 00-2-2H5a2 2 0 00-2 2v2m18 0v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8m18 0l-9 6-9-6"
        />
      </svg>
      santiago.bustos0409@gmail.com
    </a>
    </div>
  )
}

