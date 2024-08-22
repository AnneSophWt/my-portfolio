import Title from "./Title";

function Contacts() {
    return (
        <div id="contact"
        className="flex flex-col mb-10 mx-auto">
           <Title id="contact-title">Contacts</Title>
            <p className="text-md md: text-md mb-2 md:mb-3 text-center">You can reach me at <span className="font-bold">woite.anne_sophie@icloud.com</span> or by calling the following phone number <span className="font-bold"> +49 177 77 545 70</span> </p>
        <div className="flex justify-center space-x-4">
            <a href="https://www.instagram.com/annesophie_wt/" target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-instagram text-5xl cursor-pointer"></i>
                </a>
            <a href="https://www.xing.com/profile/AnneSophie_Woite068572/web_profiles?expandNeffi=true" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-xing text-5xl cursor-pointer" ></i>
                </a>
            </div>
            </div> 
            
    )
}

export default Contacts;