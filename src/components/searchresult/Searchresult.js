import SearchList from './SearchList'
import '../../style/searchresult/Searchresult.css'
import Searchskeleton from './Searchskeleton'

const Searchresult = ({ searchItem, searchedList, isLoading }) => {
  return (
    <div className='searchresult'>
        <h2>Search results :</h2>
        {isLoading && <Searchskeleton />}
        {!isLoading && <SearchList 
          searchedList = {searchedList}
        />}
    </div>
  )
}

export default Searchresult