import React from 'react';
import { withStyles } from "@material-ui/styles";
import DeleteIcon from '@material-ui/icons/Delete'

const styles = {
    root: {
        width: '20%',
        height: '25%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-3.5px',
        "&:hover svg": {
            color: "white",
            transform: "scale(1.5)"
        }
    },
    boxContent: {
        position: 'absolute',
        width: '100%',
        left: 0,
        bottom: 0,
        padding: 10,
        color: 'black',
        letterSpacing: 1,
        textTransform: 'uppercase',
        fontSize: 12,
        display: "flex",
        justifyContent: "space-between"
    },
    deleteIcon: {
        transition: "all 0.3s ease-out"
    }
}

function DragableColorBox(props) {
    const {classes, name, color, handleClick}= props
    return (
        <div className={classes.root} style={{backgroundColor: color}}>
            <div className={classes.boxContent}>
                <span>{name}</span>
                <DeleteIcon className={classes.deleteIcon} onClick={handleClick}/>
            </div>

        </div>
    )
}

export default withStyles(styles)(DragableColorBox);
