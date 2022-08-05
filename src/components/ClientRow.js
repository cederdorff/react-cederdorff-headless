export default function ClientRow({ client }) {
    function getFeaturedImageUrl() {
        let imageUrl = "";
        if (client._embedded) {
            imageUrl = client._embedded["wp:featuredmedia"][0].source_url;
        }
        return imageUrl;
    }

    return (
        <section className="client-row">
            <article>
                <h3>{client.title.rendered}</h3>
                <div dangerouslySetInnerHTML={{ __html: client.content.rendered }}></div>
            </article>
            <figure>
                <img src={getFeaturedImageUrl()} alt={client.title.rendered} />
            </figure>
        </section>
    );
}
