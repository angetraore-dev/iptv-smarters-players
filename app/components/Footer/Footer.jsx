import { FaTrademark } from "react-icons/fa";
import { CgCopyright } from "react-icons/cg";
import {
    BsGithub,
    BsDribbble,
    BsFacebook,
    BsInstagram,
    BsYoutube,
} from "react-icons/bs";
import { FaInstalod } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
//import FooterList from "./FooterList";

const Footer = () => {
    return (

    <div>

        <div
            className="w-full py-16 grid grid-cols-1 md:grid-cols-3 lgl:grid-cols-4 xl:grid-cols-6 gap-16 border-b-[1px] border-b-zinc-800">

            <div className="col-span-2 flex flex-col">
                <p className="font-bold text-gray-200 text-3xl tracking-wider uppercase mb-4 relative">
                    GREEK IPTV STORE
                    <span className="absolute top-1 font-normal text-xs text-center">
              <FaTrademark/>
            </span>
                </p>
                {/*
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
                    esse ad modi sint perferendis, excepturi corrupti illo id fuga
                    eveniet aliquid veritatis facilis consequuntur eos magni beatae
                    voluptatibus quas consequatur molestiae! Quo magni temporibus non.
                </p>
                */}
            </div>

            {/*
            <FooterList
                title="Products"
                list={["Web Design", "Figma Design", "Development", "Graphic Design"]}
            />
            <FooterList
                title="Features"
                list={["Pricing", "Services", "Contact", "Blog", "Newsletter"]}
            />
            <FooterList
                title="Get Started"
                list={["About", "License", "Development", "Privacy Policy", "FAQ"]}
            />
            <FooterList
                title="Other Services"
                list={[
                    "Web Hosting",
                    "Creative Design",
                    "SEO Management",
                    "Authentication",
                    "Advanced Coding",
                ]}
            />
            */}
        </div>
        <div className="flex justify-between items-center py-6">
            <div>
                <p className="text-xl font-medium text-gray-200">Social Media</p>
                <div className="flex items-center gap-4 mt-4">
                    <BsGithub className="text-lg text-gray-200 hover:text-textDesignColor cursor-pointer"/>
                    <BsDribbble className="text-lg text-gray-200 hover:text-textDesignColor cursor-pointer"/>
                    <SiNextdotjs className="text-lg text-gray-200 hover:text-textDesignColor cursor-pointer"/>
                    <BsFacebook className="text-lg text-gray-200 hover:text-textDesignColor cursor-pointer"/>
                    <BsInstagram className="text-lg text-gray-200 hover:text-textDesignColor cursor-pointer"/>
                    <BsYoutube className="text-lg text-gray-200 hover:text-textDesignColor cursor-pointer"/>
                    <FaInstalod className="text-lg text-gray-200 hover:text-textDesignColor cursor-pointer"/>
                </div>
            </div>
            <p className="hidden mdl:flex items-center gap-.5 text-sm">
                <CgCopyright/> angetraore-dev IT Developer
            </p>
        </div>
        {/* ================= Footer Bottom End here ================= */}

    </div>
    );
}

export default Footer;
/**
 * <footer
 *             style={{ textAlign: "center", marginTop: "20px", fontSize: "14px" }}
 *         >
 *           © 2023 angetraore-dev
 *         </footer>
 */

/**
 * <div>
 *
*
<div
    className="w-full py-16 grid grid-cols-1 md:grid-cols-3 lgl:grid-cols-4 xl:grid-cols-6 gap-16 border-b-[1px] border-b-zinc-800">
    *
    * <div className="col-span-2 flex flex-col">
    * <p className="font-bold text-gray-200 text-3xl tracking-wider uppercase mb-4 relative">
    * SMARTERS IPTV
    * <span className="absolute top-1 font-normal text-xs text-center">
 *               <FaTrademark/>
 *             </span>
    * </p>
    * <p>
    * Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
    * esse ad modi sint perferendis, excepturi corrupti illo id fuga
    * eveniet aliquid veritatis facilis consequuntur eos magni beatae
    * voluptatibus quas consequatur molestiae! Quo magni temporibus non.
    * </p>
    * </div>
    *
    * <FooterList
    *                     title="Products"
    * list={["Web Design", "Figma Design", "Development", "Graphic Design"]}
    * />
    * <FooterList
    *                     title="Features"
    * list={["Pricing", "Services", "Contact", "Blog", "Newsletter"]}
    * />
    * <FooterList
    *                     title="Get Started"
    * list={["About", "License", "Development", "Privacy Policy", "FAQ"]}
    * />
    * <FooterList
    *                     title="Other Services"
    * list={[
    * "Web Hosting",
    *                         "Creative Design",
    *                         "SEO Management",
    *                         "Authentication",
    *                         "Advanced Coding",
    *                     ]}
    * />
    * </div>
* <div className="flex justify-between items-center py-6">
    * <div>
    * <p className="text-xl font-medium text-gray-200">Social Media</p>
    * <div className="flex items-center gap-4 mt-4">
    * <BsGithub className="text-lg text-gray-200 hover:text-textDesignColor cursor-pointer"/>
    * <BsDribbble className="text-lg text-gray-200 hover:text-textDesignColor cursor-pointer"/>
    * <SiNextdotjs className="text-lg text-gray-200 hover:text-textDesignColor cursor-pointer"/>
    * <BsFacebook className="text-lg text-gray-200 hover:text-textDesignColor cursor-pointer"/>
    * <BsInstagram className="text-lg text-gray-200 hover:text-textDesignColor cursor-pointer"/>
    * <BsYoutube className="text-lg text-gray-200 hover:text-textDesignColor cursor-pointer"/>
    * <FaInstalod className="text-lg text-gray-200 hover:text-textDesignColor cursor-pointer"/>
    * </div>
    * </div>
    * <p className="hidden mdl:flex items-center gap-.5 text-sm">
    * <CgCopyright/> SMARTERS_2023 All rights reserved
    * </p>
    * </div>
    /* ================= Footer Bottom End here ================= *
*
</div>
 */