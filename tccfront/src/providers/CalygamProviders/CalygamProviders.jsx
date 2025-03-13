

import { createContext, useState } from "react";
import ComponentToggleContext from "../../context/ComponentToggleContext";
import { MockUserDataContext } from "../../context/MockUserDataContext/MockUserDataContext";
import usePhotoMockData from "../../hooks/UserMockHook/UserMockHook";
import { CalygamAuthContext } from "../../context/CalygamAuthContext/CalygamAuthContext";

export const CalygamProvidersContext = createContext()

export default function CalygamProviders({ children }) {
    const { userPhoto } = usePhotoMockData()
    const [toggleComponent, setToggleComponent] = useState(false)
    const [toggleUploadModal, setToggleUploadModal] = useState(false)
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userPhone, setUserPhone] = useState('')
    const [userCpf, setUserCpf] = useState('')
    return (
        <ComponentToggleContext.Provider value={{
            toggleComponent,
            setToggleComponent,
            toggleUploadModal,
            setToggleUploadModal
        }}>
            <MockUserDataContext.Provider value={{ userPhoto }}>
                <CalygamAuthContext.Provider value={{
                    userName, setUserName,
                    userEmail,setUserEmail,
                    userPassword, setUserPassword,
                    userPhone, setUserPhone,
                    userCpf, setUserCpf}}>

                    {children}

                </CalygamAuthContext.Provider>

            </MockUserDataContext.Provider>
        </ComponentToggleContext.Provider>
    )
}
