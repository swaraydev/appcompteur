import React from "react";

export default function Input() {


    const Input = ({ label }) => {

        // changer la couleur du label
        const [isValid, setIsValid] = React.useState(true);

        /**
         * méthode permet de vérifier si l'email et valide
         * @param adresseEmail
         * @returns {boolean} true si l'email et valide
         */
        const verifEmail = (adresseEmail) => {
            // return ? boolean
            if (adresseEmail === '') {
                return true
            }

            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(adresseEmail).toLowerCase());
        }

        /**
         * méthode qui va s'executer quand on key change
         * @param e input
         */
        const handleChange = (e) => {
            const valueEmail = e.target.value;
            setIsValid(verifEmail(valueEmail))
        }


        return (
            <div className="form-group mt-3">
            <label style={{color : isValid ? 'green' : 'red'}}>{label}</label>
            <input type="email" className="form-control" placeholder={label} onChange={handleChange}/>
        </div>
        )
    }
}