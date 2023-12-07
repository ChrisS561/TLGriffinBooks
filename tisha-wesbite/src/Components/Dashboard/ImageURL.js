import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import Button from '@mui/material/Button'



const columns = [
	{ field: 'id', headerName: 'ID', width: 200 },
	{ field: 'name', headerName: 'Name', width: 400 },
	{ field: 'url', headerName: 'URL', width: 2000 },
];

export default function ImageUrl(props) {
	const [rows, setRows] = React.useState([]);
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		const getData = async () => {
			const storage = getStorage();
			const listRef = ref(storage, process.env.REACT_APP_FIREBASE_STORAGE_PATH);

			try {
				const res = await listAll(listRef);

				const newData = [];
				for (const itemRef of res.items) {
					const downloadURL = await getDownloadURL(itemRef);
					newData.push({
						id: uuidv4(),
						name: itemRef.name,
						url: downloadURL,
					});
				}

				setRows(newData);
				setLoading(false);
			} catch (error) {
				console.error(error);
				setLoading(false);
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
		<>
        <Button>
            
        </Button>
        <>
			<div style={{ height: '100vh', width: '100%' }}>
				<DataGrid
					rows={rows}
					columns={columns}
					pageSize={10}
					checkboxSelection
				/>
			</div>
            </>
		</>
	);
}
