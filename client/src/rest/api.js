import axios from "axios";

const URL = "https://blockminingsite-dqqwx.run.goorm.io/api/blocks";

class API {
	get = async () => {
		try {
			const json = await axios.get(URL);
			console.log(json.data);
			return json.data;
		} catch(err) {
			console.log(err);
			throw new Error("Invalid GET request");
		}
	}
	
	post = async (formData) => {
		const config = {
			headers: { 
				"Content-Type": "application/json" 
			}
		};
		try {
			const result = await axios.post(URL, formData, config);
			console.log(result)
			return result;
		} catch(err) {
			console.log(err);
			throw new Error("Invalid POST request")	;
		}
		
	}
}

export default API