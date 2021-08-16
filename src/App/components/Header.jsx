import React from 'react';
import { Grid,AppBar,Toolbar, InputBase,IconButton,Badge, makeStyles} from '@material-ui/core';
import { ChatBubbleOutline, NotificationsNone, PowerSettingsNew } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';


// const useStyles = makeStyles({
//     root:{
//         backgroundColor:'#FFF'
//     },

//     searchInput : {
//         oacity:'',
//         padding:'0px 8px',
//         fontSize:'0.8 rem',
//         '& : hover': {
//             backgroundColor:'#F22FF2'
//         },

//         '& .MuiSvgIcon-root':{
//         marginRight:'8px'
//         }
//     },
//     // btnRoot:{
//     //     backgroundColor:'green'  
//     // },
//     // btnLabel:{
//     //     backgroundColor:'red'    
//     // }
// });

const useStyles = makeStyles(theme => (
    {
        root:{
            backgroundColor:'#FFF',
            transform:'translateZ(0)'
        },
    
        searchInput : {
            oacity:'',
            padding:`0px ${theme.spacing(1)}px`,
            fontSize:'0.8 rem',
            '& : hover': {
                backgroundColor:'#F2F2F2'
            },
    
            '& .MuiSvgIcon-root':{
            marginRight:theme.spacing(1)
            }
        },
    }
))

export default function Header() {

const  classes  = useStyles();

    return (
        <div>
            <AppBar position="static" className={classes.root}>

              <Toolbar>
                  <Grid container alignItems="center">
                    <Grid item>
                        <InputBase
                        className={classes.searchInput}
                        placeholder="Search Here"
                        startAdornment = {<SearchIcon fontSize="small" />}
                        />
                    </Grid>
                    <Grid item sm></Grid>

                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                  <NotificationsNone fontSize="small"/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={3} color="primary">
                                  <ChatBubbleOutline fontSize="small"/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge>
                                  <PowerSettingsNew/>
                            </Badge>
                        </IconButton>
                    </Grid>
                  </Grid>
              </Toolbar>
            </AppBar>
        </div>
    )
}
