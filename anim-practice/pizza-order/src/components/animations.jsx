

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
    }
}
export const buttonVariant = {
    whileHover:{
        y:-5,
        backgroundColor:'var(--white)',
        color:'#58066F',
        boxShadow: '0px 0px 4px rgb(255,255,255)',
        transition:{
            duration: 0.3,
            ease:'easeInOut',
        }
    }
}
