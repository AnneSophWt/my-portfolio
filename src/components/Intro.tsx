import profileImage from "/assets/Intro-me.png";
import Title from "./Title";

function Intro() {
    return (
        <div id="intro"
        className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-5xl mb-1 md:mb-3 font-bold">Welcome to My Page 💞</h1>
            <h2 className="text-md max-w-xl mb-6 font-bold">私のサイトにようこそ！</h2>
             <div className="w-35 h-35 md: w-32 rounded-xl overflow-hidden mb-4 shadow-lg">
                <img
                src={profileImage}
                alt="Anne-Sophie Woite"
                className="w-full h-full object cover"
                />
            </div>
            <Title id="about-title">About me</Title>
            <p className="text-base md:text-xl mb-3 font-medium">Beginner frontend dev & UX Designer</p>
            <p className="text-sm max-w-xl mb-6 font-bold"> I'm Anne-Sophie, 25 years old living in cologne Germany. I have a bachelor degree in media and marketing management and currently working as a production assistent and in the festival management.<br /> In september I'm going to start my master in UX design. I started with coding in march and since then it is one of my favorite hobbys to do, I would love to work in the tech industry! I have many different hobbys, from baking and cooking to reading books/manga, drawing and generally be creative. <br /> You can find all my little coding projects I did so far on my GitHub {' '}
                <a
                    href="https://github.com/AnneSophWt"
                    target="_blank"
                    className="text-fuchsia-950 hover:underline underline-offset-2 decoration-2 decoration-fuchia-700"
                    rel="noreferrer noopener"
                >
                    AnneSophWt
                </a>{' '}
                so feel free to check them out! {' '}
            </p>
    </div>
    )
}

export default Intro;