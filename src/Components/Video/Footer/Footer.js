import React from 'react';
import './Footer.scss'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Ticker from "react-ticker";

const Footer = ({channel,description,song}) => {
    return (
        <div className='footer'>
            <div className="footer__text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="footer__ticker">
                    <MusicNoteIcon className='footer__icon'/>
                    <Ticker mode='smooth'>
                        {
                            ({index}) => (
                                <>
                                    <p>{song}</p>
                                </>
                            )
                        }
                    </Ticker>
                </div>

            </div>
            <img  className='footer__record' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/45_rpm_record.png/600px-45_rpm_record.png" alt=""/>
        </div>
    );
};

export default Footer;
