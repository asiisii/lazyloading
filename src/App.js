import React, { useRef, useEffect, useState } from 'react'
import ListingPageComponent from './ListingPageComponent'

const App = () => {
	const listInnerRef = useRef()
	const [currPage, setCurrPage] = useState(1)
	const [prevPage, setPrevPage] = useState(0)
	const [userList, setUserList] = useState([])
	const [lastList, setLastList] = useState(false)

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				`https://api.instantwebtools.net/v1/passenger?page=${currPage}&size=10`
			)
			const data = await response.json()

			if (!data.data.length) {
				setLastList(true)
				return
			}
			setPrevPage(currPage)
			setUserList([...userList, ...data.data])
		}
		if (!lastList && prevPage !== currPage) {
			fetchData()
		}
	}, [currPage, lastList, prevPage, userList])

	const onScroll = () => {
		if (listInnerRef.current) {
			const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current
			if (Math.ceil(scrollTop + clientHeight) >= scrollHeight) {
				setCurrPage(currPage + 1)
			}
		}
	}

	return (
		<ListingPageComponent
			onScroll={onScroll}
			listInnerRef={listInnerRef}
			userList={userList}
		/>
	)
}

export default App
