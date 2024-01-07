
export default async function Page() {

    async function create() {
        'use server'
        const response = await fetch('http://localhost:3000/api/users');
        if (response.ok) {
            const json = await response.json();
            console.log(json);
            return json;
        } else {
            console.error('Failed to fetch data:', response.statusText);
            return null;
        }
    }

    const data = await create();

    return (
        <>
            <h2>Users Details</h2>
            Name: {data[0].name}
            {data.map((item, index) => (
                <div key={index}>
                    {item.name}
                </div>
            ))}
        </>
    )

}