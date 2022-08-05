import AnimatedText from "./AnimatedText";
import SocialIcons from "./SocialIcons";

export default function Header() {
    return (
        <header className="header">
            <article className="vertical-center">
                <h1>
                    <AnimatedText
                        initialText="I'm"
                        animatedTextArray={[
                            "Rasmus Cederdorff.",
                            "a Freelancer.",
                            "a Senior Lecturer.",
                            "a Web Developer.",
                            "an App Developer.",
                            "a Web Architect.",
                            "a Teacher."
                        ]}
                    />
                </h1>
                <p>Web App Developer | Senior Lecturer</p>
                <SocialIcons />
            </article>
        </header>
    );
}
