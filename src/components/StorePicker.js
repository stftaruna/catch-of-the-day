import React from 'react';



class StorePicker extends React.Component {
    render() {
        return (
            <form className="store-selector">
                <h2> Please Enter Store Name</h2>
                <input type="text" required placeholder="Store Name"/>
                <button type="submit">Visit Store >></button>
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