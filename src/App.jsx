// import Navbar from './components/Navbar';

import Footer from './components/ui/Footer';

import AnalisisScreen from './components/AnalisisScreen';


function App () {


    return (
        <>
            {/* <header>
            </header> */}
            {/* <Navbar /> */ }

            {/* MAIN */ }
            <main className="flex-shrink-0 mt-3 mb-5">
                <div className="container">

                    <AnalisisScreen />
                    
                </div>

            </main>



            {/* FOOTER */ }
            <Footer />


        </>
    );
}

export default App;
