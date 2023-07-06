import {Link} from "react-router-dom";

export default function About(){
    return (
        <div className="aboutContainer">
            <div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id iaculis orci, in bibendum diam. Vivamus blandit lacus ac nibh tincidunt dapibus quis nec tortor. Pellentesque non lorem vitae neque maximus gravida. Sed ac neque sit amet lorem mollis ultricies in at augue. Fusce ut lacus tempus elit gravida fermentum viverra non neque. Pellentesque vitae nulla quam. In sagittis ipsum mi, non consequat dolor faucibus id. Vestibulum ac nulla aliquet, ultrices eros ut, ultricies enim. Nullam nec eros eget nisl tincidunt iaculis volutpat id nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam ac rhoncus turpis. Vestibulum sed nibh erat. Pellentesque sagittis ultricies justo vitae ullamcorper.
                </p>
            </div>
            <div>
                <Link to="https://www.instagram.com/krctnege/">
                    Instagram
                </Link>
                <Link to="https://www.linkedin.com/in/ege-karacetin-255190262/">
                    LinkedIn
                </Link>
                <Link to="https://github.com/smurfettee">
                    Github
                </Link>
            </div>
        </div>
    );
}