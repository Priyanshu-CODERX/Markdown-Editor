import React, {useState} from 'react'
import './App.css'
import ReactMarkdown from 'react-markdown'

function Markdown() {
	const [md, setMd] = useState("Welcome To Markdown")
	return (
		<>
			<div className="center-div">
				<textarea className="left-side"
				value={md} 
				onChange={(e) => setMd(e.target.value)}></textarea>
				<div className="right-side"><ReactMarkdown>{md}</ReactMarkdown></div>
			</div>	
		</>
	)
}

export default Markdown