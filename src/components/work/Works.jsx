import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { projectsData } from "./Data";
import { projectNav } from "./Data";
import WorkItem from "./WorkItem";

const Works = () => {
	const [item, setItem] = useState({ name: "all" });
	const [projects, setProjects] = useState([]);
	const [active, setActive] = useState(0);

	useEffect(() => {
		if (item.name === "all") {
			setProjects(projectsData);
		} else {
			const newProjects = projectsData.filter(projects => {
				return projects.category === item.name;
			});
			setProjects(newProjects);
		}
	}, [item]);

	const handleClick = (e, index) => {
		setItem({ name: e.target.textContent });
		setActive(index);
	};

	return (
		<div>
			<div className="work__filters">
				{projectNav.map((item, index) => {
					return (
						<span
							onClick={e => {
								handleClick(e, index);
							}}
							className={`${active === index ? "active-work" : ""} work__item`}
							key={index}
						>
							{item.name}
						</span>
					);
				})}
			</div>

			<div className="work__container container grid">
				{projects.map(item => {
					return <WorkItem item={item} key={item.id} />;
				})}
			</div>
		</div>
	);
};

export default Works;
