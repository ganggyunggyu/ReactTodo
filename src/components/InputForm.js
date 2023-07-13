import React from 'react'
import { Link } from 'react-router-dom'

export default function InputForm({titleInput, addTitleValue, contentInput, addContentValue, addInputBtn, clearValue }) {
    return (
        <div>
            <form className="add-input-box flex-box">
                <input className='input-style title-input' type="text" value={titleInput} onChange={(e) => { addTitleValue(e) }} />
                <input className='input-style content-input' type="text" value={contentInput} onChange={(e) => { addContentValue(e) }} />
                <input className='add-btn btn' type="button" value="등록" onClick={() => { addInputBtn(); clearValue() }} />
            </form>
        </div>
    )
}
