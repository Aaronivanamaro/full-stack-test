import { socialNetworks } from "../data/socialNetworkData";

const SocialNetworks = () => {

    return (
        <div className="social-net-container">
            <div>
                {socialNetworks.map((item, index) => {
                    return (
                        <a href={item.link} key={index}>
                            {item.icon}
                        </a>
                    )
                })}
            </div>
        </div>
    );
}

export default SocialNetworks;