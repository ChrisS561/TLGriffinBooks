import * as React from 'react';
import Button from '@mui/material/Button';
import SubscribeModal from './SubscribeModal';
import { Box } from '@mui/material';

export default function MobileSubscribeButton(props) {
    const {handleOpen,handleClose,open} = props
	return (
		<>
			<Box
				sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'center' }}
			>
				<SubscribeModal open={open} handleClose={handleClose} />
				<Button
					onClick={handleOpen}
					sx={{
						my: 2,
						color: '#72320A',
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
