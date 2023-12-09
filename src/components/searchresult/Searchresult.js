import SearchList from './SearchList'
import '../../style/searchresult/Searchresult.css'

const Searchresult = ({ searchItem, searchedList, isLoading }) => {
  return (
    <div className='searchresult'>
        <h2>Search results :</h2>
        {!isLoading && <SearchList 
          searchedList = {searchedList}
        />}
        {/* {console.log(searchedList)} */}
    </div>
  )
}

export default Searchresult