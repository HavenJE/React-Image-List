// rce is the shortcut 
import React, { Component } from 'react'

export class SearchInput extends Component {

    // onInputChange(event) {
    //     // console.log(event.target.value) // this contains the text the that user will input 
    // }

    state = {
        entry: ''
    }

    onFormSubmit = (event) => {
        event.preventDefault(); 
        // console.log(this.state.entry)
        this.props.onSearchSubmit(this.state.entry)
    }

    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form' action=''>
                    <div className='field'>
                        <div className='ui massive icon input'>
                            <input 
                            type='text' 
                            placeholder='search...' 
                            onChange={(event) =>  this.setState({entry: event.target.value})} 
                            value={this.state.entry}
                            />
                            <i className='search icon'></i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchInput
