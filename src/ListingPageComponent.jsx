import { React } from 'react'

function ListingPageComponent({ onScroll, listInnerRef, userList }) {
	return (
		<div>
			<div
				onScroll={onScroll}
				ref={listInnerRef}
				style={{ height: '100vh', overflowY: 'auto' }}
			>
				{userList.map((item, index) => {
					return (
						<div
							key={index}
							style={{
								marginTop: '40px',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								flexDirection: 'column',
							}}
						>
							<strong>
								<p>Name: {item.name}</p>
								<p>Trips: {item.airline[0].country}</p>
								<p>Trips: {item.airline[0].name}</p>
								<p>Trips: {item.trips}</p>
							</strong>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default ListingPageComponent
