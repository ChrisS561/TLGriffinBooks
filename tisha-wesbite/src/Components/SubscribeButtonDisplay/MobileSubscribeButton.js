import * as React from 'react';
import Button from '@mui/material/Button';
import SubscribeButtonModal from './SubscribeButtonModal';
import { Box } from '@mui/material';

export default function MobileSubscribeButton(props) {
    const {handleOpen,handleClose,open} = props
	return (
		<>
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
