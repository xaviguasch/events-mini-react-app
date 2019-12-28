import React, { useState } from 'react'

function App() {
    const [name, setName] = useState('')
    const [headingText, setHeading] = useState('')

    function handleChange(event) {
        setName(event.target.value)
    }

    function handleClick(event) {
        setHeading(name)

        event.preventDefault()
    }

    return (
        <div className='container'>
            <h1>Hello {headingText}</h1>
            <form onSubmit={handleClick}>
                <input
                    onChange={handleChange}
                    type='text'
                    placeholder="What's your name?"
                    value={name}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default App

// import React, { useState } from 'react'

// function App() {
//     const [headingText, setHeadingText] = useState('Hello')

//     const [isMousedOver, setMouseOver] = useState(false)

//     function handleClick() {
//         setHeadingText('Submited!')
//     }

//     function handleMouseOver() {
//         setMouseOver(true)
//     }

//     function handleMouseOut() {
//       setMouseOver(false)
//     }

//     return (
//         <div className='container'>
//             <h1>{headingText}</h1>
//             <input type='text' placeholder="What's your name?" />
//             <button
//                 style={{
//                     backgroundColor: isMousedOver ? 'black' : 'white'
//                 }}
//                 onClick={handleClick}
//                 onMouseOver={handleMouseOver}
//                 onMouseOut={handleMouseOut}
//             >
//                 Submit
//             </button>
//         </div>
//     )
// }

// export default App
