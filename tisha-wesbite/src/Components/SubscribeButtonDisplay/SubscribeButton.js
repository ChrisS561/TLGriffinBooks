import * as React from 'react';
import Button from '@mui/material/Button';
import SubscribeButtonModal from './SubscribeButtonModal';
import { Box } from '@mui/material';

export default function SubscribeButton() {
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
				<SubscribeButtonModal open={open} handleClose={handleClose} />
				<Button
					onClick={handleOpen}
					sx={{
						my: 2,
						color: '#4E5865',
						display: { xs: 'none', sm: 'block' },
						fontSize: 15,
						fontFamily: 'inter',
						margin: '1rem',
					}}
				>
					Subscribe
				</Button>
			</Box>
			<Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
				<SubscribeButtonModal open={open} handleClose={handleClose} />
				<Button
					onClick={handleOpen}
					sx={{
						my: 2,
						color: '#4E5865',
						fontSize: 15,
						fontFamily: 'inter',
						margin: '1rem',
					}}
				>
					Subscribe
				</Button>
			</Box>
		</>
	);
}
 