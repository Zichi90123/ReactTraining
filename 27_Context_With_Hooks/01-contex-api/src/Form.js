import React, { useContext } from 'react'
import { Avatar, Button, FormControl, FormControlLabel, Checkbox, Input, InputLabel, Paper, Typography, MenuItem, Select } from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import styles from './styles/FormStyles'
import { LanguageContext } from './contexts/LanguageContext'

const words = {
    english: {
        signIn: "Sign In",
        password: "Password",
        remember: "Remember me",
        email: "Email"
    },
    french: {
        signIn: "Se Connecter",
        password: "Mot De Passe",
        remember: "Souviens-toi De Moi",
        email: "Adresse Ëlectronique"
    },
    spanish: {
        signIn: "Registrarse",
        password: "Contraseña",
        remember: "Recuérdame",
        email: "Correo Electronico"
    },
    italian: {
        signIn: "Accedi",
        password: "Password",
        remember: "Ricordami",
        email: "Indirizzo Email"
    }
}

function Form(props) {
    const { language, changeLanguage } = useContext(LanguageContext)
    const { classes } = props
    const { email, signIn, password, remember } = words[language]
    return (
        <main className={classes.main}>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{signIn}</Typography>
                <Select value={language} onChange={changeLanguage}>
                    <MenuItem value="english">English</MenuItem>
                    <MenuItem value="french">French</MenuItem>
                    <MenuItem value="spanish">Spanish</MenuItem>
                    <MenuItem value="italian">Italian</MenuItem>
                </Select>
                <form className={classes.form}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">{email}</InputLabel>
                        <Input id="email" name="email" autoFocus></Input>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">{password}</InputLabel>
                        <Input id="password" name="password" autoFocus></Input>
                    </FormControl>
                    <FormControlLabel
                        control={<Checkbox color="primary" />}
                        label={remember}
                    />
                    <Button variant="contained" type="submit" fullWidth color="primary" className={classes.submit}>{signIn}</Button>
                </form>
            </Paper>
        </main>
    )
}

export default withStyles(styles)(Form)
