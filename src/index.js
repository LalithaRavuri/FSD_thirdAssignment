import React from 'react'
import ReactDOM from 'react-dom'
import CommentBox from './commentbox'

function Student(){
    return(
        <CommentBox/>
    )
}

ReactDOM.render(
    <>
    <Student/>
    </>,
    document.getElementById('root')
)