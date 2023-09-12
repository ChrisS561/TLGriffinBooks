import React from 'react'
import AuthorPic from "../Images/AuntTisha.jpg"
import "../index.css"

export default function AuthorPicture() {
  return (
		<div className="">
			<img
				src={AuthorPic}
				alt="Profile"
				className=" author-Picture "
        loading='lazy'
			/>
		</div>
	);
}
