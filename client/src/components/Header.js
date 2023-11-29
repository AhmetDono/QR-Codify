import React from 'react'

function Header() {
  return (
    <header className="bg-white border-b border-gray-300 shadow-md ">
        <title>Bootstrap demo</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
        <link href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"></link>
        <div className='h-16 flex items-center justify-between container mx-auto '>
            <img src='https://i.imgur.com/iWNTjHF.png' height={100} width={200} alt='sad'></img>
            <div className=''>Github: AhmetDono</div>
        </div>
    </header>
  )
}

export default Header