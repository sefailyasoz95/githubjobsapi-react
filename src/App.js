import useFetchJobs from "./useFetchJobs";
import { Container } from "react-bootstrap";
import { useState } from "react";
import Jobs from "./Jobs";
import Loading from "./Loading";
import JobsPagination from "./JobsPagination";
import SearchForm from "./SearchForm";

function App() {
	const [params, setParams] = useState({});
	const [page, setPage] = useState(1);
	const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

	const handleParamChange = (e) => {
		const param = e.target.name;
		const value = e.target.value;
		setPage(1);
		setParams((prevParams) => {
			return { ...prevParams, [param]: value };
		});
	};
	return (
		<Container className='my-4'>
			<h1 className='mb-4 text-center'>GitHub Jobs</h1>
			<SearchForm params={params} onParamChange={handleParamChange} />
			<JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
			{loading && <Loading />}
			{error && <h1>error...</h1>}
			{jobs.map((job) => {
				return <Jobs key={job.id} job={job} />;
			})}
			<JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
		</Container>
	);
}

export default App;
