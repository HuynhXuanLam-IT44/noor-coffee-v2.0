import React, { useEffect } from "react";
import FeedbackContainer from "../../containers/Feedback/Feedback";
const Feedback = () => {
	useEffect(() => {
		document.title = "Góp ý - NOOR - Coffee & Tea - Coworking Cafe";
	}, []);
	return <FeedbackContainer />;
};

export default Feedback;
