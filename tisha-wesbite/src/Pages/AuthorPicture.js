import React from 'react'
import AuthorPic from "../Images/AuntTisha.jpg"
import AuthorPic1 from "../Images/AuntTisha.png"
import "../index.css"

export default function AuthorPicture() {
  return (
		<div className="">
			<img
				src={AuthorPic1}
				alt="Profile"
				className=" author-Picture "
        loading='lazy'
			/>
		</div>
	);
}
