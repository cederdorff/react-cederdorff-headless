import ClientRow from "./ClientRow";
import { useEffect, useState } from "react";

export default function ClientsSection() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        async function getClients() {
            const res = await fetch("https://react-api.cederdorff.com/wp-json/wp/v2/posts?_embed");
            const data = await res.json();
            console.log(data);
            setClients(data);
        }

        getClients();
    }, []);

    return (
        <section id="clients">
            <div className="headline-container">
                <h2>Clients</h2>
            </div>
            {clients.map(client => (
                <ClientRow client={client} key={client.id} />
            ))}
        </section>
    );
}
