import MyFooter from "../widgets/my_footer";
import MyAppBar from "./widgets/my_app_bar";

const Home = () => {
    return (
        <div className="home">
            <MyAppBar/>
            <div className="content">
                <h1>Content</h1>
            </div>
            <MyFooter/>
        </div>
    )
}

export default Home;