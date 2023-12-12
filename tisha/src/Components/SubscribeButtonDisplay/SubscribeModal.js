import * as React from 'react';
import { Box, Container, Modal, Stack, Typography } from '@mui/material';
import SubscribeButtonImage from '../ImageDisplay/SubscribeButtonImage';
import SubscribeButtonFormControl from './SubscribeButtonFormControl';
import CloseIcon from '@mui/icons-material/Close';
import MobileSubscribeModal from './MobileSubscribeModal';

export default function SubscribeModal(props) {
	const { open, handleClose } = props;

	const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				sx={{
					backdropFilter: 'blur(2px)',
					display: { xs: 'none', sm: 'flex' },
				}}
			>
				<Container
					sx={{
						display: { xs: 'none', sm: 'flex' },
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							backgroundColor: '#E6E2DF',
							maxWidth: { sm: 700, md: 800 },
							height: '100vh',
							width: '100vw',
							maxHeight: isSafari ? { sm: 580, md: 580 } : { sm: 440, md: 435 },
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
						}}
					>
						{isSafari ? (
							<>
								<Stack
									direction="column"
									spacing={3}
									sx={{
										alignItems: 'center',
										justifyContent: 'center',
										margin: 4,
										padding: 4,
										background: '#F5F5F5',
										borderRadius: '8px',
										boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
									}}
								>
									<CloseIcon
										sx={{
											alignSelf: 'flex-end',
											cursor: 'pointer',
											fontSize: 24,
											color: '#72320A',
										}}
										onClick={handleClose}
									/>
									<Typography
										variant="h4"
										sx={{
											color: '#72320A',
											textTransform: 'uppercase',
											fontWeight: 'bold',
											letterSpacing: '2px',
											fontFamily: 'Inter, sans-serif',
											fontSize: { xs: 24, sm: 30, md: 35, lg: 40 },
										}}
									>
										Stay Connected
									</Typography>
									<Typography
										variant="body1"
										sx={{
											width: '100%',
											textAlign: 'center',
											fontFamily: 'Inter, sans-serif',
											fontSize: { xs: 16, lg: 18 },
											color: '#72320A',
											marginTop: 2,
										}}
									>
										Subscribe now for a dose of inspiration and early access to
										new releases and exciting events. Join our community of
										positivity seekers today!
									</Typography>
									<SubscribeButtonFormControl />
								</Stack>
							</>
						) : (
							<>
								<SubscribeButtonImage />
								<Stack direction="column" spacing={1} ml={5} mt={2}>
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
										Subscribe now for a dose of inspiration and early access to
										new releases and exciting events. Join our community of
										positivity seekers today!
									</Typography>
									<SubscribeButtonFormControl />
								</Stack>
							</>
						)}
					</Box>
				</Container>
			</Modal>
			<MobileSubscribeModal open={open} handleClose={handleClose} />
		</div>
	);
}
