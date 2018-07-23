import React from 'react';

class AddFishForm extends React.Component {
    nameRef = React.createRef()
    priceRef = React.createRef()
    statusRef = React.createRef()
    descRef = React.createRef()
    imageRef = React.createRef()

    createFish = e => {
        // stop page from reloading
        e.preventDefault()

        // get fish values from form
        const fish = {
            name: this.nameRef.current.value,
            price: this.priceRef.current.value,
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value
        }

        // add fish to state
        this.props.addFish(fish)

        // clear form
        e.currentTarget.reset()
    }

    render() {
        return (
        <form className="fish-edit" onSubmit={this.createFish}>
            <input name="name" ref={this.nameRef} type="text" placeholder="Name"/>
            <input name="price" ref={this.priceRef} type="text" placeholder="Price"/>
            <select name="status" ref={this.statusRef}>
                <option value="avaiable">Fresh</option>
                <option value="unavaiable">Sold Out</option>
            </select>
            <textarea name="desc" ref={this.descRef} placeholder="Desc"/>
            <input name="image" type="text" ref={this.imageRef} placeholder="Image"/>
            <button type="submit">Add Fish +</button>
        </form>
        )
    }
}

export default AddFishForm;