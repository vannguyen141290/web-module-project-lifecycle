import React from 'react';

class Search extends React.Component {


    render() {
        return (
            <div className='search-bar'>
                <input placeholder='search by username...' name='searchTerm' type='text' onChange={this.props.handleChange} value={this.props.searchTerm} />
            </div>
        )
    }

}

export default Search;