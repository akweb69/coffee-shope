import Banner from "./Banner";
import CardContainer from "./CardContainer";

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="py-20 w-full bg-bgCardContainer bg-center bg-no-repeat bg-cover ">
                <CardContainer></CardContainer>
            </div>
        </div>
    );
};

export default HomePage;