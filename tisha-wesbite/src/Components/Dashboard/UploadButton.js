import React, { useState } from 'react';
import { storage } from '../../Firebase/Firebase';
import { ref, uploadBytes } from 'firebase/storage';
import Typography from '@mui/material/Typography';

export default function UploadButton() {
	const [selectedFile, setSelectedFile] = useState(null);
	const [isSelected, setIsSelected] = useState(false);
	const [message, setMessage] = useState('');

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};

	const handleSubmission = () => {
		if (selectedFile === null) return;
		const imageRef = ref(
			storage,
			`${process.env.REACT_APP_FIREBASE_STORAGE_PATH}/${selectedFile.name}`
		);
		uploadBytes(imageRef, selectedFile)
			.then(() => {
				setMessage('Image Upload');
			})
			.catch((e) => {
				setMessage('There was an error:', e.message);
			});
		console.log('File submitted:', selectedFile);
	};

	return (
		<div>
			<input type="file" name="file" onChange={changeHandler} />

			{isSelected ? (
				<div>
					<Typography variant="subtitle1">
						Filename: {selectedFile.name}
					</Typography>
					<Typography variant="subtitle1">
						Filetype: {selectedFile.type}
					</Typography>
					<Typography variant="subtitle1">
						Size in bytes: {selectedFile.size}
					</Typography>
					<Typography variant="subtitle1">
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</Typography>
				</div>
			) : (
				<Typography variant="subtitle1">
					Select a file to show details
				</Typography>
			)}

			<div>
				<button variant="contained" color="primary" onClick={handleSubmission}>
					Submit
				</button>
				<Typography
					variant="body1"
					style={{ marginTop: '10px', color: 'green' }}
				>
					{message}
				</Typography>
			</div>
		</div>
	);
}
