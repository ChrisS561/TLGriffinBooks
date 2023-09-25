import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {
	Box,
	Container,
	FormControl,
	InputLabel,
	Modal,
	Select,
	Typography,
} from '@mui/material';

export default function SubscribeButton() {
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<Button
				onClick={handleOpen}
				sx={{
					my: 2,
					color: 'black',
					display: { xs: 'none', sm: 'block' },
					fontSize: 15,
					fontFamily: 'inter',
					margin: '1rem',
				}}
			>
				Subscribe
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
                <Container>
				<Box>
					<Typography>Hi</Typography>
				</Box>
                </Container>
			</Modal>
		</div>
	);
}
