
const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer class="footer mt-auto py-3 bg-light">
            <div class="container text-center">
                <span class="text-muted">&copy; Copyright { year } ANALISIS FASORIAL - Desarrollado por Kevin Echeverri.</span>
            </div>
        </footer>

    );
};

export default Footer;
