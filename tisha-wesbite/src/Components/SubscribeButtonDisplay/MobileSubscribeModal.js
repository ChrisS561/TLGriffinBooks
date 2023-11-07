import * as React from 'react';
import { Box, Container, Modal, Stack, Typography } from '@mui/material';
import SubscribeButtonFormControl from './SubscribeButtonFormControl';
import CloseIcon from '@mui/icons-material/Close';

export default function MobileSubscribeModal(props) {
    const {open,handleClose} = props;
	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				sx={{
					backdropFilter: 'blur(2px)',
					display: { xs: 'flex', sm: 'none' },
				}}
			>
				<Container
					sx={{
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							backgroundColor: '#E6E2DF',
							maxWidth: { xs: 400, sm: 700, md: 800 },
							height: '100vh',
							width: '100vw',
							maxHeight: 450,
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
						}}
					>
						<Stack direction="column" spacing={1} ml={5} mt={3}>
							<CloseIcon
								sx={{ alignSelf: 'flex-end', mr: 2, cursor: 'pointer' }}
								onClick={handleClose}
							/>
							<Typography
								variant="h5"
								sx={{
									display: 'block',
									color: '#72320A',
									textTransform: 'capitalize',
									fontWeight: 'bold',
									letterSpacing: '2px',
									fontFamily: 'inter',
									fontSize: { sm: 18, md: 20, lg: 25, xl: 30 },
								}}
								gutterBottom
							>
								STAY CONNECT
							</Typography>
							<Typography
								variant="body1"
								sx={{
									display: 'block',
									width: '80%',
									textAlign: 'left',
									letterSpacing: { sm: '0', md: '0.1px', lg: '1.5px' },
									fontFamily: 'inter',
									fontSize: { xs: 13, lg: 12 },
									color: '#72320A',
								}}
							>
								Subscribe now for a dose of inspiration and early access to new
								releases and exciting events. Join our community of positivity
								seekers today!
							</Typography>
							<SubscribeButtonFormControl />
						</Stack>
					</Box>
				</Container>
			</Modal>
		</div>
	);
}
