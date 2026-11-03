import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Filter from './components/Filter'
import ContentList from './components/ContentList'

function App () {
    const [search, setSearch] = useState("")

    return (
        <div className='flex flex-col bg-[#F4FBFF] min-h-screen'>
            <Header/>
            <div className='flex-1 max-w-[1200px] m-auto w-full px-4'>
                <Filter search={search} onSearchChange={setSearch}/>
                <ContentList search={search}/>
            </div>
            <Footer/>
        </div>
    )
}

export default App
