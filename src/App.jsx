import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import Card from './components/general/Card';
import Footer from './components/layout/Footer';

function App() {
    return (
        <div className="App">
            <Header/>
            <Navigation/>
            <main className="main">
                <div className="card__list container">
                    <Card name="YouTube"/>
                    <Card name="Google"/>
                    <Card name="Instagram"/>
                    <Card name="Facebook"/>
                    <Card name="Yahoo"/>
                    <Card name="Microsoft"/>
                    <Card name="Wikipedia"/>
                    <Card name="Twitter"/>
                    <Card name="Amazon"/>
                    <Card name="Ebay"/>
                    <Card name="Apple"/>
                    <Card name="Paypal"/>
                    <Card name="Rapidshare"/>
                    <Card name="Adobe"/>
                    <Card name="TikTok"/>
                    <Card name="Minecraft"/>
                    <Card name="Steam"/>
                    <Card name="Dribbble"/>
                    <Card name="Behance"/>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
