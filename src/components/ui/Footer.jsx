
const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className="footer mt-5 py-3 fixed-bottom bg-light">
            <div className="container text-center">
                <span className="text-muted">&copy; Copyright { year } ANALISIS FASORIAL - Desarrollado por Kevin Echeverri.</span>
            </div>
        </footer>

    );
};

export default Footer;
