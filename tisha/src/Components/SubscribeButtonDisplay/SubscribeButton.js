import * as React from 'react';
import Button from '@mui/material/Button';
import SubscribeModal from './SubscribeModal';
import { Box } from '@mui/material';
import MobileSubscribeButton from './MobileSubscribeButton';

export default function SubscribeButton() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

	return (
		<>
			<Box
				sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'center' }}
			>
				<SubscribeModal open={open} handleClose={handleClose} />
				<Button
					onClick={handleOpen}
					sx={{
						my: 2,
						color: '#72320A',
						display: { xs: 'none', sm: 'block' },
						fontSize: 15,
						fontFamily: 'inter',
						margin: '1rem',
					}}
				>
					Subscribe
				</Button>
			</Box>
			<MobileSubscribeButton
				handleOpen={handleOpen}
				handleClose={handleClose}
				open={open}
			/>
		</>
	);
}
