import React from 'react';
import { getFunName } from '../helpers'; // a set of javascript functions to help with formatting and other simple things


class StorePicker extends React.Component {
    storeNameRef = React.createRef()

    goToStore = event => {
        // 1. Stop the page from reloading
        event.preventDefault()
        // 2. get the data from StoreName input field
       const storeName = this.storeNameRef.current.value
        // 3. change the page to /store/whatever
        this.props.history.push(`/store/${storeName}`)
}

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2> Please Enter Store Name</h2>
                <input 
                type="text" 
                ref={this.storeNameRef}
                required placeholder="Store Name"
                defaultValue={getFunName()}
                />
                <button type="submit">Visit Store >></button>
            {/* 
                Q: why not goToStore() like getFunName()?
                A: because () will execute the function on load, but we only want to call goToStore when the button is clicked
            */}
            </form>
        )
    }
}

export default StorePicker;

/* By default, react JSX render() method can only return ONE parent element. 
                    If want to have multiple adjacent elements, use React.Fragment:
                    <React.Fragment>
                        <p>one</p>
                        <div>
                            <p>two</p>
                        </div>
                    </React.Fragment>
                    This rule also applies to commenting, 
                    DO NOT comment outside element as it will give out errors.
                    Only comment inside the element */