import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { banner } from '../common/Links';
import { Link } from 'react-router-dom';

function Notificationbanner() {
    const [close, setClose] = useState();

    const show = {
        opacity: 1,
        display: "block"
    };

    const hide = {
        opacity: 0,
        transitionEnd: {
            display: "none"
        }
    };
    return (
        <Link to={banner.link} target='_blank' >
            <motion.div onClick={() => { setClose(!close) }} animate={close ? hide : show} className={`text-center ${close ? 'hidden' : 'block'} break-words px-5 py-2.5 cursor-pointer bg-[#82a9ec] text-[#203353] `}>
                <div className="lg:text-[14px] text-xs font-sans font-medium" dangerouslySetInnerHTML={{ __html: banner.message }} />
            </motion.div>
        </Link>
    )
}

export default Notificationbanner
