import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { message } from '../common/Links';

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
        <motion.div onClick={() => { setClose(!close) }} animate={close ? hide : show} className={`text-center ${close ? 'hidden' : 'block'} break-words px-5 py-2.5 cursor-pointer bg-[#82a9ec] text-[#203353] `}>
            <div className="lg:text-[14px] text-xs font-sans font-medium" dangerouslySetInnerHTML={{ __html: message }} />
        </motion.div>
    )
}

export default Notificationbanner
