import { Grid } from "@mui/material";
import Header from "../components/Header";
import Search from "../components/Search";
import Layout from "../layouts/Layout";


const HomePage = () => {

    return (
        <Layout>
            <Header/>
            <div style={{
                padding: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Search/>
            </div>
        </Layout>
    );
}

export default HomePage