import React, { useState } from "react";
import { Button, Card, Badge, Collapse } from "react-bootstrap";
import ReactMarkDown from "react-markdown";
import "./Jobs.css";
const Jobs = ({ job }) => {
	const [open, setOpen] = useState(false);
	return (
		<Card className='mb-3 border-dark cardStyle'>
			<Card.Body className='cardStyle'>
				<div className='d-flex justify-content-between'>
					<div>
						<Card.Title>
							{job.title} -{" "}
							<span className='text-muted font-weight-light'>
								{job.company}
							</span>
						</Card.Title>
						<Card.Subtitle className='text-muted mb-2'>
							{new Date(job.created_at).toUTCString()}
						</Card.Subtitle>
						<Badge variant='secondary' className='mr-2'>
							{job.type}
						</Badge>
						<Badge variant='secondary'>{job.location}</Badge>
						<div style={{ wordBreak: "break-all" }}>
							<ReactMarkDown source={job.how_to_apply} />
						</div>
					</div>
					<img
						src={job.company_logo}
						alt={job.company}
						className='d-none d-md-block'
						height='50'
					/>
				</div>
				<Card.Text>
					<Button
						onClick={() => {
							setOpen(!open);
						}}
						variant='primary'>
						{open ? "Hide" : "View"} Details
					</Button>
				</Card.Text>
				<Collapse in={open}>
					<div className='mt-4'>
						<ReactMarkDown source={job.description} />
					</div>
				</Collapse>
			</Card.Body>
		</Card>
	);
};

export default Jobs;
