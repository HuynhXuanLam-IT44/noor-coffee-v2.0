import React, { useEffect } from "react";
import MembershipContainer from "../../containers/Membership/Membership";
const Membership = () => {
	useEffect(() => {
		document.title = "Thành viên - NOOR - Coffee & Tea - Coworking Cafe";
	}, []);
	return <MembershipContainer />;
};

export default Membership;
