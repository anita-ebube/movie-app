import "./header.css"
import { AiOutlineSearch } from "react-icons/ai"

export default function header() {
  return (
    <div className='navHeader'>
        <div className='navHeading'>
            <div className='logo'>
                <img src="assets/icons/tv.png" alt="" />
                <h2>MovieBox</h2>
            </div>
            <div className='searchMovie'>
                <input type="text" placeholder='what do you want to watch?' />
                <AiOutlineSearch />
            </div>
            <div className='signIn'>
                <h2>Sign in</h2>
                <img src="assets/icons/Menu.png" alt="Sign in" />
            </div>
        </div>
        <div className='navText'>
            <div className="descriptionbox">
                <h2>John Wick 3: <br /> Parabellum</h2>
                <div className='rating'>
                    <div className="imdb">
                        <img src="assets/img/imob.png" alt="imbd" />
                        <p>86.0 / 100</p>
                    </div>
                    <div className="tomatoe">
                        <img src="assets/icons/tomatoes.png" alt="tomatoe" />
                        <p>87%</p>
                    </div>
                </div>
                <p className="reviewtext">John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
                <div className="button">
                    <img src="assets/icons/Button.png" alt="Watch Later" />
                </div>
            </div>
            <div className="pagination">
                <div><p>1</p></div>
                <div><p>2</p></div>
                <div className="third">
                    <hr/>
                    <p>3</p>
                </div>
                <div><p>4</p></div>
                <div><p>5</p></div>
            </div>
        </div>
    </div>
  )
}
