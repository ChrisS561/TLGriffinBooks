import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box, FormControl, InputLabel, Select } from '@mui/material';

export default function BooksButton() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [books, setBooks] = React.useState('');
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleChange = (event) => {
		setBooks(event.target.value);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<Button
				id="basic-button"
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
				sx={{
					my: 2,
					color: '#4E5865',
					display: { xs: 'none', md: 'block' },
					fontSize: 15,
					fontFamily: 'inter',
					margin: '1rem',
				}}
			>
				Books
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<MenuItem onClick={handleClose}>A Women's Worth</MenuItem>
			</Menu>

			<div>
				<Box
					sx={{
						minWidth: 100,
						display: { xs: 'block', md: 'none' },
						color: '#4E5865',
					}}
				>
					<FormControl fullWidth>
						<InputLabel
							id="demo-simple-select-label"
							sx={{ alignSelf: 'center' }}
						>
							Books
						</InputLabel>
						<Select
							labelId="select-label"
							id="select"
							value={books}
							label="Books"
							onChange={handleChange}
						>
							<MenuItem value={'book1'}>A Women's Worth</MenuItem>
						</Select>
					</FormControl>
				</Box>
			</div>
		</div>
	);
}
