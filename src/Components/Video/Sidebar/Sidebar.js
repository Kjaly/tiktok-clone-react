import React, {useState} from 'react';
import './Sidebar.scss'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import ShareIcon from '@material-ui/icons/Share';

const Sidebar = ({likes,comments,shares}) => {
    const [liked, setLiked] = useState(false)
    return (
        <div className='sidebar'>
            <div className="sidebar__button" onClick={() => {setLiked(!liked)}}>
                {liked ? (
                    <FavoriteIcon fontSize={"large"}/>
                    ) : (
                    <FavoriteBorderIcon fontSize={"large"}/>
                    )
                }
                <p>{liked ? likes+1:likes}</p>

            </div>
            <div className="sidebar__button">
                <InsertCommentIcon fontSize={"large"}/><p>{comments}</p>
            </div>
            <div className="sidebar__button">
                <ShareIcon fontSize={"large"}/><p>{shares}</p>
            </div>
        </div>
    );
};

export default Sidebar;
