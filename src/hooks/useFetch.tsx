import React, { useState, useEffect, useCallback } from 'react'



export function useFetch<D> (api: string , initialData: any ) {
	const [data, setData] = useState<D>(initialData)

	const getData = useCallback(() => {
		const error = () => {
			console.log(`${api} data fail!`)
		}
		fetch(api)
			.then((res) => res.json())
			.then((data) => setData(data))
			.catch(error)
	}, [api])

	useEffect(() => {
		getData()
	}, [getData])

	return { data }
}
