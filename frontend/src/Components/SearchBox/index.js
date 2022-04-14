import React from 'react'
import { FormControl, InputGroup } from 'react-bootstrap';
import { MdSearch } from 'react-icons/md';

const SearchBox = ({ searchQuery, setSearchQuery }) => {
    return (
        <InputGroup>
            <InputGroup.Text>
                <MdSearch />
            </InputGroup.Text>
            <FormControl placeholder='Search...' onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} />
        </InputGroup>
    )
}

export default SearchBox;