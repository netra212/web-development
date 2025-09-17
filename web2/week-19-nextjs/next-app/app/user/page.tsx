import axios from "axios";

export default async function User(){

    const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");

    const data = response.data;
    console.log("Hiii");

    return <div>
        User Page.
        {data.name}
        {data.email}
    </div>
}


