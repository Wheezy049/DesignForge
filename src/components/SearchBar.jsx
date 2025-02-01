import React, { useState } from 'react'
import { Search } from 'lucide-react'

function SearchBar() {

  const [searchValue, setSearchValue] = useState('')

  return (
    <div className='w-full rounded-[100px] border border-[#D0D5DD] bg-white py-5 px-4 flex gap-3 items-center'>
        <Search size={24} color='#667185'/>
        <input type='text' placeholder='Browse design projects from professionals' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}  className='bg-transparent w-full outline-none text-[#98A2B3] text-base font-normal'/>
    </div>
  )
}

export default SearchBar