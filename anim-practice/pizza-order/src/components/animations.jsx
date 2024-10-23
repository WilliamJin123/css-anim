

export const defaultVariant={
    transition:{
        type:'spring',
        stiffness:50,
        delay:0
    }
}
export const childVariant = {
    initial: {
        opacity:0
    },
    animation:{
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.4
        }
    }
}

export const pageVariant ={
    initial: {
        opacity: 0,
        x:'100vw'
    },
    animation: {
        x:0,
        opacity:1,
        transition:{
            type:'spring',
            stiffness:50,
            delay:0,
            mass:0.4,
            damping: 8,
            when:'beforeChildren',
            staggerChildren:0.4,
        }
    },
}


export const listItemVariant ={
    
    whileHover:{
        scale:1.3,
        color:'#f8e112',
        originX:0
    },
    initial:{
        x:'100vw'
    },
    animation:{
        x:0,
        
    },
    // transition:{
        // type:'spring',
        // stiffness:50,
        // delay:0,
        // mass:0.4,
        // damping: 8,
        // staggerChildren:0.4,
    // }
   
}
export const buttonVariant = {
    whileHover:{
        // scale:[1.25,1.35,1.25],
        scale:1.15,
        y:-5,
        backgroundColor:'var(--white)',
        color:'#58066F',
        boxShadow: '0px 0px 4px rgb(255,255,255)',
        transition:{
            duration: 0.3,
            ease:'easeInOut',
            scale:{
                repeat:Infinity, 
                repeatType:'reverse',
                // times:[0,0.5,1],
                duration:0.6,
                delay:1,
            }
        }
    }
}
export const homePageVariant ={
    visible: {
       
        
        scale:1,
        transition:{
            duration:1,
            ease: [0.2, 0.79, 0.59, 0.95],
            delay:0.1,
            
        },
        opacity:0.7

    }
}
