const httpHelper = () => {

    const baseUrl = "http://localhost:5000";

	const customFetch = async (endpoint, options = {}) => {
		const defaultMethod = "GET"
		const defaultHeaders = {
			"Content-Type": "application/json",
			Accept: "application/json",
		}
		const controller = new AbortController()
		options.signal = controller.signal

		options.method = options.method || defaultMethod
		options.headers = options.headers
			? { ...defaultHeaders, ...options.headers }
			: defaultHeaders

		options.body = JSON.stringify(options.body) || false
		if (!options.body) delete options.body

		setTimeout(() => {
			controller.abort()
		}, 3000)

		try {
			const response = await fetch(baseUrl + endpoint, options)
			return await response.json()
		} catch (err) {
			return err
		}
	}

	const get = (endpoint, options = {}) => customFetch(endpoint, options)

	const post = (endpoint, options) => {
		options.method = "POST"
		return customFetch(endpoint, options)
	}

	const put = (endpoint, options) => {
		options.method = "PUT"
		return customFetch(endpoint, options)
	}

	const del = (endpoint, options) => {
		options.method = "DELETE"
		return customFetch(endpoint, options)
	}

	return {
		get,
		post,
		put,
		del,
	}
}

export default httpHelper;