import "./Footer.css";

function Footer({ variant = "main"}) {

    const variantModifier = `footer_variant_${variant}`;

    const year = new Date().getFullYear();
    
    return (
    <footer className={`footer ${variantModifier}`}>
        <p>&copy; {year} ATMOS Weather. All rights reserved.</p>
    </footer>
    );
}

export default Footer;