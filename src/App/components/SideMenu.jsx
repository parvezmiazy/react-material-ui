import React from 'react'
//import { makeStyles,withStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

//with makeStyles

// const useStyles = makeStyles ({
//     sideMenu: {
//         display: 'flex',
//         flexDirection: 'column',
//         position: 'absolute',
//         left: '0 px',
//         width: '320 px',
//         height: '100%',
//         backgroundColor: '#253053'
//       }
//     })

// export default function Sidebar() {

//     const classes = useStyles();
//     return (
//         <div className={classes.sideMenu}>
//             <p>sidebar</p>
//         </div>
//     )
// }

// with withStyles

const style = {
  sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100%',
        backgroundColor: '#253053'
      }
    }

 const  SideMenu = (props) => {

   const  { classes }= props;

    return (
        <div className={classes.sideMenu}>
            
        </div>
    )
}

export default withStyles(style) (SideMenu);
