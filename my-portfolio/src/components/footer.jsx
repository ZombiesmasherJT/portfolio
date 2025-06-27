import React from "react";
import "../Footer.css";



function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Joshua Tite. All rights reserved.</p>
            <div className="footer-socials">
                <a href="https://www.linkedin.com/jobs/?mcid=7083157643439083520&src=go-pa&trk=sem-ga_campid.20352247597_asid.152657623844_crid.732549151391_kw.linkedin_d.c_tid.kwd-296170574619_n.g_mt.e_geo.1007012&cid=&gad_source=1&gad_campaignid=20352247597&gbraid=0AAAAABIeiSr-MfYg0Y9m_xjCHQwt-PHhs&gclid=Cj0KCQjwgvnCBhCqARIsADBLZoJyQ9CqY5SFyBTuAsFwKVyi_1UJOwc8WQxoA_KwwvNRo653Gd4TeX4aApuxEALw_wcB&gclsrc=aw.ds"
                    target="_blank"
                    rel="noopener noreferrer">linkedin</a>
                <a href="https://github.com/ZombiesmasherJT"
                    target="_blank"
                    rel="noopener noreferrer">Github</a>
            </div>
        </footer>
    );

}

export default Footer;