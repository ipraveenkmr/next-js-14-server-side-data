

export default function Index(data) {

    return (
        <>
            <h2>Category</h2>
            Name: {data.data[0].name}
            {data.data.map((item, index) => (
                <div key={index}>
                    {item.name}
                </div>
            ))}
        </>
    );
}

export async function getServerSideProps() {

    const response = await fetch('http://localhost:3000/api/users');
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        return { props: { data } }
    } else {
        console.error('Failed to fetch data:', response.statusText);
        return null;
    }


}
