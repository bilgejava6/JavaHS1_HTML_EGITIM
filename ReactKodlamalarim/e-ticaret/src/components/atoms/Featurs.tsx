import React from "react";

interface FeatursProps {
    icon: string,
    title: string,
    content: string
}

function Featurs(props: FeatursProps) {
    const icon = ()=>{
        switch (props.icon) {
            case 'car':
                return <i className="fas fa-car-side fa-3x text-white"></i>
            case 'user':
                return <i className="fas fa-user-shield fa-3x text-white"></i>
            case 'exchange':
                return <i className="fas fa-exchange-alt fa-3x text-white"></i>
            case 'phone':
                return <i className="fa fa-phone-alt fa-3x text-white"></i>        
            default: <i className="fas fa-car-side fa-3x text-white"></i> 
        }
    }
	return (
		<div className="col-md-6 col-lg-3">
			<div className="featurs-item text-center rounded bg-light p-4">
				<div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">					
                    {icon()}
				</div>
				<div className="featurs-content text-center">
					<h5>{props.title}</h5>
					<p className="mb-0">{props.content}</p>
				</div>
			</div>
		</div>
	);
}

export default Featurs;
