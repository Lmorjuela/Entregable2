import React, { useRef } from 'react'
import './styles/forms.css'

const Forms = ({ setInputValue }) => {

    const idLocation = useRef();

    const handleSubmit = e => {
        e.preventDefault()
        setInputValue(idLocation.current.value.trim())
    }


    return (
        <form className='form' onSubmit={handleSubmit}>
            <input className='input'
                placeholder='Enter your city'
                type='text'
                ref={idLocation} />
            <button className='search__btn'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAe1JREFUWEftl4FNxDAQBO8rASoBKgEqASrhqQSoBDoBjeCk1WLH5wQ9j4SlV6IkPo93z/b9Lo6s7Y6MJ/400GlEXEfEeURwz+/tS2GujxHxLM9WiV9RKEFuCyMk2H4t2AjoIiKeCiD+SYLdzfZdAsKeBwuo1mAP6gHNFSu5z7YKqgfkylSDo4haS7/7iMDCUusBvUtvlLgsRfv8CLWwmSsNKPrnAlgM1QLCJuzKdmbBcqWlPQC/mArAvEoMFLqpTKoFpOowMwbMxsw1T3QMvmPQVEJzkGe801hNPgfSIC2rPEc8qPfRCZBLw1XnQGpXL0AG5drao1Aik1gnUMpFB8L3TEYNPLJfJ6ID62rFNvJxKqk1fzyZlwJpEuvAvefdWK7QWqAlWI05Ohm+nfZqma+wkdqt97pISkvfiadXxYBSk3oV0GjZz6qkEywtElfId9hSkA6lH87D/CHO6OiYOocEzCdW2hR7QB5sFor+7Et6xJTU6QHx3OWulh+tGqqUzKnuEnnr3AIsT/c8KLNIu5Jd3tNqk2UabEsJC7CWMSWoirdrinw9gLWCHEJVgFIxtyb/BmEjBRqtVV649YtQM0Czm6J+X4Y6FFCqN7TvkEAO1dwODg2UUCe9ov83gKYqxi2J+yN9/xUayXh0Cn0Ant+CJe1WzdgAAAAASUVORK5CYII="/></button>
        </form>
    )
}

export default Forms