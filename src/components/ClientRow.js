import { useState, useEffect } from "react";

export default function ClientRow({ client }) {
    const [image, setImage] = useState("https://cederdorff.github.io/img/logo512.webp");

    useEffect(() => {
        if (client._embedded && client._embedded["wp:featuredmedia"]) {
            setImage(client._embedded["wp:featuredmedia"][0].source_url);
        }
    }, [client._embedded]);

    return (
        <section className="client-row">
            <article>
                <h3 dangerouslySetInnerHTML={{ __html: client.title.rendered }}></h3>
                <div dangerouslySetInnerHTML={{ __html: client.content.rendered }}></div>
            </article>
            <figure>
                <img src={image} alt={client.title.rendered} />
            </figure>
        </section>
    );
}
