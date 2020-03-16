import React, {useState} from "react";
import AuthPresenter from "./AuthPresenter"
import useInput from "../../Hooks/useInput";
import { LOG_IN, CREATE_ACCOUNT, CONFIRM_SECRET, LOCAL_LOG_IN } from "./AuthQueries";
import {useMutation} from "react-apollo-hooks";
import { toast } from "react-toastify";

// This simplicity is possible by react-hooks

export default () => {
    const [action, setAction] = useState("logIn");
    const username = useInput("");
    const password = useInput("");
    const firstName = useInput("");
    const lastName = useInput("");
    const secret = useInput("");
    const email = useInput("");
    const [requestSecretMutation] = useMutation(LOG_IN, {
        update: (_, {data}) => {
            const {requestSecret} = data;
            if (!requestSecret) {
                toast.error("You don't have an account yet, create one");
                setTimeout(() => setAction("signUp"), 3000);
            }
        },
        variables: {email: email.value}
    });

    const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
        variables: {
            email: email.value,
            username: username.value,
            firstName: firstName.value,
            lastName: lastName.value
        }
    });

    const [confirmSecrectMutation] = useMutation(CONFIRM_SECRET, {
        variables: {
            email: email.value,
            secret: secret.value
        }
    })

    const [localLogInMutation] = useMutation(LOCAL_LOG_IN);

    const onSubmit = async e => {
        e.preventDefault();
        if (action === "logIn"){
            if (email !== ""){
                try{
                    const {data: {requestSecret}} = await requestSecretMutation();
                    if (!requestSecret) {
                        toast.error("You don't have an account yet, create one");
                        setTimeout(() => setAction("signUp"), 1000);
                    } else {
                        toast.success("Check your inbox for login secret!")
                        setAction("confirm");
                    }
                } catch {
                    toast.error("Could not request secret, try again.")
                }
            } else {
                toast.error("Email is required");
            } 
        } else if (action === "signUp") {
            if (
                email.value !== "" &&
                username.value !== "" &&
                firstName.value !== "" &&
                lastName.value !== ""
            ) {
                try{
                    const {data:{createAccount}} = await createAccountMutation();
                    if (!createAccount) {
                        toast.error("Cannot create account. Try contacting jeeheonkim0@gmail.com");
                    } else {
                        toast.success("Account created! Log in now.");
                        setTimeout(()=>setAction("logIn"), 3000);
                    }
                } catch{
                    toast.error("Could not create account. Try again.")
                }
            } else {
                toast.error("All fields are required")
            }
        } else if (action === "confirm"){
            if (secret.value !== ""){
                try {
                    const {data: {confirmSecret: token}} = await confirmSecrectMutation();
                    if (token!=="" && token!==undefined ){
                        localLogInMutation({variables: {token}});
                    } else {
                        throw Error("Cannot confirm secret, check again");
                    }
                } catch {
                    toast.error("Cannot confirm secret, check again");
                }
            } 
        }
    }

    return (
        <AuthPresenter 
            setAction={setAction} 
            action={action} 
            username={username} 
            password={password} 
            firstName={firstName}
            lastName={lastName}
            email={email}
            secret={secret}
            onSubmit={onSubmit}
        />
    );
};
