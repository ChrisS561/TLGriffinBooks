import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/Firebase';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const columns = [
	{ field: 'id', headerName: 'ID', width: 200 },
	{ field: 'firstName', headerName: 'First name', width: 200 },
	{ field: 'lastName', headerName: 'Last name', width: 200 },
	{
		field: 'email',
		headerName: 'Email',
		type: 'string',
		width: 200,
	},
];

async function fetchData() {
	const querySnapshot = await getDocs(collection(db, 'users'));
	const rows = querySnapshot.docs.map((doc) => ({
		id: doc.id,
		lastName: doc.data().lastname,
		firstName: doc.data().firstname,
		email: doc.data().email,
	}));
	return rows;
}

export default function Subscribers(props) {
	const [rows, setRows] = React.useState([]);
	const [loading, setloading] = React.useState(true);

	React.useEffect(() => {
		const getData = async () => {
			try {
				const data = await fetchData();
				setRows(data);
			} catch (error) {
				console.error('Error fetching data:', error);
			} finally {
				setloading(false);
			}
		};

		getData();
	}, []);

	return loading ? (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}
		>
			<CircularProgress size={100} />
		</Box>
	) : (
		<div style={{ height: '100vh', width: '100%' }}>
			<DataGrid
				rows={rows}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: { page: 0, pageSize: 10 },
					},
				}}
				pageSizeOptions={[10, 20]}
				checkboxSelection
			/>
		</div>
	);
}
