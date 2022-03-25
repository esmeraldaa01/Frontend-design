import  './SideFooter.css'
import logo from '../../assests/logo.png'

import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const SiteFooter = () => {

    return (
        <div className='footer'>
            <a href="http://localhost:3000/">
                <img alt="site-logo" src={logo} width="135px" />
            </a>
            <ul className='low-priority_site-nav'>
                <li>About</li>
                <li>Press</li>
                <li>Blog</li>
                <li>Jobs</li>
                <li>Advertisers</li>
                <li>Publishers</li>
                <li>Developers</li>
                <li>Help Center</li>
            </ul>
            <hr />
            <ul className='legality-links'>
                <li>Privacy and Cookie Policy</li>
                <li>Terms</li>
                <li>Legal notices</li>
                <li>Family filter:<span style={{color: 'black',fontWeight: 'bolder'}}> On</span></li>
                <li>All videos</li>
                <li>Location: <span style={{color: 'black',fontWeight: 'bolder'}}> United States</span></li>
            </ul>
            <div className='subfooter'>
                <div className='socials'>
                    <a href='https://www.facebook.com/Dailymotion'><AiFillFacebook size={20}/></a>
                    <a href='https://twitter.com/Dailymotion'><AiOutlineTwitter size={20}/></a>
                    <a href='https://www.instagram.com/accounts/login/?next=/dailymotion/'><AiOutlineInstagram size={20}/></a>
                </div>
                <p className='copyright'>
                    <span>© 2005 - 2022 Dailymotion - designed with ♥ in Paris, FR</span>
                </p>
            </div>
        </div>
    )
}

export default SiteFooter;